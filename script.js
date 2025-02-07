document.getElementById("adviceBtn").addEventListener("click", getAdvice);

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceBox').innerHTML = data.slip.advice;
        })
        .catch(error => console.error('Error fetching advice:', error));
}