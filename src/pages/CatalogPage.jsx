import { useState } from "react";
import "./CatalogPage.css";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
function CatalogPage() {

    const [selectedCategory,
        setSelectedCategory] =

        useState("Todos");
    const navigate = useNavigate();

    const filteredProducts =

        selectedCategory === "Todos"

            ? products

            : products.filter(

                product =>

                    product.category ===

                    selectedCategory

            );

    const categories = [

        "Todos",

        "Medicamentos",

        "Antigripales",

        "Bebés",

        "Higiene",

        "Dispositivos médicos",

        "Snacks",

        "Bebidas",

        "Helados",

        "Pruebas"

    ];

    return (

        <section className="catalog-page">

            <aside className="catalog-sidebar">

                <h3>

                    Categorías

                </h3>

                {

                    categories.map(

                        (category) => (

                            <button

                                key={category}

                                className={

                                    selectedCategory === category

                                        ?

                                        "category-btn active"

                                        :

                                        "category-btn"

                                }

                                onClick={() =>

                                    setSelectedCategory(

                                        category

                                    )

                                }

                            >

                                {category}

                            </button>

                        )

                    )

                }

            </aside>

            <main className="catalog-content">

                <h1>

                    Catálogo

                </h1>

                <p>

                    {filteredProducts.length}

                    {" "}productos encontrados

                </p>

                <div className="catalog-grid">

                    {

                        filteredProducts.map(

                            (product) => (

                                <div

                                    key={product.name}

                                    className="catalog-card"

                                    onClick={() =>

                                        navigate(

                                            `/producto/${product.id}`

                                        )

                                    }

                                >

                                    <img

                                        src={product.image}

                                        alt={product.name}

                                    />

                                    <h4>

                                        {product.name}

                                    </h4>

                                    <p>

                                        {product.price}

                                    </p>

                                </div>

                            )

                        )

                    }

                </div>

            </main>

        </section>

    );

}

export default CatalogPage;