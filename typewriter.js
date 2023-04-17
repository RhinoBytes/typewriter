const sentence = "hello there from lighthouse labs";
let result = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);}, 
    result);
    result += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, result);
