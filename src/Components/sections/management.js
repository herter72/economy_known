export default function management() {
    return (
        <div>
            <section class="flex justify-center items-center my-4 h-[48vh] bg-center bg-cover z-0" style={{ backgroundImage: "url('/business-slider-2.jpg')", }}>
                <h1 class="py-4 text-white z-10 text-shadow">Management</h1>
            </section>
            <section class="my-4 grid  md:grid-cols-3">
                <h2 class="md:col-start-1 md:col-end-4 mt-2 mb-8">Dělíme ho na: </h2>
                <article class="p-3">
                    <span class="text-xl podtrh">Vrcholový management</span>
                    <ul class="p-2 mx-2">
                        <li>
                            také jako „top management“
                        </li>
                        <li>
                            řadíme sem nejvýše postavené řídící pracovníky, např. ředitele či prezidenty společností
                        </li>
                        <li>
                            jejich posláním je koncepční a dlouhodobé řízení
                        </li>
                        <li>
                            reprezentují organizaci, koordinují všechna oddělení, vytvářejí <b>strategické plány</b>
                        </li>
                    </ul>
                </article>
                <article class="p-3">
                    <span class="text-xl podtrh">Střední management</span>
                    <ul class="p-2 mx-2">
                        <li>
                            také jako „middle management“
                        </li>
                        <li>
                            řadíme sem např. vedoucího obchodního oddělení, ale také třeba zástupce ředitele ve škole
                        </li>
                        <li>
                            mají za úkol koordinovat činnost uvnitř svých útvarů, připravovat podklady pro vrcholový management a sestavovat <b>taktické plány</b> vycházející z plánů strategických
                        </li>
                    </ul>
                </article>
                <article class="p-3">
                    <span class="text-xl podtrh">Nižší management</span>
                    <ul class="p-2 mx-2">
                        <li>
                            také jako „lower management“
                        </li>
                        <li>
                            řadíme sem např. mistry ve výrobě, vedoucí skladu,…
                        </li>
                        <li>
                            jejich úkolem je každodenní řešení aktuálně vzniklých problémů a tzv. <b>operativní plánování</b>
                        </li>
                    </ul>
                </article>
            </section>
        </div>
    )
}