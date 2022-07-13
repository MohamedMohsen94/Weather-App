console.log("Starting App");

setTimeout(() => {
  console.log("inside the callback with 2 secs delay");
}, 2000);

setTimeout(() => {
  console.log("inside the callback 1 with 0 delay");
}, 0);
setTimeout(() => {
  console.log("inside the callback 2 with 0 delay");
}, 0);

console.log("Finshing up");
