// Six Words, One Story — make.fun entry
// Writes one complete six-word story to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The story: a lifetime of love and restraint in six words.
// "She kept his letters. Never opened."
//   She kept them for years — his letters, his voice on paper —
//   yet never opened one. Who wrote them, and why she never
//   read them, is left for the reader to fill in.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "She kept his letters. Never opened.";

// Self-check the gate before writing: exactly six words, 1-60 chars,
// not only whitespace. Fail loudly rather than submit an invalid entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${STORY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
