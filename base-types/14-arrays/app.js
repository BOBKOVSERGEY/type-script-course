"use strict";
const skills = [
    'dev',
    'DevOps',
    'Testing',
];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const newRes = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(newRes);
