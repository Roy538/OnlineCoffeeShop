
function validateForm() {
    let x = document.forms["form"]["Username"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }

