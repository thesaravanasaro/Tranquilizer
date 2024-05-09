document.getElementById("detailsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect basic details
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;
    let maritalStatus = document.getElementById("maritalStatus").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let hipCircumference = document.getElementById("hipCircumference").value;
    let waistCircumference = document.getElementById("waistCircumference").value;
  
    // Save details to session storage
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("gender", gender);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("maritalStatus", maritalStatus);
    sessionStorage.setItem("height", height);
    sessionStorage.setItem("weight", weight);
    sessionStorage.setItem("hipCircumference", hipCircumference);
    sessionStorage.setItem("waistCircumference", waistCircumference);
  
    // Redirect to next page
    window.location.href = "questions.html";
  });