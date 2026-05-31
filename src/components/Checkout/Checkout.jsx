import { useState } from "react";
import "./Checkout.css";

function Checkout({

    closeCheckout,
    cart

}) {

    const [form, setForm] =
        useState({

            name: "",
            phone: "",
            address: "",
            notes: ""

        });


    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });

    }


    function sendOrder() {

        if (

            !form.name ||
            !form.phone ||
            !form.address

        ) {

            alert(
                "Completa todos los campos"
            );

            return;

        }


        if (

            form.phone.length < 10

        ) {

            alert(
                "Teléfono inválido"
            );

            return;

        }



        const groupedProducts =
            cart.reduce((acc, product) => {

                const existing =
                    acc.find(

                        item =>
                            item.name ===
                            product.name

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


        const productsText =

            groupedProducts.map(

                item =>

                    `• ${item.name} x${item.quantity}`

            ).join("\n");

        const message = `
========================
NUEVO PEDIDO ADMINICO FARM
========================

PRODUCTOS:

${productsText}

------------------------

TOTAL:
$${total.toLocaleString()}

CLIENTE:
${form.name}

TELÉFONO:
${form.phone}

DIRECCIÓN:
${form.address}

NOTAS:
${form.notes}

========================
`;
        const phoneNumber =

            "573237052191"; // TU NUMERO



        window.open(

            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        );

    }



    return (

        <div className="checkout-overlay">

            <div className="checkout-panel">

                <h2>

                    📋 Datos del pedido

                </h2>

                <input

                    name="name"

                    placeholder="Nombre"

                    onChange={handleChange}

                />


                <input

                    name="phone"

                    placeholder="Teléfono"

                    onChange={handleChange}

                />


                <input

                    name="address"

                    placeholder="Dirección"

                    onChange={handleChange}

                />


                <textarea

                    name="notes"

                    placeholder="Notas"

                    onChange={handleChange}

                />


                <button
                    onClick={sendOrder}
                >

                    Enviar pedido

                </button>


                <button
                    className="close-checkout"
                    onClick={closeCheckout}
                >

                    Cerrar

                </button>

            </div>

        </div>

    );

}

export default Checkout;