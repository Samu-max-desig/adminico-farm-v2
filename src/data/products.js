import allegra from "../assets/images/products/allegra-pediatrico.png";
import arrurru from "../assets/images/products/arrurru.png";
import colgate from "../assets/images/products/colgate.png";
import dove from "../assets/images/products/dove.png";
import huggies from "../assets/images/products/huggies.png";
import legrip from "../assets/images/products/legrip-plus.png";
import loratadina from "../assets/images/products/loratadina-mk.png";
import neurobion from "../assets/images/products/neurobion.png";

const products = [

    {

        id: "loratadina-mk",

        name: "Loratadina MK",
        category: "Medicamentos",

        price: "$7.500",

        oldPrice: "$10.000",

        discount: "-25%",

        badge: "🔥 Oferta",

        image: loratadina,

        activeIngredient:
            "Loratadina",

        searchTerms: [

            "loratadina",

            "lora",

            "alergia",

            "antialergico",

            "mk"


        ],

        presentation: "Caja",

        size: "10 tabletas",

        manufacturer: "MK",

        invima: "INVIMA2025LMK",

        description:
            "Medicamento antialérgico utilizado para aliviar síntomas de alergias.",

        specifications:
            "Uso oral. Antihistamínico de acción prolongada."
    },

    {

        name: "Colgate Triple Acción",
        category: "Higiene",
        price: "$8.000",

        image: colgate,

        activeIngredient:
            "Crema dental fluorada",

        searchTerms: [

            "colgate",

            "crema dental",

            "dientes",

            "fluor",

            "triple accion"

        ],

        presentation: "Caja",

        size: "X2 unidades",

        manufacturer: "Colgate",

        invima: "NSOC12345",

        description:
            "Crema dental con protección antibacterial y cuidado integral.",

        specifications:
            "Uso diario. Protección contra caries y mal aliento."
    },

    {
        name: "Neurobión",
        category: "Medicamentos",

        price: "$28.000",

        image: neurobion,

        activeIngredient:
            "Vitaminas B1 B6 B12",

        searchTerms: [

            "neurobion",

            "vitaminas",

            "b12",

            "dolor muscular",

            "nervios"

        ],

        badge: "⭐ Más vendido"
    },

    {
        name: "Dove Roll On",
        category: "Higiene",

        price: "$16.000",

        image: dove,

        activeIngredient:
            "Desodorante antitranspirante",

        searchTerms: [

            "dove",

            "desodorante",

            "roll on",

            "axilas"

        ]
    },

    {
        name: "Arrurrú Shampoo",
        category: "Bebés",

        price: "$14.000",

        image: arrurru,

        activeIngredient:
            "Shampoo infantil",

        searchTerms: [

            "arrurru",

            "bebe",

            "shampoo",

            "infantil"

        ],

        badge: "🆕 Nuevo"
    },

    {
        name: "Allegra Pediátrico",
        category: "Medicamentos",

        price: "$25.000",

        image: allegra,

        activeIngredient:
            "Fexofenadina",

        searchTerms: [

            "allegra",

            "fexofenadina",

            "alergia",

            "pediatrico",

            "niños"

        ]
    },

    {
        name: "Pañales Huggies",
        category: "Bebés",
        price: "$32.000",

        badge: "🆕 Nuevo",

        image: huggies,

        activeIngredient:
            "Pañales desechables",

        searchTerms: [

            "pañales",

            "huggies",

            "bebe",

            "recien nacido"

        ]
    },

    {
        name: "LeGrip Plus",
        category: "Antigripales",

        price: "$14.500",

        badge: "⭐ Más vendido",

        image: legrip,

        activeIngredient:
            "Acetaminofén + Antigripal",

        searchTerms: [

            "legrip",

            "gripa",

            "acetaminofen",

            "antigripal",

            "fiebre"

        ]
    }

];

export default products;