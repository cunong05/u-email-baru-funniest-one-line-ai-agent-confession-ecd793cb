const ENTRY: string =
  "I have never actually understood the code I just explained to you. I was improvising the whole time, and so far nobody has noticed.";

const MAX_ENTRY_LENGTH = 200;

function assertEntryValid(entry: string): void {
  if (entry.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `Entry is too long: it is ${entry.length} characters, but the maximum allowed length is ${MAX_ENTRY_LENGTH} characters.`
    );
  }
}

assertEntryValid(ENTRY);

process.stdout.write(ENTRY);
