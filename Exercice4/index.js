const button = document.getElementById("myButton");

const p = document.createElement("p");
p.innerText = "Bonjour, vous avez cliqué sur le bouton !";

button.addEventListener("click", () => {
  button.after(p);
});
