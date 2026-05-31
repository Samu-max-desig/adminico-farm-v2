import "./Cart.css";

function Cart({
    cart,
    closeCart,
    removeFromCart,
    continueOrder
}) {

    const groupedProducts =
        cart.reduce((acc, product) => {

            const existing =
                acc.find(

                    item =>

                        item.name === product.name

                );

            if (existing) {

                existing.quantity++;

            }

            else {

                acc.push({

                    ...product,

                    quantity: 1

                });

            }

            return acc;

        }, []);



    const total =
        groupedProducts.reduce(

            (sum, item) => {

                const price =

                    Number(

                        item.price
                            .replace("$", "")
                            .replace(".", "")

                    );

                return sum +

                    (price *
                        item.quantity);

            }, 0);



    const minimumOrder = 12000;

    const missingAmount =
        minimumOrder - total;



    return (

        <div className="cart-overlay">

            <div className="cart-panel">

                <h2>

                    🛒 Carrito

                </h2>



                {

                    groupedProducts.map(

                        (item, index) => (

                            <div
                                className="cart-item"
                                key={index}
                            >

                                <div>

                                    <h4>

                                        {item.name}

                                    </h4>

                                    <p>

                                        Cantidad: x{item.quantity}

                                    </p>

                                </div>


                                <div>

                                    <p>

                                        ${(

                                            Number(

                                                item.price
                                                    .replace("$", "")
                                                    .replace(".", "")

                                            )

                                            *

                                            item.quantity

                                        ).toLocaleString()}

                                    </p>


                                    <button

                                        className="remove-btn"

                                        onClick={() =>

                                            removeFromCart(
                                                item.name
                                            )

                                        }

                                    >

                                        🗑️

                                    </button>

                                </div>

                            </div>

                        )

                    )

                }



                <div className="cart-total">

                    <h3>

                        Total:

                    </h3>

                    <h3>

                        ${total.toLocaleString()}

                    </h3>

                </div>


                {

                    total < minimumOrder

                    &&

                    <p className="minimum-warning">

                        Faltan $

                        {missingAmount.toLocaleString()}

                        para completar el pedido mínimo

                    </p>

                }


                <button
                    className="continue-btn"

                    disabled={
                        total < minimumOrder
                    }

                    onClick={continueOrder}

                >

                    Continuar pedido

                </button>


                <button
                    className="close-btn-cart"
                    onClick={closeCart}
                >

                    Cerrar

                </button>


            </div>

        </div>

    );

}

export default Cart;