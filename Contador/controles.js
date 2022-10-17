let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let reset = document.querySelector(".reset");

let ad2 = document.querySelector(".add2");
let ad5 = document.querySelector(".add5");
let ad10 = document.querySelector(".add10");

let rem5 = document.querySelector(".remove5");
let rem10 = document.querySelector(".remove10");

let mt2 = document.querySelector(".mult2");
let mt6 = document.querySelector(".mult6");
let mt10 = document.querySelector(".mult10");

let dv2 = document.querySelector(".div2");
let dv10 = document.querySelector(".div10");

let startcount = document.querySelector(".addc")
let pausecount = document.querySelector(".pause")

let prebt = document.querySelector("#escolhabt");

let numb1 = document.querySelector(".numb");

let n = 0;

let valorcontado;

add.addEventListener("click", function soma(){
    n++;
    numb1.innerHTML = n;
})

remove.addEventListener("click", function remove(){
    n--;
    numb1.innerHTML = n;
})

reset.addEventListener("click", function reseta(){
    n = 0;
    numb1.innerHTML = n;
})

ad2.addEventListener("click", function somar2(){
    n += 2;
    numb1.innerHTML = n;
})

ad5.addEventListener("click", function somar5(){
    n += 5;
    numb1.innerHTML = n;
})

ad10.addEventListener("click", function somar10(){
    n += 10;
    numb1.innerHTML = n;
})

rem5.addEventListener("click", function remove5(){
    n -= 5;
    numb1.innerHTML = n;
})

rem10.addEventListener("click", function remove10(){
    n -= 10;
    numb1.innerHTML = n;
})

mt2.addEventListener("click", function mult2(){
    n *= 2;
    numb1.innerHTML = n;
})

mt6.addEventListener("click", function mult6(){
    n *= 6;
    numb1.innerHTML = n;
})

mt10.addEventListener("click", function mult10(){
    n *= 10;
    numb1.innerHTML = n;
})

dv2.addEventListener("click", function div2(){
    n /= 2;
    numb1.innerHTML = n;
})

dv10.addEventListener("click", function div10(){
    n /= 10;
    numb1.innerHTML = n;
})

startcount.addEventListener("click", function contador(){
    valorcontado = setInterval(function contar(){
        n += 1;
        numb1.innerHTML = n;
    }, 1000);
})

pausecount.addEventListener("click", function pause(){
    clearInterval(valorcontado);
})

prebt.addEventListener("click", function recebernum(){
    let prenum = document.querySelector("#escolha").value;
    n = prenum;
    numb1.innerHTML = n;
   
})