let strs = ["flower", "flow", "flight"];

if (strs.length === 0) {
  console.log("");
} else {
  let prefix = strs[0]; // start with the first word
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") break;
    }
  }
  console.log("Longest Common Prefix:", prefix); // "fl"
}
