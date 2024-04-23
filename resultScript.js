document.addEventListener("DOMContentLoaded", function() {
    // Define correct answers
    const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "a",
        q5: "b"
    };

    // Retrieve submitted answers from sessionStorage
    const submittedAnswers = {
        q1: sessionStorage.getItem("q1"),
        q2: sessionStorage.getItem("q2"),
        q3: sessionStorage.getItem("q3"),
        q4: sessionStorage.getItem("q4"),
        q5: sessionStorage.getItem("q5")
    };

    // Calculate total correct answers
    let totalCorrect = 0;
    for (const question in submittedAnswers) {
        if (submittedAnswers.hasOwnProperty(question) && submittedAnswers[question] === correctAnswers[question]) {
            totalCorrect++;
        }
    }

    // Display result
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Total Correct Answers: ${totalCorrect} out of 5</p>`;

   
});

function redirectToResult() {
    // Redirect to the result page
    window.location.href = "result.html";
}
