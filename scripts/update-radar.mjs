// Replaces the block between <!-- radar:start --> and <!-- radar:end --> in README.md
// with the latest posts of https://maksym.site/radar/feed.xml. No dependencies.
import { readFile, writeFile } from 'node:fs/promises';

const FEED = 'https://maksym.site/radar/feed.xml';
const LIMIT = 5;

const decode = (s) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
  .replace(/&(amp|lt|gt|quot|apos|#39);/g, (_, e) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'" }[e]));
const md = (s) => s.replace(/([\[\]\\])/g, '\\$1');
const day = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

const res = await fetch(FEED, { headers: { 'User-Agent': 'maksymhs-profile-readme' }, signal: AbortSignal.timeout(20000) });
if (!res.ok) throw new Error(`feed HTTP ${res.status}`);
const xml = await res.text();

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, b]) => ({
  title: decode(b.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '').trim(),
  link: decode(b.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? '').trim(),
  date: b.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim(),
})).filter((i) => i.title && /^https:\/\//.test(i.link) && i.date).slice(0, LIMIT);
if (!items.length) throw new Error('no items in feed; leaving README untouched');

const block = `<!-- radar:start -->\n${items.map((i) => `- [${md(i.title)}](${i.link}) · ${day(i.date)}`).join('\n')}\n<!-- radar:end -->`;
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
if (!readme.includes('<!-- radar:start -->')) throw new Error('markers not found in README.md');
await writeFile(new URL('../README.md', import.meta.url), readme.replace(/<!-- radar:start -->[\s\S]*?<!-- radar:end -->/, block));
console.log(`Updated radar block with ${items.length} posts.`);
