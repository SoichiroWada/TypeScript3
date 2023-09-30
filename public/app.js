"use strict";
//class
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ￡${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 360);
const invTwo = new Invoice('pani', 'run as a dog', 500);
const invThree = new Invoice('yoshio', 'swim in the sea', 4560);
console.log(invOne, invTwo, invThree);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
console.log("invoices", invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
