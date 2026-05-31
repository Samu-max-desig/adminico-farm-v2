import "./ProductPage.css";

import { useParams } from "react-router-dom";

import products from "../data/products";

import { useState } from "react";

function ProductPage({

    addToCart

}) {

    const { id } =
        useParams();

    const [activeTab, setActiveTab] =
        useState(null);

    const product =

        products.find((item) => {

            const generatedId =

                item.name
                    .toLowerCase()
                    .replaceAll(" ", "-");

            return generatedId === id;

        });

    if (!product) {

        return (

            <h2>

                Producto no encontrado

            </h2>

        );

    }

    return (

        <div className="product-page">

            <div className="product-layout">

                <div className="product-image-side">

                    <div className="product-image-box">

                        <div className="image-zoom-container">

                            <div

                                className="image-zoom-container"

                                onMouseMove={(e) => {

                                    const rect =
                                        e.currentTarget.getBoundingClientRect();

                                    const x =
                                        ((e.clientX - rect.left) / rect.width) * 100;

                                    const y =
                                        ((e.clientY - rect.top) / rect.height) * 100;

                                    e.currentTarget.style.setProperty(
                                        "--zoom-x",
                                        `${x}%`
                                    );

                                    e.currentTarget.style.setProperty(
                                        "--zoom-y",
                                        `${y}%`
                                    );

                                }}

                            >

                                <img

                                    src={product.image}

                                    alt={product.name}

                                    className="zoom-image"

                                />

                            </div>

                        </div>

                    </div>

                </div>



                <div className="product-info-side">

                    {

                        product.badge &&

                        <span className="product-badge-page">

                            {product.badge}

                        </span>

                    }

                    <h1>

                        {product.name}

                    </h1>



                    <div className="product-price-page">

                        {

                            product.oldPrice &&

                            <span className="old-price-page">

                                {product.oldPrice}

                            </span>

                        }

                        <h2>

                            {product.price}

                        </h2>

                    </div>



                    <div className="product-details">

                        <p>

                            <strong>

                                Presentación:

                            </strong>

                            {product.presentation || "No disponible"}

                        </p>

                        <p>

                            <strong>

                                Tamaño:

                            </strong>

                            {product.size || "No disponible"}

                        </p>

                        <p>

                            <strong>

                                Laboratorio:

                            </strong>

                            {product.manufacturer || "No disponible"}

                        </p>

                        <p>

                            <strong>

                                INVIMA:

                            </strong>

                            {product.invima || "No disponible"}

                        </p>

                    </div>



                    <button

                        className="add-cart-page"

                        onClick={() =>

                            addToCart(product)

                        }

                    >

                        Agregar al carrito

                    </button>



                    <div className="product-benefits">

                        <div>

                            🚚 Envíos rápidos

                        </div>

                        <div>

                            ✅ Productos originales

                        </div>

                        <div>

                            💬 Atención farmacéutica

                        </div>

                    </div>



                    <div className="tabs">

                        <button

                            className={
                                activeTab === "description"
                                    ? "active-tab"
                                    : ""
                            }

                            onClick={() => {

                                setActiveTab(

                                    activeTab === "description"
                                        ? null
                                        : "description"

                                );

                            }}

                        >

                            Descripción

                        </button>



                        <button

                            className={
                                activeTab === "specifications"
                                    ? "active-tab"
                                    : ""
                            }

                            onClick={() => {

                                setActiveTab(

                                    activeTab === "specifications"
                                        ? null
                                        : "specifications"

                                );

                            }}

                        >

                            Especificaciones

                        </button>

                    </div>



                    {

                        activeTab &&

                        <div className="tab-content">

                            {

                                activeTab === "description"

                                    ?

                                    <p>

                                        {

                                            product.description ||

                                            "Sin descripción"

                                        }

                                    </p>

                                    :

                                    <p>

                                        {

                                            product.specifications ||

                                            "Sin especificaciones"

                                        }

                                    </p>

                            }

                        </div>

                    }

                </div>

            </div>

        </div>

    );

}

export default ProductPage;