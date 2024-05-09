document.getElementById("questionsForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect answers
    let question1 = document.querySelector('input[name="question1"]:checked').value;
    let question2 = document.querySelector('input[name="question2"]:checked').value;
    let question3 = document.querySelector('input[name="question3"]:checked').value;
    let question4 = document.querySelector('input[name="question4"]:checked').value;
    let question5 = document.querySelector('input[name="question5"]:checked').value;
    let question6 = document.querySelector('input[name="question6"]:checked').value;
    let question7 = document.querySelector('input[name="question7"]:checked').value;
    let question8 = document.querySelector('input[name="question8"]:checked').value;
    let question9 = document.querySelector('input[name="question9"]:checked').value;
    let question10 = document.querySelector('input[name="question10"]:checked').value;
  let question11 = document.querySelector('input[name="question11"]:checked').value;
  let question12 = document.querySelector('input[name="question12"]:checked').value;
  let question13 = document.querySelector('input[name="question13"]:checked').value;
    let question14 = document.querySelector('input[name="question14"]:checked').value;
    let question15 = document.querySelector('input[name="question15"]:checked').value;
    let question16 = document.querySelector('input[name="question16"]:checked').value;
    let question17 = document.querySelector('input[name="question17"]:checked').value;
    let question18 = document.querySelector('input[name="question18"]:checked').value;
    let question19 = document.querySelector('input[name="question19"]:checked').value;
    let question20 = document.querySelector('input[name="question20"]:checked').value;
    let question21 = document.querySelector('input[name="question21"]:checked').value;
    let question22 = document.querySelector('input[name="question22"]:checked').value;
    let question23 = document.querySelector('input[name="question23"]:checked').value;
    let question24 = document.querySelector('input[name="question24"]:checked').value;
    let question25 = document.querySelector('input[name="question25"]:checked').value;
  
    // Calculate stress level
    let stressLevel = 0;
    if (question1 === "yes") stressLevel++;
    if (question2 === "yes") stressLevel++;
    if (question3 === "yes") stressLevel++;
    if (question4 === "yes") stressLevel++;
    if (question5 === "yes") stressLevel++;
    if (question6 === "yes") stressLevel++;
    if (question7 === "yes") stressLevel++;
    if (question8 === "yes") stressLevel++;
    if (question9 === "yes") stressLevel++;
    if (question10 === "yes") stressLevel++;
    if (question11 === "yes") stressLevel++;
    if (question12 === "yes") stressLevel++;
    if (question13 === "yes") stressLevel++;
    if (question14 === "yes") stressLevel++;
    if (question15 === "yes") stressLevel++;
    if (question16 === "yes") stressLevel++;
    if (question17 === "yes") stressLevel++;
    if (question18 === "yes") stressLevel++;
    if (question19 === "yes") stressLevel++;
    if (question20 === "yes") stressLevel++;
    if (question21 === "yes") stressLevel++;
    if (question22 === "yes") stressLevel++;
    if (question23 === "yes") stressLevel++;
    if (question24 === "yes") stressLevel++;
    if (question25 === "yes") stresslevel++;

  
    let stressCategory = "";
    if (stressLevel < 4) {
      stressCategory = "Low";
    } else if (stressLevel >= 4 && stressLevel <= 13) {
      stressCategory = "Medium";
    } else {
      stressCategory = "High";
    }
  
    // Display result
    alert("Your stress level is: " + stressCategory);
  });
  
  document.getElementById("questionsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // You can add your form submission handling here
    
    // Redirect to the next page
    window.location.href = "suggesstion.html"; // Replace "next_page.html" with the URL of your next page
  });
  
  document.getElementById("nextButton").addEventListener("click", function() {
    window.location.href = "next_page.html"; // Replace "next_page.html" with the URL of your next page
  });
  