console.log("nafare aval : 2lit");
console.log("nafare dovom : 5lit ");

const promiseMoney = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Bia Berim ATM");
  }, 10 * 1000);
});

promiseMoney
  .then(res => {
    console.log(res);
    console.log("mard: aghl nadashti pul biari");
    return new Promise((resolve, reject) => {
      resolve("mojudi kafi nist");
    });
  })
  .then(res => {
    console.log(res);
    console.log("zan: bia berim khune kart biarim");
    return new Promise((resolve, reject) => {
      resolve("kart barmidaran!");
    });
  })
  .then(res => {
    console.log(res);
    console.log("berim dg alkolo begirim");
    console.log("nafare sevom: 2lit");
  });

console.log("nafare charom : 1lit ");
console.log("nafare panjom : 9lit ");
