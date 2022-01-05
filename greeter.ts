class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M", "User");

document.body.textContent = greeter(user);

interface TwoDCoord {
  x: number;
  y: number;
}

interface ThreeDCoord extends TwoDCoord {
  z: number;
}

function printXY(coord: TwoDCoord) {
  console.log(`X: ${coord.x}`)
  console.log(`Y: ${coord.y}`)
}

const three = { x: 4, y: 5, z: 2};
printXY(three)