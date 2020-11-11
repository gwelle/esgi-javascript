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

//En JS, les tableaux, null, function sont des objets => ['v','n'] est un objet de type Array


//CORRECTION DU PROF => EXERCICE N°1
function type_check_v1_bis(variable, type) {
  const typeOfVariable = typeof variable;

  switch (typeOfVariable) {
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        case "object":
          return variable !== null && !Array.isArray(variable);
        default:
          return false;
      }
    default:
      return typeOfVariable === type;
  }
}

console.log('--------------------------------------');
console.log(type_check_v1_bis({}, "null"));
console.log(type_check_v1_bis({}, "object"));
console.log(type_check_v1_bis({}, "array"));
console.log(type_check_v1_bis(null, "object"));
console.log(type_check_v1_bis(null, "null"));
console.log(type_check_v1_bis({}, "number"));
console.log(type_check_v1_bis([], "array"));
console.log(type_check_v1_bis([], "object"));

//CORRECTION DU PROF => EXERCICE N°2
//type_check_v2(variable,conf => object )
//par de l'ojbet 
  //switch sur les clés 
  
function type_check_v2(variable, conf) {
  


  for (key in conf) {


    switch (key) {
      case "type":
        if (!type_check_v1_bis(variable, conf.type)) return false;//Vérification du type =>  return false 
        break;
      case "value":
      	//JSON.stringify => convertir un objet en string
        //value => une égalite entre 2 JSON.stringify
        //Si la valeur courante != valeur dans l'objet => return false
        if (JSON.stringify(variable) !== JSON.stringify(conf.value)) return false;
        break;
      //Enum, value supplémentaire
      case "enum":
        enum_loop: {
          for (subValue of conf.enum) {
          
            if (type_check_v2(variable, { value: subValue })) {
              break enum_loop;
            }
          }
          return false;
        }
    }
  }

  return true;
}
console.log('--------------------------------------');
console.log(
  type_check_v2({ e: 4 }, { type: "object", enum: [3, "test", { e: 4 }] })
);
