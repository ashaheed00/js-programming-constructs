function isPalindrome(a, b) {
  let first = a.toString();
  let second = b.toString();
  return first === second.split("").reverse().join("");
}

console.log(isPalindrome(359, 953));
console.log(isPalindrome(5010, 1005));
