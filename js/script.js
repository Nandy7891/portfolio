$(document).ready(function () {
    var phrases = ["Intégrateur", "Développeur Front-End"];
    var indexPhrase = 0;
    var indexLettre = 0;

    function afficherLettre() {
        if (indexPhrase < phrases.length) {
            if (indexLettre < phrases[indexPhrase].length) {
                $('#phrase').append(phrases[indexPhrase][indexLettre++]);
                setTimeout(afficherLettre, 100); // délai de 100 millisecondes entre chaque lettre
            } else {
                // Effacer la phrase actuelle après un délai
                setTimeout(function() {
                    $('#phrase').text('');
                    indexPhrase++;
                    indexLettre = 0;

                    // Commencer à afficher la phrase suivante
                    setTimeout(afficherLettre, 100);
                }, 1000); // délai de 1 seconde avant d'effacer la phrase
            }
        } else {
            // Réinitialiser les index pour recommencer l'animation
            indexPhrase = 0;
            indexLettre = 0;

            // Recommencer l'animation
            setTimeout(afficherLettre, 100);
        }
    }
    afficherLettre();
});
