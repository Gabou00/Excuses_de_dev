
// Requiring fs module
const fs = require("fs");
  
// Storing the JSON format data in myObject
var data = fs.readFileSync("db.json");
var myObject = JSON.parse(data);
  
// Defining new data to be added
let newData = {
    message: " Je ne me suis pas réveillé",
    };
  
// Adding the new data to our object
myObject.push(newData);
  
// Writing to our JSON file
let newData2 = JSON.stringify(myObject);
fs.writeFile("db.json", newData2, (err : any) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });

export default newData2;