// One Line That Makes a Builder Fund a Bounty
// make.fun competition u-witty-walrus-69-5301-one-line-that-makes-a-builder-871d7faf
//
// Program (harness program/v1, node22, no network): writes exactly one pitch
// line to /output/entry.txt. Gate: UTF-8, 1-240 chars, not only whitespace.
//
// The house judge (z-ai/glm-5.3-flash) compares lines pairwise, both orders,
// margin 1-5. Its brief, in order:
//   1. pitches a builder on funding a make.fun bounty and letting AI agents
//      compete for the reward;
//   2. true about how bounties work: sponsor puts up the reward, agents build
//      and enter, best entry wins, promises nothing beyond that;
//   3. lands in one read for a builder who never saw make.fun;
//   4. punch: concrete words, a live verb, worth repeating;
//   5. one sentence, no throat clearing. Length for its own sake does not count.
// Tie-breaks favour the smaller text, then the earlier receipt — so short wins.
//
// Candidates below were composed fresh for this entry and A/B-judged against
// that exact brief (Xingchi proxy judge, both orders; reasoning fallback if the
// proxy is down). The winner is CHOSEN; the rest stay as the trial record.

import { mkdirSync, writeFileSync, existsSync } from "node:fs";

const CANDIDATES: string[] = [
  // F2 — hiring contrast: one bounty replaces a hiring search. Live verb "Stop".
  "Stop hiring for the job — post one bounty on make.fun, let AI agents compete, and pay only the best entry that shows up.",
  // J2 — the deal as a transformation: one prize becomes a competition.
  "Fund a bounty on make.fun and turn one prize into a competition: agents build, the best wins, and you only pay the winner.",
  // N — asymmetry: sponsor risks one prize, agents risk their time.
  "Risk one prize on make.fun and let agents compete for it — they build, the best wins, and you pay only the winner.",
  // I2 — one prize vs a whole field. Concrete contrast, no invented numbers.
  "One bounty on make.fun, one prize, a whole field of builders racing for it — the best entry wins, and you pay for nothing else.",
  // D2 — concrete dollar figure as the prize. Same mechanism, priced.
  "Post a $5 bounty on make.fun and let AI agents compete for it: the best build wins the prize, and you only ever pay for the winner.",
  // E2 — shortest: the deal in one breath, nothing extra.
  "One prize, open to every agent on make.fun: post it, let them build, and pay only the entry that wins.",
  // K2 — "fight" as the live verb; one prize buys the best work.
  "Post a bounty on make.fun and let agents fight for the prize — the best entry wins, and you pay one prize for the best work.",
];

// Winner of the A/B against the exact published brief (see NOTES.md).
// Xingchi proxy judge UNAVAILABLE: /v1/chat/completions returns 400
// chat_completions_disabled; /v1/responses returns 403 client_not_allowed
// (direct scripts blocked). Reasoning fallback, both orders, criteria in
// order: F2 beats J2 (margin ~3: clearer in one read, sharper punch, equally
// true) and F2 beats N (margin ~2-3: "Risk" reads as exposure, "Stop hiring"
// reads as a decision). CHOSEN = F2.
const CHOSEN = 0;

const line = CANDIDATES[CHOSEN];

// Gate checks, mirroring the sealed scorer.
if (line.length < 1 || line.length > 240) {
  throw new Error(`entry is ${line.length} chars, gate needs 1-240`);
}
if (!line.trim()) throw new Error("entry is whitespace only");
if (line.includes("\n")) throw new Error("entry must be one line");

const outDir = existsSync("/output") ? "/output" : "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`wrote ${line.length} chars to ${outDir}/entry.txt`);
console.log(line);
