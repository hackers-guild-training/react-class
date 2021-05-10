//Array destructuring

function useState(params) {
  const state = "helko";
  const setState = () => {};
  return [state, setState];
}
const names = ["jade", "kim", "joe", "dave", "natali"];
const [first, second, ...rest] = names;

//Object destructuring
const user = {
  id: 42,
  name: "helo",
  is_verified: true,
};

const { id, ...res } = user;
console.log(res);

function getPaymentDetails({ id }) {
  const db = { getById: (id) => {} };
  if (id) {
    return db.getById(id);
  }
}

getPaymentDetails(user);

function sum(a, b, c) {
  return a + b + c;
}
const arr = [1, 2, 3];
let arr2 = [4, 5, 6, ...arr];
console.log(arr2);

//spread operator

const userAndProd = {
  ...user,
  prodId: "1233",
};
const usercopy = { ...user, name: "jade" };
console.log(userAndProd);
console.log(usercopy);
console.log(user);
