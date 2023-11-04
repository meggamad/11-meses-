document.querySelector("form").addEventListener("submit", (e)=>{e.preventDefault(); validarNumero();});

function obterMensagem(n){
	if ( n>100 || isNaN(n)) return "Boa tentativa, mas sua namorada te ama mais"; 
	if (n<=10) return" Sua namorada vai ficar braba se ficar sabendo disso";
	if (n<=20) return "Que pouco ,,,," ;
	if (n<=30) return "Eu acho que é mais mor";
	if (n<=40) return "Aff que chata";
	if (n<=48) return "Ta louca de amar só isso";
	if (n<=49) return "que mané 49";
	if (n<=50) return "mor tem que amar mais que o máximo";
	if (n<=68) return "hmmmm";
	if (n<=69) return "eu embaixo mo";
	if (n<=99) return " Sabia que sua namorada te ama mais?";
	if(n<=100) return "Que fofa mor, ta bom a gente ama igual";
	return "Que fofa mor, ta bom a gente ama igual"; 
}

let timeout
function validarNumero(){
	if(timeout) clearTimeout(timeout)
	let inputNumero=document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(()=> {caixaDeMensagem.style.display = 'none'},2000 );

}


