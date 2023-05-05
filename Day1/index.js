// //1-Swap the values of two variables using destructing//
// let x=prompt("Enter the value of x");
// let y=prompt("Enter the value of y");
// [x,y]=[y,x];
// alert(`x,y after swapping :${x},${y}`);

// //2-spread operator//
// function MaxAndMin(...arr){
//     alert(`The Max Value is : ${Math.max(...arr)}`)
//     alert(`The Min Value is : ${Math.min(...arr)}`)
// };
// MaxAndMin(4,7,10,13,16,19,21);

// //3-new array api methods//

// var fruits=["apple","strawberry","banana","Orange","mango"]
// //a//
// function IsString(arr){
//     for (var i=0;i<arr.length;i++){
//         if(typeof arr[i]!="string"){
//             return false;
//         }
//     }
//     return true;
// }

// //b//
// function IsStartWithA(arr2){
//     var string="";
//     for(var item of arr2){
//       if(item.startsWith("a")){
//         string+=item;
//       }
//     }
//     return string;
// }
// //c//
// function IsStartWithAOrB(arr2){
//     var string="";
//     for(var item of arr2){
//         if(item.startsWith("a")||item.startsWith("b")){
//             string+=item;
//         }
//     }
//     return string;
// }

//4//
//a//
//
// var url = "https://jsonplaceholder.typicode.com/users/";
// var Names = document.getElementsById("div");
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     data.forEach((item) => {
//       let name = document.createElement("button");
//       name.id = item.id;
//       console.log(name.id);
//       name.innerHTML = item.name;
//       Names.appendChild(name);
//     });
//   })
//   .catch((error) => {
//     console.log("Error: " + error);
//   });

// // B
// var url = "https://jsonplaceholder.typicode.com/posts?userId=";
// var users = document.getElementsById("div");
// users.addEventListener("click", async (e) =>  {
//     let id = e.target.id;
//     // console.log(id);
//    await fetch(url + id)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             data.forEach((item) => {
//                 users.removeChild(users.lastChild);
//                 let UserData = document.createElement("p");
//                 UserData.innerHTML = item.userId;
//                 UserData.innerHTML += item.body;
//                 UserData.innerHTML += item.title;
//                 users.appendChild(UserData);
//             });
//         })
//         .catch((error) => {
//             console.log("Error: " + error);
//         });
// });

// IsStartWithA(fruits);

// alert(`Is the array string? : ${IsString(fruits)}`);

// alert(`Is start with a : ${IsStartWithA(fruits)}`);

// alert(`Is start with a or b : ${IsStartWithAOrB(fruits)}`);



var url = "https://jsonplaceholder.typicode.com/users";
var Names = document.getElementById("tabs");
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((item) => {
            let name = document.createElement("button");
            name.innerText="get users";

            name.id = item.id;
            // console.log(name.id);
            // name.innerHTML = item.name;
            Names.appendChild(name);
        });
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

// B
var url = "https://jsonplaceholder.typicode.com/posts?userId=";
var users = document.getElementById("tabs");
users.addEventListener("click", async (e) =>  {
    let id = e.target.id;
    // console.log(id);
   await fetch(url + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            data.forEach((item) => {
                users.removeChild(users.lastChild);
                let UserData = document.createElement("p");
                UserData.innerHTML = item.userId;
                UserData.innerHTML += item.body;
                UserData.innerHTML += item.title;
                users.appendChild(UserData);
            });
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
});