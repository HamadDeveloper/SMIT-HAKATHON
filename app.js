document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var rollNumber = document.getElementById("rollNumber").value.trim();
    var name = document.getElementById("name").value.trim();
    var batch = document.getElementById("batch").value.trim();
    var section = document.getElementById("section").value.trim();

    // Validate form inputs
    if(rollNumber === "" || name === "" || batch === "" || section === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Store student details in sessionStorage
    var studentDetails = {
        rollNumber: rollNumber,
        name: name,
        batch: batch,
        section: section
    };
    sessionStorage.setItem("studentDetails", JSON.stringify(studentDetails));

    // Redirect to the quiz page
  
});
 function goToQuiz(){
    window.location.href = "quiz.html"
 }

 