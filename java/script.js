//400 gramas de carne por pessoa + 6 horas - 650 gramas
//1200 ml cerveja por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
//criança vale por 0,5


let inputAdulto = document.getElementById("adulto")
let inputCriança = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
	console.log("Calculando...")

	let adulto = inputAdulto.value
	let criança = inputCriança.value
	let duracao = inputDuracao.value

	let qtc = carnepp(duracao) * adulto + (carnepp(duracao) / 2) * criança

	let qtcj = cervejapp(duracao) * adulto 
	
	let qtb = bebidapp(duracao) * adulto + (bebidapp(duracao) / 2) * criança
	

	resultado.innerHTML = `<p> ${qtc / 1000} Kilos de Carne</p>`
	resultado.innerHTML += `<p> ${Math.ceil(qtcj / 355) } Latas de Cerveja</p>`
	resultado.innerHTML += `<p> ${Math.ceil(qtb / 2000)} Garrafas de 2L (Refrigerante e Água)</p>`

}

function carnepp(duracao){
	if(duracao >= 6 ){
		return 650
	}
	else{
		return 400
	}
}

function cervejapp(duracao){
	if(duracao >= 6 ){
		return 2000
	}
	else{
		return 1200
	}
}function bebidapp(duracao){
	if(duracao >= 6 ){
		return 1500
	}
	else{
		return 1000
	}
}