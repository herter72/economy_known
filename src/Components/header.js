// header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class=" bg-cstmGreen text-white ">
      {/* Zde můžete vložit obsah hlavičky */}
      <section class="flex justify-between max-w-screen-2xl m-auto p-3">
        <span class="w-auto flex text-4xl md:text-5xl">Ekonomika</span>
        <img class="logo"></img>
        <nav class="w-4/5">
          <ul class="flex w-full justify-end h-full">
            <li class="h-full flex justify-center px-1"><a href="/" class="p-3">Domů</a></li>
            <li class="h-full flex justify-center px-1"><Link to="/test" class="p-3">Test</Link></li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Header;