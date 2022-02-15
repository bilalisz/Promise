console.log("I am here");

var userData = [];

const handleClick = () => {
  console.log("clicked");
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((result) => (userData = result))
    .catch((e) => console.log(e.message));
};

setTimeout(() => {
  console.log(userData);
}, 5000);

const getData = () => {
  const p = new Promise((res, rej) => {
    if (userData) {
      return res(userData);
    } else if (!userData) {
      return rej(new Error("data is not found"));
    }
  });
  return p
    .then((data) => console.log(data))
    .catch((e) => console.log(e.message));
};
