function reverseString(str) {
	if (str.length === 0) {
		return "";
	}

  if (str.length === 1) {
		return str[0];
	}

	let result = str[str.length - 1];

	return result + reverseString(str.slice(0, str.length - 1));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
