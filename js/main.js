const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(btn => {
  btn.addEventListener("click", () => {
    const btnApretado = btn.textContent;

    if (btn.id === "c"){
      pantalla.textContent = "0";
      return;
    }

    if (pantalla.textContent === "0"){
      pantalla.textContent = btnApretado;
    } else {
      pantalla.textContent += btnApretado;
    }


  })
});