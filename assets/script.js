// Galley Images Project

// 1. Passo (Declarar variaveis de entrada de dados e de DOM)

let input_url = document.querySelector(".input_url");
let act_button = document.querySelector(".act_button");

let container = document.querySelector(".content")

// 2. Passo (Declarar um evento para um botão)

act_button.addEventListener("click", () => {
  if(input_url.value === "") {
    alert("Coloque um valor")
  } else {
    let arr = JSON.parse(localStorage.getItem("db_img")) ?? [];
    arr.push(input_url.value);
    localStorage.setItem("db_img", JSON.stringify(arr));

    let img_create = document.createElement("img");
    img_create.setAttribute("src", input_url.value)

    container.appendChild(img_create)

    input_url.value = ""
  }
})

let arr = JSON.parse(localStorage.getItem("db_img"));

arr.forEach((data) => {
  let img_create = document.createElement("img");
  img_create.setAttribute("src", data)

  container.appendChild(img_create)
})
