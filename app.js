let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;
let product = 1;

for (let i = 0; i < A.length; i++) {
    sum += A[i];
    product *= A[i];
}
console.log("Сумма элементов массива A: " + sum);
console.log("Произведение элементов массива A: " + product);
writeResultToFile('result.txt');