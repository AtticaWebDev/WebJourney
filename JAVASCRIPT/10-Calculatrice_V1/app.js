// FONCTION POUR ADDITIONNER
function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}
function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}
function division(nombreA, nombreB) {
  return nombreA / nombreB;
}

let choix;
do {
  choix = Number(
    prompt(
      "Que souhaitez-vous faire ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
    )
  );
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

let premierNombre;
let deuxiemeNombre;
do {
  premierNombre = Number(prompt("Entrez un premier nombre : "));
  deuxiemeNombre = Number(prompt("Entrez un deuxieme nombre : "));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

let resultat;
try {
  switch (choix) {
    case 1:
      resultat = addition(premierNombre, deuxiemeNombre);
      break;
    case 2:
      resultat = multiplication(premierNombre, deuxiemeNombre);
      break;
    case 3:
      resultat = soustraction(premierNombre, deuxiemeNombre);
      break;
    case 4:
      resultat = division(premierNombre, deuxiemeNombre);
      break;
    default:
      throw new Error("Une erreur est survenue");
  }
} catch (error) {
  alert(error);
}
alert("Voici le resultat : " + resultat);
