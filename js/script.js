const mapeo = {
    "a" : "⠁", "b" : "⠃","c" : "⠉", "d" : "⠙",
    "e" : "⠑", "f" : "⠋", "g" : "⠛", "h" : "⠓",
    "i" : "⠊", "j" : "⠚", "k" : "⠅", "l" : "⠇",
    "m" : "⠍", "n" : "⠝", "ñ": "⠻", "o" : "⠕", "p" : "⠏",
    "q" : "⠟", "r" : "⠗", "s" : "⠎", "t" : "⠞",
    "u" : "⠥", "v" : "⠧", "w" : "⠺", "x" : "⠭",
    "y" : "⠽", "z" : "⠵",

    "A" : "⠨⠁", "B" : "⠨⠃","C" : "⠨⠉", "D" : "⠨⠙",
    "E" : "⠨⠑", "F" : "⠨⠋", "G" : "⠨⠛", "H" : "⠨⠓",
    "I" : "⠨⠊", "J" : "⠨⠚", "K" : "⠨⠅", "L" : "⠨⠇",
    "M" : "⠨⠍", "N" : "⠨⠝", "Ñ": "⠨⠻", "O" : "⠨⠕", "P" : "⠨⠏",
    "Q" : "⠨⠟", "R" : "⠨⠗", "S" : "⠨⠎", "T" : "⠨⠞",
    "U" : "⠨⠥", "V" : "⠨⠧", "W" : "⠨⠺", "X" : "⠨⠭",
    "Y" : "⠨⠽", "Z" : "⠨⠵",
    
    
    "0" : "⠼⠚",
    "1" : "⠼⠁", "2" : "⠼⠃", "3" : "⠼⠉",
    "4" : "⠼⠙", "5" : "⠼⠑", "6" : "⠼⠋",
    "7" : "⠼⠛", "8" : "⠼⠓", "9" : "⠼⠊",


    "¿" : "⠢", "?" : "ㅤ⠢", "," : "⠂", "¡" : "⠖", "!" : "⠖",  ":" : "⠒",
    '"' : "⠦" ,  "(" : "⠣", ")" : "⠜",
    
    
    "á" : "⠷", "é" : "⠮", "í" : "⠌",
    "ó" : "⠬", "ú" : "⠾", "ü" : "⠳",
    "Á" : "⠨⠷", "É" : "⠨⠮", "É" : "⠨⠌",
    "Ó" : "⠨⠬", "Ú" : "⠨⠾", "Ü" : "⠨⠳"
}

//Función para cambiar la funcionalidad
function cambiar()
{
        const TxtaBraille = "Texto a Braille";
		const BrailleaTxt = "Braille a Texto";
		let actual = document.getElementById("cambiar").innerHTML;
		
		if(actual == TxtaBraille)
		{
			document.getElementById("cambiar").innerHTML = BrailleaTxt;
			document.getElementById("entrada").value = "";
			document.getElementById("salida").value = "";
            document.getElementById("entrada").placeholder = "Escribe tu mensaje";
            document.getElementById("convertir").innerHTML = "Convertir a Código Braille"
            document.getElementById("convertir").setAttribute('onclick','textoABraille()');
		}
		else{
            document.getElementById("cambiar").innerHTML = TxtaBraille;
			document.getElementById("entrada").value = "";
			document.getElementById("salida").value = "";
            document.getElementById("entrada").placeholder = "Escribe tu código Braille";
            document.getElementById("convertir").innerHTML = "Convertir a Texto"
            document.getElementById("convertir").setAttribute('onclick','brailleATexto()');
		}
}

//Función para pasar a Braille
function textoABraille(){
    let entrada = document.getElementById("entrada").value;
    let arr1 = entrada.split("");

    let arr2 = arr1.map(x => {
        if(mapeo[x])
        {
            return mapeo[x];
        }
        else
        {						
            return x;
        }
    });

    let codigo = arr2.join(" ");

    document.getElementById("salida").value = codigo;
}

//Función para obtener el valor de un objeto
function obtenerValor(obj, val) {
    return Object.keys(obj).find(key => obj[key] === val);
}

//Función para pasar a Texto
function brailleATexto()
{
	let codigo = document.getElementById("entrada").value;
	let arr1 = codigo.split(" ");
	
	let arr2 = arr1.map(x=>{
		if(obtenerValor(mapeo,x))
		{
			return obtenerValor(mapeo,x);
		}
		else if(x==""){
			return " ";
		}
		else{
			return x;
		}
	});	
	
	let texto = arr2.join("").replace(/\s\s+/g, ' ');	
	document.getElementById("salida").value = texto;		
}