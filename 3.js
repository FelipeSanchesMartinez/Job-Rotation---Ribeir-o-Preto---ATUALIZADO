//a)

let a = [1, 3, 5, 7];
let proximoElementoA = a[a.length-1] + 2;
console.log(proximoElementoA); // saída: 9

//b)

let b = [2, 4, 8, 16, 32, 64];
let proximoElementoB = b[b.length-1] * 2;
console.log(proximoElementoB); // saída: 128

//c)

let c = [0, 1, 4, 9, 16, 25, 36];
let proximoElementoC = (c.length)**2;
console.log(proximoElementoC); // saída: 49

//d)

let d = [4, 16, 36, 64];
let proximoElementoD = d[d.length-1] + (2*(d.length+1));
console.log(proximoElementoD); // saída: 100

//e)

let e = [1, 1, 2, 3, 5, 8];
let proximoElementoE = e[e.length-1] + e[e.length-2];
console.log(proximoElementoE); // saída: 13

//f)

let f = [2, 10, 12, 16, 17, 18, 19];
let proximoElementoF = f[f.length-1] + 2 + f.length - 2;
console.log(proximoElementoF); // saída: 21