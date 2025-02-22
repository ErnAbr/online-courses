let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw {
    message: message,
    code: code,
  };
  //   while (true) {}
}

const result = generateError("An Error Occured", 500);

console.log(result);
