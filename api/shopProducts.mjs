let SHOP_PRODUCTS = [
  {
    name: "(NUEVO) CAMISETA ENTRENAMIENTO CANTERA SQUADRA 25",
    price: "19,00 EUR",
    imgURL: "/public/img/shop/camiseta_adidas_cantera.png",
    hoverImgURL: "/public/img/shop/camiseta_adidas_cantera.png",
    productImages: ["/public/img/shop/camiseta_adidas_cantera.png"],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/cantera-squadra-25-mujer-cff-olympia-las-rozas-team-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  {
    name: "(NUEVO) CAMISETA ENTRENAMIENTO CANTERA SQUADRA 25",
    price: "24,00 EUR",
    imgURL: "/public/img/shop/camiseta_adidas_entrenamiento.png",
    hoverImgURL: "/public/img/shop/camiseta_adidas_entrenamiento.png",
    productImages: ["/public/img/shop/camiseta_adidas_entrenamiento.png"],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/camiseta/adidas/tiro-24-cotton-cff-olympia-las-rozas-team-navy-blue-white",
    selections: [],
    otherInputs: [],
  },
  {
    name: "(NUEVO) CAMISETA EQUIPACIÓN 10º ANIVERSARIO",
    price: "220,00 EUR",
    imgURL: "/public/img/shop/camiseta_equipacion_dorada_aliberico.png",
    hoverImgURL: "/public/img/shop/camiseta_equipacion_dorada_ruesma.png",
    productImages: [
      "/public/img/shop/camiseta_equipacion_dorada.png",
      "/public/img/shop/camiseta_equipacion_dorada_aliberico.png",
      "/public/img/shop/camiseta_equipacion_dorada_ruesma.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/jugadoras-cantera-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) CAMISETA 10º ANIVERSARIO",
    price: "10,00 EUR - 21,00 EUR LAS TRES",
    imgURL: "/public/img/shop/camiseta_aniversario_granate_front.png",
    hoverImgURL: "/public/img/shop/camiseta_aniversario_granate_back.png",
    productImages: [
      "/public/img/shop/camiseta_aniversario_granate_front.png",
      "/public/img/shop/camiseta_aniversario_granate_back.png",
      "/public/img/shop/camiseta_aniversario_azuloscuro_front.png",
      "/public/img/shop/camiseta_aniversario_azuloscuro_back.png",
      "/public/img/shop/camiseta_aniversario_azulceleste_front.png",
      "/public/img/shop/camiseta_aniversario_azulceleste_back.png",
    ],
    pageName: "camiseta_aniversario",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_aniversario",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: [
          "Color: Granate",
          "Color: Azul Oscuro",
          "Color: Azul celeste",
        ],
      },
    ],
    otherInputs: [],
  },

  {
    name: "(NUEVO) MOCHILA ADIDAS",
    price: "32,00 EUR",
    imgURL: "/public/img/shop/mochila_adidas_23.png",
    hoverImgURL: "/public/img/shop/mochila_adidas_23.png",
    productImages: [],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/mochila/adidas/tiro-23-league-26.5-l-cff-olympia-las-rozas-team-navy-blue-black-white",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) SUDADERA OLYMPIA 2 COLORES",
    price: "21,50 EUR",
    imgURL: "/public/img/shop/hoodie_front_black.png",
    hoverImgURL: "/public/img/shop/hoodie_front_white.png",
    productImages: [
      "/public/img/shop/hoodie_front_black.png",
      "/public/img/shop/hoodie_front_white.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "sudadera_blanca",
    pageURL: "/pages/producto_tienda.html?producto=sudadera_blanca",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Negro", "Color: Blanco"],
      },
    ],
    otherInputs: [
      {
        type: "hidden",
        name: "_cc",
        placeholder: "",
        value: "info@artycosl.com",
        isRequired: false,
      },
    ],
  },

  //        {
  //    name: "(NUEVO) CAMISETA ANIVERSARIO",
  //    price: "26,00 EUR - Diseño delante y detrás",
  //    imgURL: "/public/img/shop/camisetas_aniversario_front.png",
  //    hoverImgURL: "/public/img/shop/camisetas_aniversario_front.png",
  //        productImages: [
  //       "/public/img/shop/camisetas_aniversario_front.png",
  //    ],
  //    pageName: "camiseta_aniversario",
  //        pageURL: "/pages/producto_tienda.html?producto=camiseta_aniversario",
  //    selections: [
  //      {
  //        name: "Talla",
  //        isRequired: true,
  //        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
  //      },
  //      {
  //        name: "Color",
  //        isRequired: true,
  //        options: ["Color: Lavanda"],
  //      },
  //    ],
  //    otherInputs: [],
  //  },

  {
    name: "(NUEVO) CAMISETA COPA DE LA REINA",
    price: "10,00 EUR - Diseño delante y detrás",
    imgURL: "/public/img/shop/camiseta_copadelareina_front.png",
    hoverImgURL: "/public/img/shop/camiseta_copadelareina_back.png",
    productImages: [
      "/public/img/shop/camiseta_copadelareina_front.png",
      "/public/img/shop/camiseta_copadelareina_back.png",
    ],
    pageName: "camiseta_reina",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_reina",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Lavanda"],
      },
    ],
    otherInputs: [],
  },

  {
    name: "(NUEVO) PACK EQUIPACIÓN PORTERA",
    price: "220,00 EUR",
    imgURL: "/public/img/shop/camiseta_portera_equipacion_aliberico.png",

    hoverImgURL: "/public/img/shop/camiseta_portera_equipacion_ruesma.png",

    productImages: [
      "/public/img/shop/camiseta_portera_equipacion.png",
      "/public/img/shop/camiseta_portera_equipacion_aliberico.png",
      "/public/img/shop/camiseta_portera_equipacion_ruesma.png",
      "/public/img/shop/pantalon_portera_equipacion.png",
      "/public/img/shop/medias_portera_equipacion.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/porteras-cantera-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) PACK SEGUNDA EQUIPACIÓN PORTERA",
    price: "220,00 EUR",
    imgURL:
      "/public/img/shop/camiseta_portera__segunda_equipacion_aliberico.png",

    hoverImgURL:
      "/public/img/shop/camiseta_portera__segunda_equipacion_ruesma.png",

    productImages: [
      "/public/img/shop/camiseta_portera__segunda_equipacion.png",
      "/public/img/shop/camiseta_portera__segunda_equipacion_aliberico.png",
      "/public/img/shop/camiseta_portera__segunda_equipacion_ruesma.png",
      "/public/img/shop/pantalon_portera__segunda_equipacion.png",
      "/public/img/shop/medias_portera__segunda_equipacion.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/porteras-cantera-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) PACK PRIMERA EQIPACIÓN",
    price: "220,00 EUR",
    imgURL: "/public/img/shop/camiseta_primera_equipacion_aliberico.png",
    hoverImgURL: "/public/img/shop/camiseta_primera_equipacion_ruesma.png",

    productImages: [
      "/public/img/shop/camiseta_primera_equipacion.png",
      "/public/img/shop/camiseta_primera_equipacion_aliberico.png",
      "/public/img/shop/camiseta_primera_equipacion_ruesma.png",
      "/public/img/shop/pantalon_primera_equipacion.png",
      "/public/img/shop/medias_primera_equipacion.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/jugadoras-cantera-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) PACK SEGUNDA EQUIPACIÓN",
    price: "220,00 EUR",
    imgURL: "/public/img/shop/camiseta_segunda_equipacion_aliberico.png",
    hoverImgURL: "/public/img/shop/camiseta_segunda_equipacion_ruesma.png",
    productImages: [
      "/public/img/shop/camiseta_segunda_equipacion.png",
      "/public/img/shop/camiseta_segunda_equipacion_aliberico.png",
      "/public/img/shop/camiseta_segunda_equipacion_ruesma.png",
      "/public/img/shop/pantalon_segunda_equipacion.png",
      "/public/img/shop/medias_segunda_equipacion.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/pack/futbol/jugadoras-cantera-olympia-las-rozas",
    selections: [],
    otherInputs: [],
  },

  {
    name: "(NUEVO) CAMISETA OLYMPIA 2015",
    price: "8,00 EUR - Sólo diseño delante",
    imgURL: "/public/img/shop/nueva_camiseta_2015_front.png",
    hoverImgURL: "/public/img/shop/nueva_camiseta_2015_front.png",
    productImages: ["/public/img/shop/nueva_camiseta_2015_front.png"],
    pageName: "camiseta_2015",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_2015",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Azul"],
      },
    ],
    otherInputs: [],
  },
  {
    name: "(NUEVO) CAMISETA MANGA LARGA OLYMPIA 2015",
    price: "15,00 EUR - Sólo diseño delante",
    imgURL: "/public/img/shop/camiseta_2015_manga_larga.png",
    hoverImgURL: "/public/img/shop/camiseta_2015_manga_larga.png",
    productImages: ["/public/img/shop/camiseta_2015_manga_larga.png"],
    pageName: "camiseta_larga_2015",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_larga_2015",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Azul"],
      },
    ],
    otherInputs: [],
  },

  {
    name: "SUDADERA PASEO",
    price: "28,00 EUR - Diseño delante y detrás",
    imgURL: "/public/img/shop/sudadera_paseo_back.png",
    hoverImgURL: "/public/img/shop/sudadera_2015_front.png",
    productImages: [
      "/public/img/shop/sudadera_paseo_back.png",
      "/public/img/shop/sudadera_2015_front.png",
    ],
    pageName: "sudadera_paseo",
    pageURL: "/pages/producto_tienda.html?producto=sudadera_paseo",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Azul", "Color: Mint"],
      },
    ],
    otherInputs: [],
  },
  //////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "SUDADERA OLYMPIA 2015",
    price: "15,00 EUR - Sólo diseño delante",
    imgURL: "/public/img/shop/sudadera_2015_front.png",
    hoverImgURL: "/public/img/shop/sudadera_2015_front.png",
    productImages: ["/public/img/shop/sudadera_2015_front.png"],
    pageName: "sudadera_2015",
    pageURL: "/pages/producto_tienda.html?producto=sudadera_2015",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: XS", "Talla: S", "Talla: M", "Talla: L", "Talla XL"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Color: Azul", "Color: Mint"],
      },
    ],
    otherInputs: [],
  },
  //////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CHANCLAS OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/chanclas.png",
    hoverImgURL: "/public/img/shop/chanclas.png",
    productImages: ["/public/img/shop/chanclas.png"],
    pageName: "chanclas",
    pageURL: "/pages/producto_tienda.html?producto=chanclas",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: [
          "Talla: 37",
          "Talla: 38",
          "Talla: 39",
          "Talla: 40",
          "Talla: 41",
          "Talla: 42",
          "Talla: 43",
        ],
      },
    ],
    otherInputs: [],
  },
  //////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "(NUEVO) RIÑONERA OLYMPIA",
    price: "12,00 EUR",
    imgURL: "/public/img/shop/riñonera.png",
    hoverImgURL: "/public/img/shop/riñonera.png",
    productImages: ["/public/img/shop/riñonera.png"],
    pageName: "riñonera",
    pageURL: "/pages/producto_tienda.html?producto=riñonera",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "(NUEVO) LLAVERO MOSQUETÓN",
  //   price: "____ EUR",
  //   imgURL: "/public/img/shop/llavero_mosqueton.png",
  //   hoverImgURL: "/public/img/shop/llavero_mosqueton.png",
  //   productImages: [],
  //   pageName: "llavero_mosqueton",
  //   pageURL: "/pages/producto_tienda.html?producto=llavero_mosqueton",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////
  //{
  //  name: "PACK PRIMERA EQIPACIÓN",
  //  price: "150,00 EUR",
  //  imgURL: "/public/img/shop/camiseta_azul_front.png",
  //  hoverImgURL: "/public/img/shop/camiseta_azul_front.png",
  //  productImages: ["/public/img/shop/camiseta_azul_front.png"],
  //  pageName: "-",
  //  pageURL:
  //    "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-jugadoras-cantera",
  //  selections: [],
  //  otherInputs: [],
  //},
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //  {
  //    name: "PACK EQIPACIONES PORTERA",
  //    price: "185,00 EUR",
  //    imgURL: "/public/img/shop/camiseta_amarilla_front.png",
  //    hoverImgURL: "/public/img/shop/camiseta_amarilla_front.png",
  //    productImages: [],
  //    pageName: "-",
  //    pageURL:
  //      "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-porteras-cantera",
  //    selections: [],
  //    otherInputs: [],
  //  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PACK SEGUNDA EQUIPACIÓN PORTERA",
  //   price: "PACK",
  //   imgURL: "/public/img/shop/camiseta_rosa_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_rosa_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-semi-pink-glow",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //  {
  //    name: "EQUIPACIÓN DE ENTRENAMIENTO",
  //    price: "ESCUDO BLANCO - LRA",
  //    imgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
  //    hoverImgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
  //    productImages: [
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  //    ],
  //    pageName: "pack_equipacion_entrenamiento",
  //    pageURL: "/pages/producto_tienda.html?producto=pack_equipacion_entrenamiento",
  //    selections: [
  //      {
  //        name: "Talla Camiseta",
  //        isRequired: true,
  //
  //         options: [
  //           "Escoge talla camiseta (15 €)",
  //           "No Comprar Camiseta",
  //           "Talla Camiseta: 7-8 años",
  //           "Talla Camiseta: 8-9 años",
  //          "Talla Camiseta: 9-10 años",
  //           "Talla Camiseta: 10-11 años",
  //           "Talla Camiseta: 11-12 años",
  //           "Talla Camiseta: 12-13 años",
  //           "Talla Camiseta: 13-14 años",
  //           "Talla Camiseta: 14-15 años",
  //           "Talla Camiseta: 15-16 años",
  //           "Talla Camiseta: XS",
  //           "Talla Camiseta: S",
  //           "Talla Camiseta: M",
  //           "Talla Camiseta: L",
  //          "Talla Camiseta: XL",
  //          "Talla Camiseta: 2XL",
  //          "Talla Camiseta: 3XL",
  //          "No Comprar Camiseta"
  //        ],
  //      },
  //      {
  //        name: "Talla Pantalón",
  //        isRequired: true,
  //        options: [
  //          "Escoge talla pantalón (12€)",
  //          "No Comprar Pantalón",
  //          "Talla Pantalón: 7-8 años",
  //          "Talla Pantalón: 8-9 años",
  //          "Talla Pantalón: 9-10 años",
  //          "Talla Pantalón: 10-11 años",
  //          "Talla Pantalón: 11-12 años",
  //          "Talla Pantalón: 12-13 años",
  //          "Talla Pantalón: 13-14 años",
  //          "Talla Pantalón: 14-15 años",
  //          "Talla Pantalón: 15-16 años",
  //          "Talla Pantalón: XS",
  //          "Talla Pantalón: S",
  //          "Talla Pantalón: M",
  //          "Talla Pantalón: L",
  //          "Talla Pantalón: XL",
  //          "Talla Pantalón: 2XL",
  //          "Talla Pantalón: 3XL",
  //          "No Comprar Pantalón"
  //        ],
  //      },
  // {
  //   name: "Talla Sudadera",
  //   isRequired: true,
  //   options: [
  //     "Escoge talla medias (8€)",
  //     "Talla Sudadera: 7-8 años",
  //     "Talla Sudadera: 8-9 años",
  //     "Talla Sudadera: 9-10 años",
  //     "Talla Sudadera: 10-11 años",
  //     "Talla Sudadera: 11-12 años",
  //     "Talla Sudadera: 12-13 años",
  //     "Talla Sudadera: 13-14 años",
  //     "Talla Sudadera: 14-15 años",
  //     "Talla Sudadera: 15-16 años",
  //     "Talla Sudadera: XS",
  //     "Talla Sudadera: S",
  //     "Talla Sudadera: M",
  //     "Talla Sudadera: L",
  //     "Talla Sudadera: XL",
  //     "Talla Sudadera: 2XL",
  //     "Talla Sudadera: 3XL",
  //     "No Comprar Sudadera"
  //   ],
  // },
  //    ],
  //    otherInputs: [
  //      {
  //        type: "hidden",
  //        name: "_cc",
  //        placeholder: "",
  //        value: "info@artycosl.com",
  //        isRequired: false,
  //      },
  //    ],
  //  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  {
    name: "SUDADERA MINT OLYMPIA",
    price: "28,00 EUR",
    imgURL: "/public/img/shop/sudadera_mint_front.png",
    hoverImgURL: "/public/img/shop/sudadera_mint_front.png",
    productImages: [
      "/public/img/shop/sudadera_mint_front.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "sudadera_mint",
    pageURL: "/pages/producto_tienda.html?producto=sudadera_mint",
    selections: [
      {
        name: "Talla Sudadera",
        isRequired: true,
        options: [
          "Talla Sudadera: 7-8 años",
          "Talla Sudadera: 8-9 años",
          "Talla Sudadera: 9-10 años",
          "Talla Sudadera: 10-11 años",
          "Talla Sudadera: 11-12 años",
          "Talla Sudadera: 12-13 años",
          "Talla Sudadera: 13-14 años",
          "Talla Sudadera: 14-15 años",
          "Talla Sudadera: 15-16 años",
          "Talla Sudadera: XS",
          "Talla Sudadera: S",
          "Talla Sudadera: M",
          "Talla Sudadera: L",
          "Talla Sudadera: XL",
          "Talla Sudadera: 2XL",
          "Talla Sudadera: 3XL",
        ],
      },
    ],
    otherInputs: [
      {
        type: "hidden",
        name: "_cc",
        placeholder: "",
        value: "info@artycosl.com",
        isRequired: false,
      },
    ],
  },
  */
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //{
  //  name: "ABRIGO OLYMPIA NIÑA",
  //  price: "45,00 EUR",
  //  imgURL: "/public/img/shop/abrigo_front.png",
  //  hoverImgURL: "/public/img/shop/abrigo_front.png",
  //  productImages: [
  //    "/public/img/shop/abrigo_front.png",
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  // "/public/img/noticias/noticia_3.JPG",
  //  ],
  //  pageName: "abrigo_niña",
  //  pageURL: "/pages/producto_tienda.html?producto=abrigo_niña",
  //  selections: [
  //    {
  //     name: "Talla",
  //      isRequired: true,
  //      options: [
  //        "Talla: 4 (45€)",
  //        "Talla: 6 (45€)",
  //        "Talla: 8 (45€)",
  //        "Talla: 10 (45€)",
  //        "Talla: 12 (45€)",
  //        "Talla: 14 (45€)",
  //      ],
  //    },
  //  ],
  //  otherInputs: [
  //    {
  //      type: "hidden",
  //      name: "_cc",
  //      placeholder: "",
  //      value: "info@artycosl.com",
  //      isRequired: false,
  //    },
  //  ],
  //},
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "ABRIGO OLYMPIA ADULTO",
    price: "61,00 EUR",
    imgURL: "/public/img/shop/abrigo_front.png",
    hoverImgURL: "/public/img/shop/abrigo_front.png",
    productImages: [
      "/public/img/shop/abrigo_front.png",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
      "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "abrigo_adulto",
    pageURL: "/pages/producto_tienda.html?producto=abrigo_adulto",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: [
          "Talla: XS (61€)",
          "Talla: S (61€)",
          "Talla: M (61€)",
          "Talla: L (61€)",
          "Talla: 2XL (61€)",
        ],
      },
    ],
    otherInputs: [
      {
        type: "hidden",
        name: "_cc",
        placeholder: "",
        value: "info@artycosl.com",
        isRequired: false,
      },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CHUBASQUERO OLYMPIA",
    price: "47,00 EUR",
    imgURL: "/public/img/shop/chubasquero_front.png",
    hoverImgURL: "/public/img/shop/chubasquero_back.png",
    productImages: [
      "/public/img/shop/chubasquero_front.png",
      "/public/img/shop/chubasquero_back.png",
    ],
    pageName: "-",
    pageURL:
      "https://www.futbolemotion.com/es/comprar/chubasquero/adidas/entrada-22-olympia-las-rozas-team-navy-blue",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "BUFANDA OLYMPIA",
    price: "15,00 EUR",
    imgURL: "/public/img/shop/bufanda_front.png",
    hoverImgURL: "/public/img/shop/bufanda_front.png",
    productImages: [
      "/public/img/shop/bufanda_front.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "bufanda",
    pageURL: "/pages/producto_tienda.html?producto=bufanda",
    selections: [],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CAMISETA BÁSICA OLYMPIA",
    price: "12,00 EUR",
    imgURL: "/public/img/shop/camiseta_basica_front.png",
    hoverImgURL: "/public/img/shop/camiseta_basica_front.png",
    productImages: [
      "/public/img/shop/camiseta_basica_front.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "camiseta_basica",
    pageURL: "/pages/producto_tienda.html?producto=camiseta_basica",
    selections: [
      {
        name: "Talla",
        isRequired: true,
        options: ["Talla: S", "Talla: M", "Talla: L"],
      },
      {
        name: "Color",
        isRequired: true,
        options: ["Azul Oscuro", "Blanco"],
      },
    ],
    otherInputs: [],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "LLAVERO PERSONALIZADO",
    price: "5,00 EUR",
    imgURL: "/public/img/shop/llavero_front.png",
    hoverImgURL: "/public/img/shop/llavero_back.png",
    productImages: [
      "/public/img/shop/llavero_front.png",
      "/public/img/shop/llavero_back.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_3.JPG",
    ],
    pageName: "llavero_personalizado",
    pageURL: "/pages/producto_tienda.html?producto=llavero_personalizado",
    selections: [],
    otherInputs: [
      {
        type: "text",
        name: "Nombre en llavero",
        placeholder: "Nombre en llavero",
        value: "",
        isRequired: true,
      },
      {
        type: "number",
        name: "Dorsal en llavero",
        placeholder: "Dorsal en llavero",
        value: "",
        isRequired: true,
      },
    ],
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CHUBASQUERO OLYMPIA (NUEVO)",
  //   price: "47,00 EUR",
  //   imgURL: "/public/img/shop/chubasquero_front.png",
  //   hoverImgURL: "/public/img/shop/chubasquero_back.png",
  //   productImages: [],
  //   pageName: "chubasquero",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/chubasquero/adidas/entrada-22-olympia-las-rozas-team-navy-blue",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CHUBASQUERO OLYMPIA NIÑA (NUEVO)",
  //   price: "47,00 EUR",
  //   imgURL: "/public/img/shop/chubasquero_front.png",
  //   hoverImgURL: "/public/img/shop/chubasquero_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/chubasquero/adidas/entrada-22-nino-olympia-las-rozas-team-navy-blue",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    name: "CINTAS DEL PELO OLYMPIA",
    price: "9,00 EUR",
    imgURL: "/public/img/shop/cintas_front.png",
    hoverImgURL: "/public/img/shop/cintas_front.png",
    productImages: [
      "/public/img/shop/cintas_front.png",
      // "/public/img/noticias/noticia_3.JPG",
      // "/public/img/noticias/noticia_11.JPG",
      // "/public/img/noticias/noticia_13.JPG",
      // "/public/img/noticias/noticia_1.JPG",
    ],
    pageName: "cintas_pelo",
    pageURL: "/pages/producto_tienda.html?producto=cintas_pelo",
    selections: [
      {
        name: "Color",
        isRequired: true,
        options: [
          "Azul Oscuro",
          "Blanco",
          "Rosa",
          "1ud Rosa & 1ud Blanco (15 € total)",
          "1ud Azul Osc & 1ud Blanco (15 € total)",
          "2uds Azul Oscuro (15 € total)",
          "2uds Blanco (15 € total)",
          "2uds Rosa (15 € total)",
        ],
      },
      {
        name: "Texto",
        isRequired: true,
        options: [
          "Texto: Olympia",
          'Texto: "Nombre personalizado"',
          'Texto: "Nombre personalizado" + "Dorsal"',
          'Texto: "Nombre personalizado" + Olympia',
          'Texto: "Nombre personalizado" + "Dorsal" + Olympia',
        ],
      },
    ],
    otherInputs: [
      {
        type: "text",
        name: "Nombre personalizado (si aplica)",
        placeholder: "Nombre personalizado (si aplica)",
        value: "",
        isRequired: false,
      },
      {
        type: "number",
        name: "Dorsal (si aplica)",
        placeholder: "Dorsal (si aplica)",
        value: "",
        isRequired: false,
      },
    ],
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PACK JUGADORAS CANTERA",
  //   price: "230,00 EUR",
  //   imgURL: "/public/img/escudos/olympia.png",
  //   hoverImgURL: "/public/img/escudos/olympia.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-jugadoras-cantera",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PACK PORTERAS CANTERA",
  //   price: "230,00 EUR",
  //   imgURL: "/public/img/escudos/olympia.png",
  //   hoverImgURL: "/public/img/escudos/olympia.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/olympia-porteras-cantera",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PACK VETERANAS NO FEDERADAS",
  //   price: "105,00 EUR",
  //   imgURL: "/public/img/escudos/olympia.png",
  //   hoverImgURL: "/public/img/escudos/olympia.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL: "https://www.futbolemotion.com/es/comprar/pack/futbol/veteranas-no-federadas-olympia",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PACK JUEGO VETERANAS NO FEDERADAS",
  //   price: "90,00 EUR",
  //   imgURL: "/public/img/escudos/olympia.png",
  //   hoverImgURL: "/public/img/escudos/olympia.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pack/futbol/juego-veteranas-no-federadas-olympia",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA COMPETICIÓN AZUL",
  //   price: "40,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_azul_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_azul_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-mujer-olympia-las-rozas-navy-blue-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA COMPETICIÓN AZUL NIÑA",
  //   price: "40,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_azul_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_azul_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-nino-olympia-las-rozas-navy-blue-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN AZUL OLYMPIA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_azul_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_azul_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-mujer-olympia-team-navy-blue-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN AZUL OLYMPIA NIÑA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_azul_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_azul_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-nino-olympia-team-navy-blue-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "MEDIAS AZULES OLYMPIA",
  //   price: "8,00 EUR",
  //   imgURL: "/public/img/shop/medias_azules_front.png",
  //   hoverImgURL: "/public/img/shop/medias_azules_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-team-navy-blue-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA PORTERA AMARILLA",
  //   price: "40,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_amarilla_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_amarilla_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-mujer-olympia-las-rozas-yellow-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA PORTERA AMARILLA NIÑA",
  //   price: "40,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_amarilla_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_amarilla_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/competition-21-miteam-mc-nino-olympia-las-rozas-yellow-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN AMARILLO OLYMPIA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_amarillo_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_amarillo_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-olympia-team-yellow-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN AMARILLO OLYMPIA NIÑA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_amarillo_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_amarillo_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/squadra-21-nino-olympia-team-yellow-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "MEDIAS AMARILLAS OLYMPIA",
  //   price: "8,00 EUR",
  //   imgURL: "/public/img/shop/medias_amarillas_front.png",
  //   hoverImgURL: "/public/img/shop/medias_amarillas_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-olympia-las-rozas-team-yellow-black",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA COMPETICIÓN MINT",
  //   price: "20,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_mint_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_mint_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA COMPETICIÓN MINT NIÑA",
  //   price: "20,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_mint_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_mint_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA PORTERA ROSA",
  //   price: "20,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_rosa_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_rosa_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-semi-pink-glow",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA PORTERA ROSA NIÑA",
  //   price: "20,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_rosa_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_rosa_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-semi-pink-glow",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN MINT OLYMPIA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_mint_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_mint_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN MINT OLYMPIA NIÑA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_mint_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_mint_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN NEGRO OLYMPIA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_negro_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_negro_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-black",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN NEGRO OLYMPIA NIÑA",
  //   price: "15,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_negro_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_negro_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-black",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "MEDIAS BLANCAS OLYMPIA",
  //   price: "8,00 EUR",
  //   imgURL: "/public/img/shop/medias_blancas_front.png",
  //   hoverImgURL: "/public/img/shop/medias_blancas_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-white-black",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "MEDIAS NEGRAS OLYMPIA",
  //   price: "8,00 EUR",
  //   imgURL: "/public/img/shop/medias_negras_front.png",
  //   hoverImgURL: "/public/img/shop/medias_negras_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/medias/adidas/milano-23-cff-olympia-las-rozas-black-white",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "SUDADERA MINT OLYMPIA",
  //   price: "30,00 EUR",
  //   imgURL: "/public/img/shop/sudadera_mint_front.png",
  //   hoverImgURL: "/public/img/shop/sudadera_mint_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/sudadera/adidas/entrada-22-training-mujer-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "SUDADERA MINT OLYMPIA NIÑA",
  //   price: "30,00 EUR",
  //   imgURL: "/public/img/shop/sudadera_mint_front.png",
  //   hoverImgURL: "/public/img/shop/sudadera_mint_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/sudadera/adidas/entrada-22-training-nino-olympia-clear-mint",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN LARGO OLYMPIA",
  //   price: "23,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_largo_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_largo_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-largo/adidas/entrada-22-training-mujer-olympia-team-navy-blue",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN LARGO OLYMPIA NIÑA",
  //   price: "23,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_largo_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_largo_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-largo/adidas/entrada-22-training-nino-olympia-team-navy-blue",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA ENTRENAMIENTO",
  //   price: "17,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_entrenamiento_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-mujer-olympia-clear-mint-0",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "CAMISETA ENTRENAMIENTO NIÑA",
  //   price: "17,00 EUR",
  //   imgURL: "/public/img/shop/camiseta_entrenamiento_front.png",
  //   hoverImgURL: "/public/img/shop/camiseta_entrenamiento_back.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/camiseta/adidas/entrada-22-mc-nino-olympia-clear-mint-0",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN ENTRENAMIENTO",
  //   price: "14,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-mujer-olympia-clear-mint-0",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "PANTALÓN ENTRENAMIENTO NIÑA",
  //   price: "14,00 EUR",
  //   imgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
  //   hoverImgURL: "/public/img/shop/pantalon_entrenamiento_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL:
  //     "https://www.futbolemotion.com/es/comprar/pantalon-corto/adidas/entrada-22-nino-olympia-clear-mint-0",
  //   selections: [],
  //   otherInputs: [],
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "MOCHILA OLYMPIA",
  //   price: "31,00 EUR",
  //   imgURL: "/public/img/shop/mochila_front.png",
  //   hoverImgURL: "/public/img/shop/mochila_front.png",
  //   productImages: [],
  //   pageName: "-",
  //   pageURL: "https://www.futbolemotion.com/es/comprar/mochila/adidas/tiro-olympia-black-white",
  //   selections: [],
  //   otherInputs: [],
  // },
];

export default SHOP_PRODUCTS;
