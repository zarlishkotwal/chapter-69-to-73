// alert("hello world");

// Q1

// var itemArray = [
//         {
//             name: "juice",price:50,quantity:3
//         },
//         {
//             name: "cookie",price:"30",quantity:"9"
//         },
//         {
//             name: "shirt",price:"880",quantity:"1"
//         },
//         {
//             name: "pen",price:"100",quantity:"2"
//         }
//     ]

//  var juicePrice = itemArray[0].price;
// var juiceQuantity = itemArray[0].quantity;
// var juiceTotal = juicePrice*juiceQuantity;

// var cookiePrice = itemArray[1].price;
// var cookieQuantity = itemArray[1].quantity;
// var cookieTotal = juicePrice*juiceQuantity;

// var shirtPrice = itemArray[2].price;
// var shirtQuantity = itemArray[2].quantity;
// var shirtTotal = juicePrice*juiceQuantity;

// var penPrice = itemArray[3].price;
// var penQuantity = itemArray[3].quantity;
// var penTotal = juicePrice*juiceQuantity;

// var gTotal = juiceTotal+cookieTotal+shirtTotal+penTotal;


// Q2

// var object = {
//         name:"zarlish kotwal",
//         email:"zarlishkotwal4@gmail.com",
//         password:"************",
//         age:"20",
//         gender:"female",
//         city:"Karachi",
//         country:"Pakistan",
//     }

// console.log("age" in object);
// console.log("country" in object);
// console.log("firstName" in object);
// console.log("lastName" in object);

// Q3

function Record(name, age, city, country){
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    
}
var record1 = new Record('azalfa','20','Karachi','Pakistan');
var record2 = new Record('khola','21','Karachi','Pakistan');
var record3 = new Record('muskan','23','Karachi','Pakistan');
 
// console.log(record1 )
console.log( record2)
console.log(record3 )
console.log(record3.hasOwnProperty("recordName"))

