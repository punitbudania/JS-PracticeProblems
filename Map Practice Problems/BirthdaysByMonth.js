let birthdayMap = new Map();
let months = ["", "January", "February", "March",
              "April", "May", "June", "July", "August", 
              "September", "October", "November", "December"];
for (let index = 1; index <= 12; index++) {
    birthdayMap.set(months[index], new Array());
}

for (let index = 1; index <= 50; index++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthdayMap.get(months[month]).push("person" + index);
}

console.log(birthdayMap);