let sum = 0;
for (let index = 0; index < 5; index++) {
    sum += Math.floor(Math.random() * 90) + 10;
}
console.log("Sum: "+ sum + " Average: "+  sum/5);