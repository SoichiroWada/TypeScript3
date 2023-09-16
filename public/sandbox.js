"use strict";
let ninja = {
    name: 'mario',
    belt: 'black coffee',
    age: 125
};
console.log(ninja);
const source = { eyecolor: 'blue' };
Object.assign(ninja, source);
console.log(ninja);
