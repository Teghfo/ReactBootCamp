const fetch = require("node-fetch");
//simple generative function
function* sum(arg) {
  console.log("Enter Gen");
  let x = yield "Please Enter first Num: ";
  console.log(x);

  let y = yield "Please Enter Second Num: ";
  console.log(y);

  return x + y + arg;
}

// let generativeSum = sum(10);
// let ghazanfar2 = sum(20);

// console.log("generative: ", generativeSum.next());
// console.log("ghazanfar: ", ghazanfar2.next());
// console.log("generative: ", generativeSum.next(10));
// console.log("ghazanfar: ", ghazanfar2.next(5));
// console.log("generative: ", generativeSum.next(15));

// Complex Generative Function
const requset = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => getUserObj.next(data))
    .catch(err => getUserObj.next(err));
};

function* getUser() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let result = yield requset(url);
  console.log(result);

  let result2 = yield requset("https://jsonplaceholder.typicode.com/todos");
  console.log(result2);
}

const getUserObj = getUser();
getUserObj.next();
