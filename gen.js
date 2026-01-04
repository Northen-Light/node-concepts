const GeneratorFunc = function* () {}.constructor;
const gen = new GeneratorFunc("a", "yield a * a");
const genObj = gen(10);
console.log(genObj.next().value);
