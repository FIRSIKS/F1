const fs = require('fs');
function writeResultToFile(filename, sum, product) {
    fs.writeFile(filename, 'Сумма элементов массива A: sum\nПроизведение элеметов масива A: product', (err) => {
        if(err) throw err;
    console.log('Результат был записан в файл result.txt');
    });
}
let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;
let product = 1;

for (let i = 0; i < A.length; i++) {
    sum += A[i];
    product *= A[i];
}
console.log("Сумма элементов массива A: " + sum);
console.log("Произведение элементов массива A: " + product);
writeResultToFile('result.txt', sum, product);