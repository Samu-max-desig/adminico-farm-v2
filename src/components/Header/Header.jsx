import "./Header.css";
import products from "../../data/products";
import { useState } from "react";
import {
    useNavigate
} from "react-router-dom";


import { Link } from "react-router-dom";

function Header({
    cartCount,
    openCart,
    search,
    setSearch
}) {
    const navigate =
        useNavigate();
    const [focused, setFocused] =
        useState(false);
    const filteredProducts =

        products.filter((product) => {

            const searchText =
                search.toLowerCase();

            if (searchText === "") {

                return false;

            }

            const productName =
                product.name.toLowerCase();

            const activeIngredient =

                (product.activeIngredient || "")
                    .toLowerCase();

            const searchTerms =

                product.searchTerms || [];

            return (

                productName.includes(searchText)

                ||

                activeIngredient.includes(searchText)

                ||

                searchTerms.some((term) =>

                    term.toLowerCase()
                        .includes(searchText)

                )

            );

        });
    return (
        <header className="header">

            <Link
                to="/"
                className="logo"
            >

                <span className="logo-icon">
                    💊
                </span>

                <span className="logo-text">
                    Adminico Farm
                </span>

            </Link>
            <div className="search-container">

                <div className="search-wrapper">

                    <input
                        className="search"
                        type="text"
                        placeholder="¿Qué producto buscas?"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onFocus={() =>
                            setFocused(true)
                        }

                        onBlur={() =>

                            setTimeout(() => {

                                setFocused(false)

                            }, 200)

                        }
                    />

                    {

                        focused && search === "" &&

                        <div className="search-results">

                            <h3>

                                TÉRMINOS MÁS BUSCADOS

                            </h3>

                            <div className="popular-search">

                                1. Proteína

                            </div>

                            <div className="popular-search">

                                2. Shampoo

                            </div>

                            <div className="popular-search">

                                3. Desodorante

                            </div>

                            <div className="popular-search">

                                4. Fibra

                            </div>

                        </div>

                    }

                    <div

                        className="search-icon"

                        onClick={() =>

                            setSearch("")

                        }

                    >

                        {

                            search === ""

                                ? "🔍"

                                : "✖"

                        }

                    </div>

                </div>

                {

                    focused && filteredProducts.length > 0 &&

                    <div className="search-results">

                        {

                            filteredProducts.map((product, index) => (

                                <div

                                    key={index}

                                    className="search-item"

                                    onClick={() => {

                                        navigate(

                                            `/producto/${product.name
                                                .toLowerCase()
                                                .replaceAll(" ", "-")
                                            }`

                                        );

                                        setFocused(false);

                                    }}

                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <div>

                                        <h4>

                                            {product.name}

                                        </h4>

                                        <p>

                                            {product.activeIngredient}

                                        </p>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                }

            </div>

            <nav className="nav">

                <button

                    onClick={() =>

                        navigate("/catalogo")

                    }

                >
                    Catálogo
                </button>
                <button>
                    Sucursales
                </button>

                <button>
                    Contacto
                </button>


                <div
                    className="cart-icon"
                    onClick={openCart}
                >

                    🛒

                    <span>

                        {cartCount}

                    </span>

                </div>

            </nav>

        </header>
    );
}

export default Header;