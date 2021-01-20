function solve() {
	let d1 = Number(document.getElementById("d1").value);
	let d2 = Number(document.getElementById("d2").value);
	let h = Number(document.getElementById("h").value);

	if(typeof(d1) === "number" && typeof(d2) === "number" && typeof(h) === "number" && d1>0 && d2>0 && h>0){
		let h1 = 0;
		let h2 = 0;
		let qwe = 0;
		let cV = 0;
		if(d1 == d2){
			cV = Math.PI*((d1/2)**2)*h;
			alert(cV.toFixed(2));
		}else{
			if(d2>d1){
				h1 = (h*d2)/(d2-d1);
				h2 = h1-h;
				qwe = coneVolume(d2,h1)-coneVolume(d1,h2);
				alert(qwe.toFixed(2));
			}else{
				h1 = (h*d1)/(d1-d2);
				h2 = h1-h;
				qwe = coneVolume(d1,h1)-coneVolume(d2,h2);
				alert(qwe.toFixed(2));
			}
		}
	}else{
		alert("недопустимые данные");	
	}
}

function coneVolume(d, h){
	return (1/3)*Math.PI*((d/2)**2)*h;
}