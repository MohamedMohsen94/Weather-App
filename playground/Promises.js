let addAsync = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("arguments must be numbers");
      }
    }, 2500);
  });
};
addAsync(3, 8)
  .then((result) => {
    console.log(result);
    return addAsync(result, "30");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// let somePromise = new Promise((resolve, reject) => {
//   //   resolve("Mohamed");
//   setTimeout(() => {
//     reject("unable to access this server");
//   }, 2500);
// });

// somePromise.then(
//   (result) => {
//     console.log("Hello this is ", result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
