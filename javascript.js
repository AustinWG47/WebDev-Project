// Form validation

function validateForm() {
    // Get value of each input field and return with an error if form is not filled out properly"
    let fname = document.forms["Contact_Form"]["fname"].value;
    let lname = document.forms["Contact_Form"]["lname"].value;
    let email = document.forms["Contact_Form"]["email"].value;
    let Contact_Question = document.forms["Contact_Form"]["Contact_Question"].value;
    //return alerts if there is missing info
    if (fname == "") {
        alert("First name must be filled out");
        return false;
        }
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
        }
    if (email == "") {
        alert("Email must be filled out");
        return false;
        }
    if (Contact_Question == "") {
        alert("Question must be filled out");
        return false;
        }

        
    }


    // element toggling

    function toggleElement() {
        var x = document.getElementById("Show_Games");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }