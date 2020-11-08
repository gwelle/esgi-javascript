//Mettre en majuscule la première lettre d'une chaine 
function ucfirst(chaine){
 
	 if (typeof chaine !== "string" || chaine === "") return "";
	 //charAt => H //substring ou slice => ello world 
	 return chaine.charAt(0).toUpperCase()+ chaine.slice(1) ;
 
}
console.log(ucfirst('hello world'));
console.log(ucfirst('hello World'));


//Mettre en majuscule la première lettre de chaque mot d'une chaine 
/* 
 * split() => convertir la chaine en array 
 * map() => parcourir de la chaine complète et mettre en majuscule la première lettre de chaque mot de la chaine 
 * join() => convertir le array en string 
 */
function capitalize(chaine){
	
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.split(" ").map(mot=> ucfirst(mot)).join(" ");
	//return chaine.split(" ").map(mot=> ucfirst(mot.toLowerCase())).join(" ");
}
console.log(capitalize('guillame welle, paris saint germain, france'));

//capitalize + coller les mots
/* 
 * split() => convertir la chaine en array 
 * map() => parcourir de la chaine complète et mettre en majuscule chaque mot de la chaine 
 * join() => convertir le array en string 
 */
 function camelCase(chaine){
 
	if (typeof chaine !== "string" || chaine === "") return "";
	return chaine.split(" ").map(mot=> capitalize(mot)).join("");
	//replace(/\W/g, "") =>Tous les caractères non mots dans l'ensemble de la chaine *, il va les remplacer par un espace vide 
	//return capitalize(chaine).replace(/\W/g, "")
}
console.log(camelCase('hello world'));

//Joindre les mots par des underscore
//replace(/\W/g, "_") =>Tous les caractères non mots dans l'ensemble de la chaine *, il va les remplacer par un underscore
function snake_case(chaine){
 
	return chaine.toLowerCase().replace(/\W/g,"_");
}
console.log(snake_case('Hello+World'));

//Inverser chaque mot d'une phrase
/* 
 * split() => convertir la chaine en array pour la boucle for 
 * for() => parcourir de la chaine complète et inverser chaque mot 
 * split() => mettre chaque mot courant dans un array pour utiliser la fonction reverse * join() => convertir le array en string  
 */
function verlan(string){ 

  
	var chaine = string.split(" "); // ['Hello', 'World'] 
	for (var i = 0; i < chaine.length; ++i) {
		
		//Hello => ['Hello'] => ['olleH'] => 'olleH' //World => ['World'] => ['dlroW'] => 'dlroW' 
		console.log(chaine)   
		chaine[i] = chaine[i].split("").reverse().join(""); console.log(chaine[i]+"\n")
	} 
	
	// ['olleH', 'dlroW'] => olleH dlroW 
	return chaine.join(" ");
	//return chaine.split(" ").map((mot)=> mot.split("").reverse().join("")).join(" ")
}
console.log(verlan("Hello World"));

//Inverser chaque mot d'une phrase
/* 
 * split() => convertir la chaine en array pour la boucle for 
 * for() => parcourir de la chaine complète et inverser chaque mot 
 * split() => mettre chaque mot courant dans un array pour utiliser la fonction reverse 
 * join() => convertir le array en string 
 */
 function yoda (chaine){ 
 
	return chaine.split(" ").reverse().join(" ")
}
console.log(yoda("Hello world"));

//CORRECTION FAITE PAR LE PROF
/*Cryptage (uniquement les voyelles)
anaconda => 4n4c0nd4
A=>4, E=>3, I=>1, O=>0 ,U=> (_), Y=>*/
//Replace => recherche globale (/g) sur les caractères aeiouy
//et qui soit insensible à la casse (/i)
function leet(chaine) {
  return chaine.replace(/[aeiouy]/gi, function (e) {
    
    //Switch sur les voyelles
    switch (e.toLowerCase()) {
      case "a":
        return 4;
      case "e":
        return 3;
      case "i":
        return 1;
      case "o":
        return 0;
      case "u":
        return "(_)";
      case "y":
        return 7;
    }
  });
}

//console.log("anaconda");
//console.log(leet("anaconda"));


//Autre possibilité proposé par un étudiant avec map
var voyelles = {"A": 4, "E": 3, "I": 1, "O": "0", "U": "(_)", "Y": 7 };

function leet2(chaine){
  
  return chaine.split('').map(letter => voyelles[letter.toUpperCase()] || letter).join('');

}

console.log(leet2('anaconda'));

//CORRECTION FAITE PAR LE PROF
//Cryptage => Chiffre de Vigenère
//wikipedia + crypto => yzixisfzy
function vig(string, code) {
  if (typeof string !== "string") return "";
  if (string.length === 0) return string;

  while (code.length < string.length) {
    code += code;
  }
  code = code.substr(0, string.length);
  let codeIndex = 0;

  return string
    .split("")
    .map((letter, index) => {
      letter = letter.toLowerCase();
      const aCode = "a".charCodeAt(0);
      const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

      if (letterNumber < 0 || letterNumber > 25) return letter;

      const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
      codeIndex++;

      return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    })
    .join("");
}