const btnAll = document.querySelector(".btn-all");
const allBtns = document.querySelectorAll(".btn-sel");
const arrBtns = Array.from(allBtns);
const cardsProj = document.querySelectorAll(".card-projeto");
const arr = Array.from(cardsProj);


btnAll.addEventListener("click", (e) => {
  e.preventDefault();
  btnAll.classList.add("btn-ativo");
  for (let i of arrBtns) {
    if (!i.classList.contains("btn-all")) {
      i.classList.remove("btn-ativo");
    }
  }

  for(let i in arr) {
    if(arr[i].classList.contains('card-projeto')){
        arr[i].setAttribute('style', 'display: flex;');
    }
    else {
        arr[i].setAttribute('style', 'display: none;');
    }
}
});

if (btnAll.classList.contains("btn-ativo")) {
  for (let card of arr) {
    card.setAttribute("style", "display: flex;");
  }
}

const btnHtmlCssJs = document.querySelector(".btn-htmlcssjs");

btnHtmlCssJs.addEventListener("click", (e) => {
  e.preventDefault();
  btnHtmlCssJs.classList.add("btn-ativo");
  for (let i of arrBtns) {
    if (!i.classList.contains("btn-htmlcssjs")) {
      i.classList.remove("btn-ativo");
    }
  }
  for(let i in arr) {
    if(arr[i].classList.contains('htmlcssjs')){
        arr[i].setAttribute('style', 'display: flex;');
    }
    else {
        arr[i].setAttribute('style', 'display: none;');
    }
}
});

const btnReact = document.querySelector(".btn-react");

btnReact.addEventListener("click", (e) => {
  e.preventDefault();
  btnReact.classList.add("btn-ativo");
  for (let i of arrBtns) {
    if (!i.classList.contains("btn-react")) {
      i.classList.remove("btn-ativo");
    }
  }

  for(let i in arr) {
    if(arr[i].classList.contains('react')){
        arr[i].setAttribute('style', 'display: flex;');
    }
    else {
        arr[i].setAttribute('style', 'display: none;');
    }
}
});


const btnOthers = document.querySelector('.btn-others');

btnOthers.addEventListener('click', e => {
    e.preventDefault();
    btnOthers.classList.add('btn-ativo');
    for (let i of allBtns) {
        if(!i.classList.contains('btn-others')){
            i.classList.remove('btn-ativo');
        }
    }

    for (let i in arr) {
        if (arr[i].classList.contains('others')) {
            arr[i].setAttribute('style', 'display: flex')
        }
        else {
            arr[i].setAttribute('style', 'display: none;')
        }
    }
})