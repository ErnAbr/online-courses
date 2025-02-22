const button = document.querySelector("button");

function clickHandler(message: string) {
  // let userName = "MAX";
  console.log("clicked! " + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "HELLO"));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  userName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7, 5.3);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby2);

const { userName, age } = person;
