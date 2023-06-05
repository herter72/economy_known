// body.js
import React from 'react';
import management from './sections/management';
import zivnosti from './sections/zivnosti';

const Body = () => {
    return (
        <main class="max-w-screen-2xl p-3 m-auto">
            {management()}
            {zivnosti()}
        </main>
    );
}

export default Body;