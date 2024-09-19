const scriptURL =
  "https://script.google.com/macros/s/AKfycbwIwI5nklmXfW1ZARod3ZAUQwz7OfYqcIhnVHbfSe9Ddg46mGej3J26dwdsq57KTChqfw/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .then(() => {
      alert("message submited successfully !");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
