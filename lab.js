let jsonStr = "[1,2,3]";

let newData = JSON.parse(jsonStr);
newData[newData.length] = 4;
jsonStr = JSON.stringify(newData)
console.log(jsonStr);
