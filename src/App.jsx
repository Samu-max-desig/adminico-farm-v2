import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";
import Categories from "./components/categories/categories";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Stores from "./components/Stores/Stores";
import Footer from "./components/Footer/Footer";
import ProductModal from "./components/ProductModal/ProductModal";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import CatalogPage
  from "./pages/CatalogPage";

import {
  Routes,
  Route
} from "react-router-dom";

import ProductPage from "./pages/ProductPage";

function App() {

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [cart, setCart] =
    useState([]);

  const [showCart, setShowCart] =
    useState(false);

  const [showCheckout, setShowCheckout] =
    useState(false);

  const [search, setSearch] =
    useState("");



  function addToCart(product) {

    setCart((prev) => [

      ...prev,

      product

    ]);

  }



  function removeFromCart(productName) {

    setCart((prev) =>

      prev.filter(

        (item, index) => {

          const firstIndex =

            prev.findIndex(

              p =>

                p.name === productName

            );

          return index !== firstIndex;

        }

      )

    );

  }



  return (

    <>

      <Header

        cartCount={cart.length}

        openCart={() =>

          setShowCart(true)

        }

        search={search}

        setSearch={setSearch}

      />



      <Routes>

        <Route

          path="/"

          element={

            <>

              <Hero />

              <Banner />

              <Categories />

              <FeaturedProducts

                openModal={setSelectedProduct}

                addToCart={addToCart}

                search={search}

              />

              <Stores />

            </>

          }

        />

        <Route

          path="/producto/:id"

          element={

            <ProductPage

              addToCart={addToCart}

            />

          }

        />

        <Route

          path="/catalogo"

          element={<CatalogPage />}

        />

      </Routes>







      {

        selectedProduct &&

        (

          <ProductModal

            product={selectedProduct}

            closeModal={() =>

              setSelectedProduct(null)

            }

            addToCart={addToCart}

          />

        )

      }



      {

        showCart &&

        <Cart

          cart={cart}

          removeFromCart={removeFromCart}

          continueOrder={() => {

            setShowCart(false);

            setShowCheckout(true);

          }}

          closeCart={() =>

            setShowCart(false)

          }

        />

      }



      {

        showCheckout &&

        <Checkout

          cart={cart}

          closeCheckout={() =>

            setShowCheckout(false)

          }

        />

      }


      <div className="login-banner">

        <div className="login-banner-content">

          <div>

            <h3>

              Guarda tus datos 🚚

            </h3>

            <p>

              Inicia sesión para pedir más rápido
              y guardar tus domicilios.

            </p>

          </div>

          <button>

            Iniciar sesión

          </button>

        </div>

      </div>
      <Footer />

    </>

  );

}

export default App;