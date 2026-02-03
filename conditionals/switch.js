let age = 36;

switch (true) {
  case age >= 18 && age <= 35:
    console.log("Enjoy responsibly");
    break;

  case age < 18:
    console.log("You are underage");
    break;

  case age > 35:
    console.log("You are overage");
    break;

  default:
    console.log("Invalid age");
}
