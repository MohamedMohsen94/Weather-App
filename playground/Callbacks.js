let getUser = (id, callback) => {
  user = {
    id: id,
    name: "Kevin",
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};
getUser(301, (user) => {
  console.log(user);
});
