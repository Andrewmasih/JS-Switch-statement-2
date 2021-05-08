let fruit = "Banana";

switch (fruit) {
  case "Apple": console.log("the first fruit ia a apple");
    break;

  case "Lemon": console.log("the fruit is a lemon");
    break;

  case "Strawberry": console.log("the fruit is a strawberry");
    break;

  default: console.log("this is the default value when none of the cases were TRUE");

  /* we dont have the "Banana" expression so JS will run throught all the cases, if not found it will run the default. */

}