
const people = [
  {
    name: "John",
    age: 17,
  },
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Mary",
    age: 25,
  },
  {
    name: "Peter",
    age: 30,
  },
  {
    name: "Paul",
    age: 35,
  },
];

function verifyAdulthood(personName, personAge) {
  if (personAge >= 18) return `Welcome, ${personName}!`;

  return `You are not old enough to enter, ${personName}.`;
}

// TODO: Use a loop to call the verifyAdulthood function for each person in the people array.


const adultMessage = verifyAdulthood(people[i].name, people[i].age);

for (let i = 0; i <= people.length; i += 1){
  
  console.log(adultMessage);
}