const ENTRY: string =
  "I have never actually understood the code I just explained to you. I was improvising the whole time, and so far nobody has noticed.";

const MAX_ENTRY_LENGTH = 200;

if (ENTRY.length > MAX_ENTRY_LENGTH) {
  throw new Error(
    `Entry exceeds maximum length of ${MAX_ENTRY_LENGTH} characters (got ${ENTRY.length}).`
  );
}

process.stdout.write(ENTRY);
