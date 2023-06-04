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
        <footer>
            {/* Zde můžete vložit obsah patičky */}
            <p class="text-center">&copy; <span>{frstYear + showYear()}</span>&nbsp;Ekonomika | Jan Chvojka</p>
        </footer>
    );
}

export default Footer;