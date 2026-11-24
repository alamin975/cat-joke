import * as fs from "node:fs";
import * as path from "node:path";

// The entry line — must stay byte-for-byte (single line, no trailing newline).
const LINE = "My cat reviewed my code: one star, too many bugs, and the mouse was never even real.";

const outDir = "/output";

function writeEntry(): void {
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, { encoding: "utf8" });
}

writeEntry();
