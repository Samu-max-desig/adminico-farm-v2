import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    Tu salud más cerca de ti
                </h1>

                <p>
                    Encuentra medicamentos,
                    productos de cuidado personal
                    y domicilios rápidos en Envigado.
                </p>

                <div className="hero-buttons">

                    <button>
                        Ver catálogo
                    </button>

                    <button className="secondary-btn">
                        Pedir domicilio
                    </button>

                </div>

            </div>

            <div className="hero-image">

                💊

                <p>
                    Adminico Farm
                </p>

            </div>

        </section>
    );
}

export default Hero;