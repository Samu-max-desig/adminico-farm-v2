import "./FeaturedProducts.css";

import products from "../../data/products";

import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts({
    openModal,
    addToCart,
    search
}) {

    const filteredProducts = products.filter((product) => {

        const searchText =
            (search || "").toLowerCase();

        if (searchText === "") {

            return true;

        }

        const productName =
            product.name.toLowerCase();

        const activeIngredient =
            (product.activeIngredient || "")
                .toLowerCase();

        const searchTerms =
            (product.searchTerms || []);

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


        <section className="featured">

            <h2>

                Productos destacados

            </h2>

            <div className="products-grid">

                {

                    products.map(

                        (product, index) => (

                            <ProductCard

                                key={index}

                                name={product.name}

                                price={product.price}

                                image={product.image}

                                product={product}

                                addToCart={addToCart}

                                openModal={() =>

                                    openModal(product)

                                }

                            />

                        )

                    )

                }

            </div>

        </section>

    );

}

export default FeaturedProducts;