import "./ProductCard.css";

function ProductCard({
    name,
    price,
    image,
    openModal,
    product,
    addToCart
}) {

    return (

        <div className="product-card">

            <div className="image-container">

                {
                    product?.badge &&

                    <div className="product-badge">

                        {product.badge}

                    </div>

                }

                <img
                    src={image}
                    alt={name}
                />


                <div className="card-overlay">

                    <button
                        className="favorite-btn"
                    >

                        ❤️

                    </button>


                    <button

                        className="add-btn"

                        onClick={() =>

                            addToCart(product)

                        }

                    >

                        ➕

                    </button>

                </div>

            </div>


            <h3>

                {name}

            </h3>

            <div className="prices">

                {

                    product?.oldPrice &&

                    <span className="old-price">

                        {product.oldPrice}

                    </span>

                }

                <p>

                    {price}

                </p>

            </div>


            <button
                onClick={openModal}
            >

                Ver más

            </button>

        </div>

    );

}

export default ProductCard;