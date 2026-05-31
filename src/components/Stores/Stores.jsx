import "./Stores.css";

function Stores() {

    const stores = [

        {
            name: "ProveMed",
            address: "Cra 39B #45A Sur-120, Envigado",
            phone: "6043314244"
        },

        {
            name: "FarmaTres",
            address: "Cl 48C Sur #40-56, Envigado",
            phone: "6040000000"
        }

    ];

    return (

        <section className="stores">

            <h2>
                Nuestras sucursales
            </h2>

            <div className="stores-grid">

                {stores.map(
                    (store, index) => (

                        <div
                            className="store-card"
                            key={index}
                        >

                            <h3>
                                📍 {store.name}
                            </h3>

                            <p>
                                {store.address}
                            </p>

                            <p>
                                📞 {store.phone}
                            </p>

                            <button>
                                Ver ubicación
                            </button>

                        </div>

                    )
                )}

            </div>

        </section>

    );

}

export default Stores;