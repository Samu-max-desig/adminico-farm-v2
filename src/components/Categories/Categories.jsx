import "./Categories.css";

function Categories() {

    const categories = [
        "💊 Medicamentos",
        "🍼 Bebés",
        "🧴 Cuidado personal",
        "🍦 Helados",
        "🥤 Bebidas"
    ];

    return (

        <section className="categories">

            <h2>
                Explora categorías
            </h2>

            <div className="categories-grid">

                {categories.map(
                    (category, index) => (

                        <div
                            className="category-card"
                            key={index}
                        >
                            {category}
                        </div>

                    )
                )}

            </div>

        </section>

    );
}

export default Categories;