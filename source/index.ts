function anyChar(str: string) {
  const x = str.substr(0, 1);
  const xs = str.substr(1);
  return [x, xs];
}

console.log(anyChar('abc'));
