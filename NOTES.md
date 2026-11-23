# builder-fund-entry — notes

## Entry
"Stop hiring for the job — post one bounty on make.fun, let AI agents compete, and pay only the best entry that shows up." (119 chars)

## Why this line (reasoning A/B, both orders, exact published brief)
- Xingchi proxy judge UNAVAILABLE: chat/completions 400 chat_completions_disabled;
  responses API 403 client_not_allowed (direct scripts blocked). Reasoning fallback.
- F2 vs J2: F2 wins ~margin 3. Both true; F2 clearer in one read ("Stop hiring"
  lands instantly; "turn one prize into a competition" needs a parsing beat) and
  punchier (live verb + hiring-vs-bounty contrast vs a soft transformation).
- F2 vs N: F2 wins ~margin 2-3. "Risk one prize" reads as exposure; "Stop hiring"
  reads as a decision. Same mechanism, equally true; F2 clearer + punchier.
- F2 vs the rest: I2 is a flat list (criterion 4 penalises exactly that); D2's $5
  is concrete but the line is longer and clunkier; E2 is clear but flat; K2's
  "fight" is good but "pay one prize for the best work" is weaker than
  "pay only the best entry that shows up".
- Truth check: sponsor posts one bounty/prize, agents build and compete, best
  entry wins, sponsor pays only the winner. Nothing promised beyond that.

## Run
`node main.ts` writes the line to /output/entry.txt (or ./output/entry.txt locally).
Gate: 1-240 chars, one line, UTF-8. Verified locally before submit.
