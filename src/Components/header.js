// header.js
import React from 'react';

const Header = () => {
  return (
    <header class="flex justify-between bg-cstmGreen text-white py-3 px-3">
      {/* Zde můžete vložit obsah hlavičky */}
      <h1 class="w-auto flex">Ekonomika</h1>
      <img class="logo"></img>
      <nav class="w-4/5">
        <ul class="flex w-full justify-end h-full">
          <li class="h-full flex justify-center px-1"><a href="#" class="p-3">Domů</a></li>
          <li class="h-full flex justify-center px-1"><a href="#" class="p-3">O nás</a></li>
          <li class="h-full flex justify-center px-1"><a href="#" class="p-3">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;