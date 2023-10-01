import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'constructing house', 4869000);
const invTwo = new Invoice('Bundokadoka', 'eat fish', 9800);
const invThree = new Invoice('yoshio', 'swimming in the river', 4561);
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
