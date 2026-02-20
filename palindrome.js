let num = 121;   // number to check
let original = num;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;          // get last digit
  reversed = reversed * 10 + digit; // build reversed number
  num = Math.floor(num / 10);    // remove last digit
}

if (original === reversed) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}
