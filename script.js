const name = "Anna";
const program = "JavaScript";
const hobby = "musik";
const city = "musik";

console.log(`Hej! Jag heter ${name}.`);
console.log(`Jag studerar ${program}.`);
console.log(`Mitt intresse är ${hobby}.`);
console.log(`Jag bor i ${city}.`);

function introduce(name, program, hobby) {
 return `Hej! Jag heter ${name}, studerar ${program} och gillar ${hobby}.`;
}
console.log(introduce(name, program, hobby));
