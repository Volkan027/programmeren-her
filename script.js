// Variabelen aanmaken om DOM-elementen te selecteren //
const attackknop = document.getElementById('attackknop'); //Vind de attackknop//
const healknop = document.getElementById('healknop'); //Vind de genezingsknop//
const health = document.querySelectorAll(".hp"); //vind de hp//
const optie = document.getElementById('optie'); // Vind de "optie"knop voor dom manupilatie//
const projectile = document.createElement('div'); // Vind het projectiel, chatgpt//

let levens = 5; //Aantal levens mogelijk// 

function attack() { // Functie voor de aanvalsknop//
    if (levens > 0) {  // Controleren of er nog levens zijn//
        levens--;  // Eén leven aftrekken//
        updateHealthDisplay(); // De weergave van levens bijwerken//
        console.log("Aanval! Levens over: " + levens); // Doorgeven aan de console levens staat voor het aantal levens //

        // Speel het geluid af, met hulp van chatgpt gemaakt, prompt was, hoe maakt de knop geluid als ik erop klik//
        attackSound.currentTime = 0; // Zet het geluid terug naar het begin
        attackSound.play(); // Speel het geluid af

        optie.textContent = "Aangevallen.";  // Tekst van optie wijzigen als er wordt aangevallen//
    } else {
        console.log("Je hebt geen levens meer over!");  // Loggen als er geen levens meer over zijn//
        optie.textContent = "Overwinning!"; // Tekst van optie wijzigen als er geen levens meer over zijn//
    }
}

function heal() { // Functie voor de genezingsknop//
    // Controleren of maximale aantal levens nog bereikt is of niet//
    if (levens < 5) {
        levens++; // 1 leven toevoegen//
        updateHealthDisplay();  // De weergave van de levens bijwerken//
        console.log("Genezing! Levens over: " + levens); // bericht doorgeven naar de console//

        // Speel het geluid af, met hulp van chatgpt gemaakt, prompt was, hoe maakt de knop geluid als ik erop klik//
        healSound.currentTime = 0; // Zet het geluid terug naar het begin
        healSound.play(); // Speel het geluid af

        optie.textContent = "Genezen."; // Tekst van optie wijzigen als er wordt genezen//
    } else {
        console.log("Je hebt al het maximale aantal levens!"); // Loggen als het maximale aantal levens al is bereikt//
        optie.textContent = "Max levens bereikt."; // Tekst van optie wijzigen als maximale levens zijn bereikt//
    }
}

// hulp van chatgpt //
function updateHealthDisplay() { // Functie om de weergave van de levens bij te werken//
    // Alle HP-afbeeldingen//
    health.forEach((hp, index) => {
        if (index < levens) { // Controleren of de index kleiner is dan het aantal levens//
            hp.style.display = "block"; // De potions weergeven als de index kleiner is dan het aantal levens //
        } else {
            hp.style.display = "none"; // De potions verbergen als de index groter of gelijk is aan het aantal levens //
        }
    });
}

// behulp van chatgpt //
function showProjectile() { // functie om het vuur projectiel tevoorschijn te halen //
    projectile.classList.add('projectile'); // Voeg de projectile-klasse toe
    document.body.appendChild(projectile); //voeg de nieuwe tijdelijke element toe aan de body //

    setTimeout(() => {
        projectile.remove(); //duratie van de vuurbal totdat hij weer verdwijnt//
    }, 1000);
}

// Eventlisteners toevoegen aan de knoppen, zodat ze te indentificeren zijn//
attackknop.addEventListener('click', attack); // attackknop koppelen met de attack function //
healknop.addEventListener('click', heal); //healknop koppelen met de heal function //
attackknop.addEventListener('click', showProjectile); // attackknop koppelen met de showprojectile function //