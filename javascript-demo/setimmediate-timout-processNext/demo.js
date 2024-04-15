// ==================================
// setTimeout, setImmediate vs process.nextTick
// ==================================
setTimeout(() => console.log('timeout'), 2000); // timer queue
setImmediate(() => console.log('immediate')); // check handleer queu me ragister
process.nextTick(() => console.log('nextTick')); // call when call stak start 1-
new Promise((resolv,reject)=>{
 resolv('i am promice')
}).then((res)=>{
console.log(res);
})
console.log('norma js ');
