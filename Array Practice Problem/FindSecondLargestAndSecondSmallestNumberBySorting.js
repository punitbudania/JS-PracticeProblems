let array = new Array();

for (let index = 0; index < 10; index++) {
    array[index] = Math.floor((Math.random() * 900) + 100);
}
console.log(array);

{
    // Sorted Using Bubble Sort
    for (let index = 0; index < array.length; index++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[j-1]) {
                var temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
            
        }
        
    }

    console.log("The Second Largest Number is: " + array[array.length-2]);
    console.log("The Second Smallest Number is: " + array[1]);
}

{
    // Sorted Using sort function 
    array.sort((a, b) => a - b);

    console.log("The Second Largest Number is: " + array[array.length-2]);
    console.log("The Second Smallest Number is: " + array[1]);
}