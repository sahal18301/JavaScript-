function findSchool() {
  let age = Number(document.getElementById("ageInput").value);
  let result = document.getElementById("result");

  if (age >= 3 && age <= 4) {
    result.textContent = "Nursery School 🧸";
  } else if (age >= 5 && age <= 10) {
    result.textContent = "Primary School 📚";
  } else if (age >= 11 && age <= 16) {
    result.textContent = "Secondary School 🎒";
  } else if (age >= 17 && age <= 18) {
    result.textContent = "College / Sixth Form 🎓";
  } else if (age >= 19 && age <= 30) {
    result.textContent = "University 🏫";
  }
  // using || operator
  else if (age >3 || age <35) {
    result.textContent = "Not suitable for school";
  }
    
}
alert("ATTENTION SINGLE MEN!");