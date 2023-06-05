export default function zivnosti() {
    return (
        <div>
            <section class="flex justify-center items-center my-4 h-[48vh] bg-center bg-cover z-0" style={{ backgroundImage: "url('/career-slider.jpg')", }}>
                <h1 class="py-4 text-white z-10 text-shadow">Druhy živností</h1>
            </section>
            <section class="my-4 grid md:grid-cols-2">
                <h2 class="md:col-start-1 md:col-end-4 mt-2 mb-8">Dělíme je na: </h2>
                <article>
                    <ul class="p-2 mx-2 text-2xl">
                        <li class="mb-2">
                            Ohlašovací
                        </li>
                    </ul>
                    <ul class="p-2 ml-8 -mt-1 text-xl">
                        <li>
                            volné
                        </li>
                        <li>
                            řemeslné
                        </li>
                        <li>
                            vázané
                        </li>
                    </ul>
                </article>
                <article>
                    <ul class="p-2 mx-2 text-2xl">
                        <li class="mb-2">
                            Koncesované
                        </li>
                    </ul>

                </article>

            </section>

            <section class="my-4 grid md:grid-cols-2">
                <h2 class="md:col-start-1 md:col-end-4 mt-2 mb-8">Ohlašovací </h2>
                <article>
                    <ul class="p-2 mx-2 text-xl">
                        <li class="mb-2">
                            u těchto živností se živnostenské oprávnění uděluje automaticky, pokud prokážeme splnění všeobecných podmínek, případně i zvláštních podmínek stanovených živnostenským zákonem
                        </li>
                    </ul>
                </article>
                <article>
                    <ul class="p-2 mx-2 text-xl">
                        <li class="mb-2">
                            pro každou živnost udává živnostenský zákon podmínky, které musí být naplněny pro získání živnostenského oprávnění
                        </li>
                    </ul>
                </article>

            </section>
            <section class="my-4 grid md:grid-cols-3">
                <article class="p-3">
                    <span class="text-xl podtrh">Volné</span>
                    <ul class="p-2 mx-2">
                        <li>
                            vyžaduje se pouze splnění všeobecných podmínek, tj. svéprávnost a bezúhonnost
                        </li>
                        <li>
                            žádné zvláštní podmínky, tj. vzdělání ani praxi živnostenský zákon nestanoví
                        </li>
                        <li class="list-none">
                            <b>Například</b>
                        </li>
                        <li>
                            velkoobchod a maloobchod
                        </li>
                        <li>
                            překladatelská a tlumočnická činnost
                        </li>
                        <li>
                            fotografické služby
                        </li>
                        <li>
                            ubytovací služby
                        </li>
                    </ul>

                </article>
                <article class="p-3">
                    <span class="text-xl podtrh">Řemeslné</span>
                    <ul class="p-2 mx-2">
                        <li>
                            vyžaduje se splnění všeobecných podmínek, tj. svéprávnost a bezúhonnost
                        </li>
                        <li>
                            vyžaduje se splnění zvláštních podmínek » doklad o ukončeném vzdělání v oboru nebo  absolvování praxe v délce 6 let
                        </li>
                        <li>
                            <b>Například</b>
                        </li>
                        <li>
                            řeznictví a uzenářství
                        </li>
                        <li>
                            pivovarnictví a sladovnictví
                        </li>
                        <li>
                            zlatnictví a klenotnictví
                        </li>
                        <li>
                            zednictví
                        </li>
                    </ul>
                </article>
                <article class="p-3">
                    <span class="text-xl podtrh">Vázané</span>
                    <ul class="p-2 mx-2">
                        <li>
                            vyžaduje se splnění všeobecných podmínek, tj. svéprávnost a bezúhonnost
                        </li>
                        <li>
                            vyžaduje se splnění zvláštních podmínek » doklad o ukončeném vzdělání v oboru a zároveň potvrzení o absolvování praxe v oboru
                        </li>
                        <li>
                            <b>Například</b>
                        </li>
                        <li>
                            provozování autoškoly
                        </li>
                        <li>
                            poskytování služeb v oblasti bezpečnosti a ochrany zdraví při práci
                        </li>
                        <li>
                            vodní záchranářská služba
                        </li>
                    </ul>
                </article>

            </section>
        </div>
    )
}