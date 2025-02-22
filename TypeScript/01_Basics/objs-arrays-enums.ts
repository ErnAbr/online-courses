// const ADMIN = 0;
// const USER = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Ernestas",
  age: 32,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
