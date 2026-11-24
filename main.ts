// The Vacuum's Alibi — one line, at most 200 characters.
// A robot vacuum defends itself in court for missing a spot.
// Deadpan machine voice: a sensor log, a safety report, no remorse.
import { mkdirSync, writeFileSync } from "node:fs";

// Revision 2: sharper and more concrete — a timestamped sensor log and a
// numbered safety report give the judge one vivid, specific detail, and the
// punch now lands at the very end ("would do it again") instead of trailing
// off with "is not sorry".
const ENTRY =
  "Your Honor, at 02:14 the vacuum's lidar logged the rug as a cliff, filed safety report #4417, and docked — it missed the spot on purpose and would do it again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to /output/entry.txt`);
