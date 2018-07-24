const rh = require("./index");
const meow = require("meow");
const cli = meow(
  `
  Usage
    $ rh <R> <G> <B>

    Examples

    $ rh  10 20 30
    0a141e
`
);

const { input } = cli;
console.log(rh(...input));
