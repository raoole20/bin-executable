#!/usr/bin/env node

const [a,b, ...args] = process.argv;

console.log(`previus path: ${a}`)
console.log(`current path: ${b}`)
console.log(`hello world, ${args}`)

