//Vérifier que le type de l'arg1 correspond à l'arg2
//type_check_v1(1,"number") => true
function type_check_v1(value,type){

	
	//return typeof value === type && value !== null;
	
	switch(type){
	
		case 'object':
		case 'string':
		case 'boolean':
		case 'undefined':
		case 'number':
			
			return typeof value === type && value !== null;
		break ;
		
		default:
			return false;
	}
	
}

console.log(type_check_v1(1,'number'));
console.log(type_check_v1(1,'string'));
console.log(type_check_v1('Hello World','string'));
console.log(type_check_v1(true,'boolean'));
console.log(type_check_v1(null,'null'));
console.log(type_check_v1(undefined,'undefined'));
console.log(type_check_v1({name:"WELLE", surname:"Guillaume"},'object'));//true
console.log(type_check_v1(["WELLE","Guillaume"],'object')); //true
console.log(type_check_v1({name:"WELLE", surname:"Guillaume"},'array'));//false
console.log(type_check_v1(["WELLE","Guillaume"],'array'));//false

function test() {console.log('Hello') };
console.log(type_check_v1(test(),'function'));//false
console.log(type_check_v1(test(),'object'));//false

function Personne(nom){

	this.nom = nom ;
}

const personne = new Personne('WELLE');

console.log(type_check_v1(personne,'object'));//true
console.log(type_check_v1(personne,'function'));//false

//En JS, les tableaux sont des objets => ['v','n'] est un objet de type Array


