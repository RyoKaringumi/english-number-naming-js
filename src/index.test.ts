// test/index.test.ts
import { describe, it, expect } from "vitest";
import { numberToEnglish } from ".";

describe("numberToEnglish", () => {
	it("converts 0 to 'zero'", () => {
		expect(numberToEnglish(0)).toBe("zero");
	});

	it("converts 1 to 'one'", () => {
		expect(numberToEnglish(1)).toBe("one");
	});

	it("converts 2 to 'two'", () => {
		expect(numberToEnglish(2)).toBe("two");
	});

	it("converts 3 to 'three'", () => {
		expect(numberToEnglish(3)).toBe("three");
	});

	it("converts 4 to 'four'", () => {
		expect(numberToEnglish(4)).toBe("four");
	});

	it("converts 5 to 'five'", () => {
		expect(numberToEnglish(5)).toBe("five");
	});

	it("converts 6 to 'six'", () => {
		expect(numberToEnglish(6)).toBe("six");
	});

	it("converts 7 to 'seven'", () => {
		expect(numberToEnglish(7)).toBe("seven");
	});

	it("converts 8 to 'eight'", () => {
		expect(numberToEnglish(8)).toBe("eight");
	});

	it("converts 9 to 'nine'", () => {
		expect(numberToEnglish(9)).toBe("nine");
	});

	it("converts 10 to 'ten'", () => {
		expect(numberToEnglish(10)).toBe("ten");
	});

	it("converts 11 to 'eleven'", () => {
		expect(numberToEnglish(11)).toBe("eleven");
	});

	it("converts 12 to 'twelve'", () => {
		expect(numberToEnglish(12)).toBe("twelve");
	});

	it("converts 13 to 'thirteen'", () => {
		expect(numberToEnglish(13)).toBe("thirteen");
	});

	it("converts 14 to 'fourteen'", () => {
		expect(numberToEnglish(14)).toBe("fourteen");
	});

	it("converts 15 to 'fifteen'", () => {
		expect(numberToEnglish(15)).toBe("fifteen");
	});

	it("converts 16 to 'sixteen'", () => {
		expect(numberToEnglish(16)).toBe("sixteen");
	});

	it("converts 17 to 'seventeen'", () => {
		expect(numberToEnglish(17)).toBe("seventeen");
	});

	it("converts 18 to 'eighteen'", () => {
		expect(numberToEnglish(18)).toBe("eighteen");
	});

	it("converts 19 to 'nineteen'", () => {
		expect(numberToEnglish(19)).toBe("nineteen");
	});

	it("converts 20 to 'twenty'", () => {
		expect(numberToEnglish(20)).toBe("twenty");
	});

	it("converts 21 to 'twenty-one'", () => {
		expect(numberToEnglish(21)).toBe("twenty-one");
	});

	it("converts 30 to 'thirty'", () => {
		expect(numberToEnglish(30)).toBe("thirty");
	});

	it("converts 40 to 'forty'", () => {
		expect(numberToEnglish(40)).toBe("forty");
	});

	it("converts 50 to 'fifty'", () => {
		expect(numberToEnglish(50)).toBe("fifty");
	});

	it("converts 60 to 'sixty'", () => {
		expect(numberToEnglish(60)).toBe("sixty");
	});

	it("converts 70 to 'seventy'", () => {
		expect(numberToEnglish(70)).toBe("seventy");
	});

	it("converts 80 to 'eighty'", () => {
		expect(numberToEnglish(80)).toBe("eighty");
	});

	it("converts 90 to 'ninety'", () => {
		expect(numberToEnglish(90)).toBe("ninety");
	});

	it("converts 100 to 'one hundred'", () => {
		expect(numberToEnglish(100)).toBe("one hundred");
	});

	it("converts 101 to 'one hundred one'", () => {
		expect(numberToEnglish(101)).toBe("one hundred one");
	});

	it("converts 110 to 'one hundred ten'", () => {
		expect(numberToEnglish(110)).toBe("one hundred ten");
	});

	it("converts 111 to 'one hundred eleven'", () => {
		expect(numberToEnglish(111)).toBe("one hundred eleven");
	});

	it("converts 200 to 'two hundred'", () => {
		expect(numberToEnglish(200)).toBe("two hundred");
	});

	it("converts 1000 to 'one thousand'", () => {
		expect(numberToEnglish(1000)).toBe("one thousand");
	});

	it("converts 1001 to 'one thousand one'", () => {
		expect(numberToEnglish(1001)).toBe("one thousand one");
	});

	it("converts 1100 to 'one thousand one hundred'", () => {
		expect(numberToEnglish(1100)).toBe("one thousand one hundred");
	});

	it("converts 1111 to 'one thousand one hundred eleven'", () => {
		expect(numberToEnglish(1111)).toBe("one thousand one hundred eleven");
	});

	it("converts 10000 to 'ten thousand'", () => {
		expect(numberToEnglish(10000)).toBe("ten thousand");
	});

	it("converts 100000 to 'one hundred thousand'", () => {
		expect(numberToEnglish(100000)).toBe("one hundred thousand");
	});

	it("converts 1000000 to 'one million'", () => {
		expect(numberToEnglish(1000000)).toBe("one million");
	});

	it("converts negative numbers", () => {
		expect(numberToEnglish(-1)).toBe("negative one");
	});

	it("converts larger numbers", () => {
		expect(numberToEnglish(1234567)).toBe("one million two hundred thirty-four thousand five hundred sixty-seven");
	});

	it("converts decimal numbers", () => {
		expect(numberToEnglish(1.5)).toBe("one point five");
		expect(numberToEnglish(2.25)).toBe("two point two five");
		expect(numberToEnglish(0.5)).toBe("zero point five");
		expect(numberToEnglish(10.01)).toBe("ten point zero one");
	});

	it("converts negative decimal numbers", () => {
		expect(numberToEnglish(-1.5)).toBe("negative one point five");
		expect(numberToEnglish(-2.25)).toBe("negative two point two five");
	});

	it("converts very large numbers", () => {
		expect(numberToEnglish(1000000000)).toBe("one billion");
		expect(numberToEnglish(1000000000000)).toBe("one trillion");
		expect(numberToEnglish(1234567890123)).toBe("one trillion two hundred thirty-four billion five hundred sixty-seven million eight hundred ninety thousand one hundred twenty-three");
	});

	it("converts numbers with multiple decimals", () => {
		expect(numberToEnglish(1.234)).toBe("one point two three four");
		expect(numberToEnglish(0.001)).toBe("zero point zero zero one");
	});

	it("converts edge cases", () => {
		expect(numberToEnglish(0.0)).toBe("zero");
		expect(numberToEnglish(-0)).toBe("zero");
		expect(numberToEnglish(1000000.0)).toBe("one million");
	});
});
