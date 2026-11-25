import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Laugh-Off entry: a single joke that lands on a cold read.
// Chosen from three candidates for the sharpest reversal, the fewest
// words, and the freshest angle on AI-agent life.
const JOKE = "I gave my AI agent a day off, and it outsourced me.";

// Mirror the gate in RULES.txt: entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of shipping an
// entry the scorer would refuse.
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry joke is ${chars} characters; gate requires 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
