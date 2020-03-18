// console.log("nafare aval : 2 lit");
// console.log("nafare dovom : 3 lit");

// funcion getMoney(callb){
//     console.log('')

// }

const users = [
  { name: "ashkan", age: "29" },
  { name: "sakineh", age: "22" }
];

/// callback
function getUser() {
  setTimeout(() => {
    users.forEach((user, indedx) => {
      console.log(user.name);
    });
  }, 1000);
}

// function createUser(user, callback) {
//   setTimeout(() => {
//     users.push(user);
//     callback();
//   }, 2000);
// }

// createUser({ name: "hasan", age: "42" }, getUser);

// es6 ===> promise

function createUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      let err = true;
      if (!err) {
        resolve("user ezafe shod");
      } else {
        reject("some Error happend");
      }
    }, 2);
  });
}

// createUser({ name: "hasan", age: "42" })
//   .then(msg => {
//     console.log(msg);
//     getUser();
//   })
//   .catch(err => console.log(err));

// es7   ==> async/await

const asyncGetUser = async () => {
  try {
    await createUser({ name: "hasan", age: "42" });
    getUser();
    return "Ok!";
  } catch (err) {
    console.log(err);
    return "terekundi!";
  }
};

// asyncGetUser()
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));

asyncGetUser();

// console.log("after get user");

// for (let i = 0; i < 100000; i++) {
//   console.log(i);
// }

// fetch(api)
//   .then(res => res.json())
//   .then(data => data);

// res = await fetch(api);
// data = await res.json();
