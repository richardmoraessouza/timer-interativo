const muda_segundos = document.querySelector("#mudar_hora");
const hora = document.querySelector(".hora");
const titulo = document.querySelector("#titulo");
const pausar = document.querySelector(".pausar");
const resetar = document.querySelector("#resetar");
const editar = document.querySelector("#editar");
const formulario = document.querySelector("form");
const enviar = document.querySelector("#enviar");
const btn_editar = document.querySelector(".editar");
const som = document.querySelector("#som");
const btn = document.querySelectorAll("button");

let index = 30;
let estado = "rodando";
let timeoutId = null;

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const num_escolhido = Number(editar.value);
  if (!isNaN(num_escolhido) && num_escolhido > 0) {
    index = num_escolhido;
    btn_editar.style.display = "block";
  }
});

function mudar_tudo() {
  if (estado === "pausar") {
    return;
  }

  muda_segundos.textContent = index;
  index--;

  if (index < 11) {
    if (index % 2 === 0) {
      document.body.style.background = "#3EF9F3";
      hora.style.color = "#0f0f0f";
      titulo.style.color = "#0f0f0f";
      btn.forEach((botao) => {
        botao.style.color = "#3EF9F3";
        botao.style.background = "#0f0f0f";
      });
      som.play();
    } else {
      som.play();
      document.body.style.background = "#0f0f0f";
      hora.style.color = "#3EF9F3";
      titulo.style.color = "#3EF9F3";
      btn.forEach((botao) => {
        botao.style.background = "#3EF9F3";
        botao.style.color = "#0f0f0f";
      });
    }
  }

  if (index < 0) {
    muda_segundos.textContent = "00";
    index = 0;
    setTimeout(() => {
      index = 30;
    }, 3000);
  }

  timeoutId = setTimeout(mudar_tudo, 1500);
}

mudar_tudo();

pausar.addEventListener("click", () => {
  if (estado === "rodando") {
    estado = "pausar";
    pausar.innerHTML = `<i class="fas fa-play"></i>`;
    clearTimeout(timeoutId);
  } else {
    estado = "rodando";
    pausar.innerHTML = `<i class="fas fa-pause"></i>`;
    mudar_tudo();
  }
});

btn_editar.addEventListener("click", () => {
  btn_editar.style.display = "none";
  formulario.style.display = "block";
});

enviar.addEventListener("click", () => {
  formulario.style.display = "none";
});

resetar.addEventListener("click", () => {
  index = 30;
});
