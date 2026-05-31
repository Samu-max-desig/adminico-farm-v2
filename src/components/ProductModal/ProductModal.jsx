import { useState } from "react";
import "./ProductModal.css";

function ProductModal({
    product,
    closeModal,
    addToCart
}) {

    const [activeTab, setActiveTab] =
        useState("info");

    return (

        <div
            className="modal-overlay"
            onClick={closeModal}
        >

            <div
                className="modal-content"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="modal-left">

                    <div
                        className="modal-image"

                        onMouseMove={(e) => {

                            const rect =
                                e.currentTarget
                                    .getBoundingClientRect();

                            const x =
                                ((e.clientX - rect.left)
                                    / rect.width) * 100;

                            const y =
                                ((e.clientY - rect.top)
                                    / rect.height) * 100;

                            e.currentTarget
                                .querySelector("img")
                                .style.transformOrigin =
                                `${x}% ${y}%`;

                        }}

                    >

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                    </div>

                </div>

                <div className="modal-right">

                    <h2>
                        {product.name}
                    </h2>

                    <p className="price">
                        {product.price}
                    </p>

                    <div className="tabs">

                        <button
                            className={
                                activeTab === "info"
                                    ?
                                    "active-tab"
                                    :
                                    ""
                            }

                            onClick={() =>
                                setActiveTab("info")
                            }
                        >

                            Información

                        </button>


                        <button
                            className={
                                activeTab === "description"
                                    ?
                                    "active-tab"
                                    :
                                    ""
                            }

                            onClick={() =>
                                setActiveTab("description")
                            }
                        >

                            Descripción

                        </button>


                        <button
                            className={
                                activeTab === "specs"
                                    ?
                                    "active-tab"
                                    :
                                    ""
                            }

                            onClick={() =>
                                setActiveTab("specs")
                            }
                        >

                            Especificaciones

                        </button>

                    </div>

                    <div className="tab-content">

                        {
                            activeTab === "info"
                            &&

                            <div className="product-info">

                                <p>
                                    📦 Presentación:
                                    {product.presentation}
                                </p>

                                <p>
                                    📏 Tamaño:
                                    {product.size}
                                </p>

                                <p>
                                    🏢 Fabricante:
                                    {product.manufacturer}
                                </p>

                                <p>
                                    🧾 INVIMA:
                                    {product.invima}
                                </p>

                            </div>

                        }


                        {
                            activeTab === "description"
                            &&

                            <p>

                                {product.description}

                            </p>

                        }


                        {
                            activeTab === "specs"
                            &&

                            <p>

                                {product.specifications}

                            </p>

                        }

                    </div>

                    <div className="modal-buttons">

                        <button
                            onClick={() =>
                                addToCart(product)
                            }
                        >

                            Agregar al carrito

                        </button>

                        <button
                            className="close-btn"
                            onClick={closeModal}
                        >

                            Cerrar

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProductModal;