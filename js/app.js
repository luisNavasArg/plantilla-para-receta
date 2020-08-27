window.addEventListener("load",()=>{
let	titulo = document.getElementById("titulo");
});
const centrarTitulos=()=>{
	let titulo = document.getElementById("titulo");
	titulo.classList.add("text-center");
};
const agregarColorFondo=(color)=>{
	if(color == "azul"){
		limpiar("h1");
		limpiar("h2");
		document.body.style.backgroundColor="lightBlue";	
		 titulo.classList.add("azul");
		 titulo.classList.add("text-white");
		 titulo.classList.add("ancho");
		 titulo.classList.add("text-center");
		 let sub = document.querySelectorAll("h2");
		 sub.forEach((ele)=>{
		 	ele.classList.add("azulClaro");
		 	ele.classList.add("text-center");
		 });
	}else if(color == "bordo"){
		limpiar("h1");
		limpiar("h2");
		document.body.style.backgroundColor="#ffa3d6";	
		 titulo.classList.add("colorFondo");
		 titulo.classList.add("bordo");
		 titulo.classList.add("text-white");
		 titulo.classList.add("ancho");
		 titulo.classList.add("text-center");
		 let sub = document.querySelectorAll("h2");
		 sub.forEach((ele)=>{
		 
		 	ele.classList.add("bordoClaro");
		 	ele.classList.add("text-white");
		 	ele.classList.add("ancho");
		 	ele.classList.add("text-center");
		 });
	}else if(color == "verde"){
		limpiar("h1");
		limpiar("h2");
		document.body.style.backgroundColor="#59ff40";
		 titulo.classList.add("verde");
		 titulo.classList.add("text-white");
		 titulo.classList.add("ancho");
		 titulo.classList.add("text-center");
		 let sub = document.querySelectorAll("h2");
		 sub.forEach((ele)=>{
		 	ele.classList.add("verdeMedio");
		 	ele.classList.add("ancho");
		 	ele.classList.add("text-center");
		 });
	}
	
};

const agregarSombras=(elemento)=>{
	if(elemento == "titulo"){
		titulo.classList.add("sombra");
		titulo.style.margin="10px";
		titulo.style.padding="10px";
	}else if(elemento == "subTitulos"){
		let sub = document.querySelectorAll("h2");
		sub.forEach((ele)=>{
		 	ele.classList.add("sombra");	
		 	ele.style.margin="10px"; 
		 	ele.style.padding="10px"; 
		 });
	}else if(elemento == "div"){
		let sub = document.querySelector("#ing");
		sub.classList.add("sombra");
		sub.style.margin="10px";
		sub.style.padding="10px";
		let sub2 = document.querySelector("#ins");
		sub2.classList.add("sombra");
		sub2.style.margin="10px";
		sub2.style.padding="10px";
		sub2.style.boxSizing="border-box";

	}
	
};
const quitarSombra=()=>{
	titulo.classList.remove("sombra");
	let sub = document.querySelectorAll("h2");
		sub.forEach((ele)=>{
		 	ele.classList.remove("sombra");	 
		 });
	let sub3 = document.querySelector("#ing");
		sub3.classList.remove("sombra");
		let sub2 = document.querySelector("#ins");
		sub2.classList.remove("sombra");
};
const limpiar=(ele)=>{
	let sub = document.querySelectorAll(ele);
	let mo = document.querySelector(".mostrar");
	sub.forEach((sub)=>{
		// mo.innerHTML+=sub.className + "<br> aja";
		sub.classList.remove("verdeMedio");
		sub.classList.remove("verde");
		sub.classList.remove("bordoClaro");
		sub.classList.remove("bordo");
		sub.classList.remove("azulClaro");
		sub.classList.remove("azul");
	});
	console.log(sub);
};

const cambiarFuente=(fuente)=>{
	if(fuente =="monospace"){
		let EleFuente = document.body;
		EleFuente.classList.remove("fantasy");
		EleFuente.classList.remove("sans-serif");
		EleFuente.classList.add("monospace");
	}else if(fuente =="fantasy"){
		let EleFuente = document.body;
		EleFuente.classList.remove("monospace");
		EleFuente.classList.remove("sans-serif");
		EleFuente.classList.add("fantasy");
	}else if(fuente =="sans-serif"){
		let EleFuente = document.body;
		EleFuente.classList.remove("monospace");
		EleFuente.classList.remove("fantasy");
		EleFuente.classList.add("sans-serif");
	}	
};

const ordenar=(how)=>{
	if(how == "col"){
		let elemento = document.getElementById('ing');
		elemento.classList.remove("col-12");
		elemento.classList.add("col-5");
		let elemento2 = document.getElementById('ins');
		elemento2.classList.remove("col-12");
		elemento2.classList.add("col-5");
	}else if(how == "fil"){
		let elemento = document.getElementById('ing');
		elemento.classList.remove("col-5");
		elemento.classList.add("col-12");
		let elemento2 = document.getElementById('ins');
		elemento2.classList.remove("col-5");
		elemento2.classList.add("col-12");
	}
};

const iniciarTiempo=()=>{
	let tiempo = 0;
	setInterval(()=>{
		tiempo++;
		cambiarColorFondo();
	},1000);
};

const cambiarColorFondo=()=>{
	let num = Math.floor((Math.random() * 255));
	let num2 = Math.floor((Math.random() * 255));
	let num3 = Math.floor((Math.random() * 255));
	console.log(num);
	document.body.style.backgroundColor="rgba("+num+","+num2+","+num3+",0.3)";
};