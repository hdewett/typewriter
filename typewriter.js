const sentence = "My dog, Custard, is the best dog ever!\n";
let counter = 0;

//will loop through each character and print it after counter + 50ms
for (const char of sentence) {
  setTimeout(() => { process.stdout.write(char);}, counter);
  counter += 50;
};
