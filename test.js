let count = [];
let arr = [2,2,2];

for (i = 0; i < arr.length; i++) {
  number = arr[i];
  console.log(count[number]);
  console.log(count[number] || 0);
  console.log("------------")
  count[number] = (count[number] || 0) + 1;
  console.log(count[number]);
  console.log(count[number] || 0);

}

// console.log(count[2], count[3]);
