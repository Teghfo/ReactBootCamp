console.log("nafare aval : 2lit");
console.log("nafare dovom : 5lit ");

const promiseMoney = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bia Berim ATM");
    }, 2 * 1000);
  });
};

async function getAlcohol() {
  const atmChecking = () =>
    new Promise((resolve, reject) => {
      resolve("mojudi kafi nist");
    });

  //   const kartBardashtan = () =>
  //     new Promise((resolve, reject) => {
  //       resolve("kart barmidaran!");
  //     });

  const kartBardashtan = async () => {
    try {
      return "kart barmidaran!";
    } catch {
      return "err";
    }
  };

  const zanPulBiare = await promiseMoney();
  console.log(zanPulBiare);
  console.log("mard: aghl nadashti pul biari");
  const atmRes = await atmChecking();
  console.log(atmRes);
  console.log("zan: bia berim khune kart biarim");
  const cartKhunehRes = await kartBardashtan();
  console.log(cartKhunehRes);
  console.log("berim begirim");
  console.log("nafare sevom: 2lit");
}

getAlcohol();

console.log("nafare charom : 1lit ");
console.log("nafare panjom : 9lit ");
