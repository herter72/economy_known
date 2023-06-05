// footer.js
import React from 'react';


const Footer = () => {
    const frstYear = 2023;

    function showYear() {
        const currentYear = new Date().getFullYear(); // Získání aktuálního roku


        if (currentYear != frstYear) {
            return " - " + currentYear;
        } else {
            return "";
        }
    }
    return (
        <footer class="text-center p-2 py-4 bg-cstmGreen text-white">
            {/* Zde můžete vložit obsah patičky */}
            <p>&copy; <span>{frstYear + showYear()}</span>&nbsp;Ekonomika | Jan Chvojka</p>
            <p>Všechny informace jsou z prezentací paní učitelky Bouškové, pro získání těchto materiálů kontaktuje ji.</p>
        </footer>
    );
}

export default Footer;