let i = 0;
    const tituloProf = document.querySelector(".digitacao");
    let frase = document.querySelector(".digitacao").innerHTML;
    let attr = tituloProf.setAttribute("data", frase);
    let txt = tituloProf.getAttribute("data");
    const tempo = 230;

    function typeWriter() {
      if (i <= txt.length) {
        document.querySelector(".digitacao").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, tempo);
      }
       
    }

typeWriter();



const btnTodos = document.getElementById('btn-todos');
console.log(btnTodos);
if(btnTodos.classList.contains('btn-ativo')) {
    
}