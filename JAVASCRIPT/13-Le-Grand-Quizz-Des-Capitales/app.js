// Tableau des réponses correctes
const rep = ["b", "d", "c", "a", "c", "b"];

// Sélection du formulaire avec la classe "quizz-form"
const form = document.querySelector(".quizz-form");

// Ajout d'un écouteur d'événements pour le formulaire lors de la soumission
form.addEventListener("submit", funcForm);

// Fonction appelée lors de la soumission du formulaire
function funcForm(e) {
  e.preventDefault(); // Empêche le comportement par défaut du formulaire

  // Tableau pour stocker les résultats de chaque question
  const resultat = [];

  // Sélection de tous les boutons radio cochés
  const toutLesBoutonsRadios = document.querySelectorAll(
    "input[type='radio']:checked"
  );

  // Comparaison des réponses sélectionnées avec les réponses correctes
  toutLesBoutonsRadios.forEach((radioButtons, index) => {
    if (radioButtons.value === rep[index]) {
      resultat.push(true); // La réponse est correcte
    } else {
      resultat.push(false); // La réponse est incorrecte
    }
  });
  funcResultat(resultat); // Appel de la fonction pour afficher les résultats
}

// Éléments HTML pour afficher les résultats
const resultat = document.querySelector(".resultat");
const titreResultat = document.querySelector(".resultat h2");
const scoreResultat = document.querySelector(".resultat .score");
const infoResultat = document.querySelector(".resultat .info");

// Fonction pour afficher les résultats en fonction des réponses
function funcResultat(res) {
  // Calcul du nombre d'erreurs
  const nombreErreurs = res.filter((el) => el === false).length;

  console.log(nombreErreurs); // Affiche le nombre d'erreurs dans la console

  // Affichage des résultats en fonction du nombre d'erreurs
  switch (nombreErreurs) {
    case 0:
      // Cas où il n'y a aucune erreur
      resultat.style.backgroundColor = "rgb(14, 14, 18)";
      titreResultat.innerText = `😎Félicitation, c'est un sans faute !😎`;
      infoResultat.innerText = `👏👏👏👏👏👏`;
      scoreResultat.innerHTML = "Score: <span> 6 / 6 </span>";
      break;
    case 1:
      // Cas où il y a une erreur
      resultat.style.backgroundColor = "rgb(14, 14, 18)";
      titreResultat.innerText = `😅Il y a ${nombreErreurs} erreur 😅`;
      infoResultat.innerText = `Presque !!!`;
      scoreResultat.innerHTML = "Score: <span> 5 / 6 </span>";
      break;
    case 2:
      // ... (répéter pour chaque cas jusqu'à 6 erreurs)
      resultat.style.backgroundColor = "rgb(14, 14, 18))";
      titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
      infoResultat.innerText = `Oups !!!`;
      scoreResultat.innerHTML = "Score: <span> 4 / 6 </span>";
      break;
    case 3:
      resultat.style.backgroundColor = "rgb(14, 14, 18)";
      titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
      infoResultat.innerText = `Oups !!!`;
      scoreResultat.innerHTML = "Score: <span> 3 / 6 </span>";
      break;
    case 4:
      resultat.style.backgroundColor = "rgb(14, 14, 18))";
      titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
      infoResultat.innerText = `Oups !!!`;
      scoreResultat.innerHTML = "Score: <span> 2 / 6 </span>";
      break;
    case 5:
      resultat.style.backgroundColor = "rgb(14, 14, 18)";
      titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
      infoResultat.innerText = `Oups !!!`;
      scoreResultat.innerHTML = "Score: <span> 1 / 6 </span>";
      break;
    case 6:
      resultat.style.backgroundColor = "rgb(14, 14, 18)";
      titreResultat.innerText = `😭Il y a ${nombreErreurs} erreurs 😭`;
      infoResultat.innerText = `Tu as tout faut`;
      scoreResultat.innerHTML = "Score: <span> 0 / 6 </span>";
    default:
      // Cas par défaut pour une erreur inattendue
      titreResultat.innerText = `Erreur innatendu !`;
  }
}
