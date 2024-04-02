
document.getElementById("myButton").addEventListener("click", function() {
    alert("Sikeres jelentkezés");
    setTimeout(() => {
        window.location.href = 'index.html';
      }, "1000");
  });

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "robi_ajax.txt");
    xhttp.send();
  }