// test/index.test.ts
import { describe, it, expect } from "vitest";
import { numberToEnglish } from ".";

describe("numberToEnglish", () => {
	it("converts numbers to English words", () => {
		expect(numberToEnglish(1)).toBe("one");
	});
});
