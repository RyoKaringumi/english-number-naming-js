
function zeroToTowelve(n: number): string {
	const ones = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
	];
	return ones[n];
}

function thirteenToNineteen(n: number): string {
	if(n === 13) return "thirteen";
	if(n === 15) return "fifteen";
	if(n === 18) return "eighteen";
	return numberToEnglish(n % 10) + "teen";
}

function twentyToNinetyNine(n: number): string {
	const tens = [
		"",
		"ten",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
	];
	const tenPart = Math.floor(n / 10);
	const onePart = n % 10;
	if (onePart === 0) {
		return tens[tenPart];
	} else {
		return tens[tenPart] + "-" + numberToEnglish(onePart);
	}
}

function oneHundredToNineHundredNinetyNine(n: number): string{
	const hundredPart = Math.floor(n / 100);
	const restPart = n % 100;
	if(restPart === 0){
		return numberToEnglish(hundredPart) + " hundred";
	} else {
		return numberToEnglish(hundredPart) + " hundred " + numberToEnglish(restPart);
	}
}

function largeNumber(number: number): string {
	const digits = Math.floor(Math.log10(number)) + 1;
	const largeNumberUnits: {[key: number]: string} = {
		4: "thousand",
		7: "million",
		10: "billion",
		13: "trillion",
		16: "quadrillion",
		19: "quintillion",
	};
	let unitsDigits = digits;
	while(!(unitsDigits in largeNumberUnits) && unitsDigits > 3){
		unitsDigits--;
	}
	const unitName = largeNumberUnits[unitsDigits];
	const unitValue = Math.pow(10, unitsDigits - 1);
	const leadingPart = Math.floor(number / unitValue);
	const restPart = number % unitValue;
	let result = numberToEnglish(leadingPart) + " " + unitName;
	if(restPart > 0){
		result += " " + numberToEnglish(restPart);
	}
	return result;
}

function decimalPointToEnglish(n: number): string {
	const naturalPart = Math.floor(n);
	let result = numberToEnglish(naturalPart) + " point";
	const decimalString = n.toString().split(".")[1].split("").map(c=>numberToEnglish(parseInt(c))).join(" ");
	return result + " " + decimalString;
}

export function numberToEnglish(n: number): string {
	if(Number.isNaN(n)){
		throw new Error("Input is not a number");
	}
	if(n < 0) {
		return "minus " + numberToEnglish(-n);
	}
	if (n % 1 !== 0) {
		return decimalPointToEnglish(n);
	}
	const digits = Math.floor(Math.log10(n)) + 1;
	if(digits >= 4){
		return largeNumber(n);
	}
	if (n >= 0 && n <= 12) {
		return zeroToTowelve(n);
	}
	if (n >= 13 && n <= 19) {
		return thirteenToNineteen(n);
	}
	if (n >= 20 && n <= 99) {
		return twentyToNinetyNine(n);
	}
	if (n >= 100 && n <= 999) {
		return oneHundredToNineHundredNinetyNine(n);
	}
	throw new Error("Number out of range");
}
