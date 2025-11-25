let RFFM_EPISODES = [];

class Episode {
  constructor({
    name = "LUNES NOCHE FÚTBOL DE MADRID",
    imgURL = "public/img/video_covers/rffmplay.jpg",
    episodeURL,
  }) {
    this.name = name;
    this.imgURL = imgURL;
    this.episodeURL = episodeURL;
  }
}

let ep1 = new Episode({
  name: "01/ Claudia Hernando",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL:
    "https://www.youtube.com/live/wAvZ9WMdwow?si=ZG2EGbuO3jlNlu6s&t=5936",
});

let ep2 = new Episode({
  name: "02/ Paola González",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/q90FGgJrj_M?feature=shared&t=5291",
});

let ep3 = new Episode({
  name: "03/ Alejandra Rubio",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/0esEexjJQ3U?feature=shared&t=5547",
});

let ep4 = new Episode({
  name: "04/ Marta de las Heras",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/0esEexjJQ3U?feature=shared&t=7083",
});

let ep5 = new Episode({
  name: "05/ Gabri (Preparador Senior C)",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/_sSeaSuxyic?feature=shared&t=7863",
});

let ep6 = new Episode({
  name: "06/ Carmen Sánchez",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/DV3CDD2j6Jo?feature=shared&t=5649",
});

let ep7 = new Episode({
  name: "07/ Vicky Pérez y Arantxa de la Chica",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL: "https://www.youtube.com/live/QRuWHjhaS2Q?feature=shared&t=6511",
});

let ep8 = new Episode({
  name: "08/ Arantxa de la Chica",
  imgURL: "public/img/video_covers/rffmplay.jpg",
  episodeURL:
    "https://www.youtube.com/live/CCKxAC77Epw?si=hwyfAKU8Y9anO_A9&t=6799",
});

let ep9 = new Episode({
  name: "09/ Claudia Hernando",
  imgURL: "/public/img/video_covers/rffmplay.jpg",
  videoURL: "https://www.rffmplay.es/videos/287538-programa-106",
});

//Solo se ponen los de cada año, una vez se termine la tempo, se espera al primero de la siguiente y se eliminan el resto.
RFFM_EPISODES.push(ep9);

export default RFFM_EPISODES;

// Temporada 22-23
//
// let ep1 = new Episode({
//   name: "01/ Noelia Llamas y Nuria Díaz",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/Pjo7oMxt0z0?t=4244",
// });
// let ep2 = new Episode({
//   name: "02/ Cris Menéndez e Irene González",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/8cKPmhVXRfw?t=4880",
// });
// let ep3 = new Episode({
//   name: "03/ Alba Masa",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/TQEcYiiyh7c?feature=share&t=5249",
// });
// let ep4 = new Episode({
//   name: "04/ Arantxa y Raquel Guardado",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/_IOZnSWAAZM?feature=share&t=5415",
// });
// let ep5 = new Episode({
//   name: "05/ Rosa Torres e Iratxe Rodríguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/fWi-vovvN7c?feature=share&t=4562",
// });
// let ep6 = new Episode({
//   name: "06/ Manuela Alfayate",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/S7mw2GlnGu8?feature=share&t=5516",
// });
// let ep7 = new Episode({
//   name: "07/ Gabriela de la Villa",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/70MoHl7iGFs?feature=share&t=5827",
// });
// let ep8 = new Episode({
//   name: "08/ Claudia Domínguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/NIC4C8th3SE?t=4430",
// });
// let ep9 = new Episode({
//   name: "09/ Sara Yagüe",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https:/https://www.youtube.com/live/mNlmfJrzERs?feature=share&t=6017",
// });
// let ep10 = new Episode({
//   name: "10/ Lucía Fernández",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/To3hy6NKU5g?feature=share&t=5162",
// });
// let ep11 = new Episode({
//   name: "11/ Noemí Andrés y Daniela Sanchís",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/GaWPCAhUCVs?feature=share&t=4838",
// });
// let ep12 = new Episode({
//   name: "12/ Patri Camacho y Andrea Ovejero",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/ItEcAS0saOw?feature=share&t=5194",
// });
// let ep13 = new Episode({
//   name: "13/ Andrea García e Iria Moya",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/sdbdQ2Wg2CA?feature=share&t=5252",
// });
// let ep14 = new Episode({
//   name: "14/ Elena Anós",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/TR6B5jRHeEs?feature=share&t=6345",
// });
// let ep15 = new Episode({
//   name: "15/ Ana de la Chica y Lucía Fresno",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/1KhlzNgqsWg?feature=share&t=1170",
// });
// let ep16 = new Episode({
//   name: "16/ Iciar y Estrella",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/qW4za_yhgOA?feature=share&t=5914",
// });
// let ep17 = new Episode({
//   name: "17/ Emanuel, Pedro y Sofía",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/Lp51bkBQzys?feature=share&t=4846",
// });
//
// Temporada 23-24
//
// let ep1 = new Episode({
//   name: "01/ Patri Camacho",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/UP4AYgZxisA?si=jTCh9h3Wjx2g2w9B&t=4418",
// });
// let ep2 = new Episode({
//   name: "02/ Iratxe Rodríguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/FU3VHhOyoD8?si=Tx5OdiILTR3eLCpZ&t=4750",
// });

// let ep3 = new Episode({
//   name: "03/ Valentina Ruiz",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/AfpH7J4ZE9A?si=ZGd05JxDUtLWbyab&t=5647",
// });

// let ep4 = new Episode({
//   name: "04/ Lucía Fernández",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/hsfeHaAmFyw?si=qtnpRxr4UT3Qavr0&t=5579",
// });

// let ep5 = new Episode({
//   name: "05/ Daniela Sanchís",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/GyovTvZpCQU?si=w30k5ZjQhC9BbNJI&t=5557",
// });

// let ep6 = new Episode({
//   name: "06/ Lucía Núñez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/ky2jCe8AurI?si=hyzcUntovyECD-qo&t=4646",
// });

// let ep7 = new Episode({
//   name: "07/ Elisa García",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/VfkXOnjhZys?si=AgkjcrSAGSFXbvOM&t=5271",
// });

// let ep8 = new Episode({
//   name: "08/ Andrea Ovejero",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/HNM1-oNSJPw?si=m56FvC2FcP3GVc8N&t=4905",
// });

// let ep9 = new Episode({
//   name: "09/ Nelisa Pereira y Mónica Navas",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/ZnAXR_jjgqQ?si=G3AvrtIMPpEX6TyZ&t=5298",
// });

// let ep10 = new Episode({
//   name: "10/ Raquel Guardado",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/B_cwOY1u-vI?si=ikRiLJbxPgIREA07&t=4741",
// });

// let ep11 = new Episode({
//   name: "11/ Lucía Sánchez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/vOtdh1QbVPA?si=tj-Jb2InaO5lqlKL&t=3156",
// });

// let ep12 = new Episode({
//   name: "12/ Arantxa de la Chica",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/XXUmvELlys0?si=GQZ5xtrXkN33lOnm&t=5860",
// });

// let ep13 = new Episode({
//   name: "13/ Nuria Díaz",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/ZM0QQnZOWRY?si=8zmEqC553d8-AzgT&t=5384",
// });

// let ep14 = new Episode({
//   name: "14/ Teresa Brandau",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/7nQMbA_RgYo?si=oGMnnr1aBnEf9QII&t=4831",
// });

// let ep15 = new Episode({
//   name: "15/ Sarah Yagüe",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/weB7LWdjGIk?si=YWt039mGIqhNRrRz&t=5143",
// });

// let ep16 = new Episode({
//   name: "16/ Claudia Hernando",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/S_ZaoxbRQ-I?si=mzFi9wFNWngtyNkQ&t=4437",
// });

// let ep17 = new Episode({
//   name: "17/ Mireya Nieto y Gadea Torres",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/WWwFWaBuWsA?si=-UTPvpJq-Z_kvB-w&t=5090",
// });

// let ep18 = new Episode({
//   name: "18/ Lucía Fernández",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/8IY4sQ2ndt4?si=G63XCJ9kQ2QkXBQ7&t=5403",
// });

// let ep19 = new Episode({
//   name: "19/ Sofía Pérez, Clara Fajardo y Vicky Pérez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/18AChrMcF2E?si=9Fw8FYb9x_gikl2z&t=4349",
// });

// let ep20 = new Episode({
//   name: "20/ Jaime Fernández y Manuela Alfayate",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/vjQrIiH6w8E?si=gyAYia83OnFxXZ63&t=4347",
// });

// let ep21 = new Episode({
//   name: "21/ Arantxa de la Chica",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/G--d2fG1XfU?si=veUt00zdeabWcf8t&t=4677",
// });

// let ep22 = new Episode({
//   name: "22/ Marta Moreno",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/eLLmjG2ljoU?feature=shared&t=5262",
// });

// let ep23 = new Episode({
//   name: "23/ Arantxa de la Chica y Marta Moreno",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/uKKcEwrhUUw?si=LixKE9JkjZVvVXd0&t=5778",
// });

// let ep24 = new Episode({
//   name: "24/ Ana de la Chica, Iratxe, Alfayate y Daniela de Miguel",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/x7YgrVMH2CY?si=7MYEN9WWZt1t_deJ&t=5254",
// });

// let ep25 = new Episode({
//   name: "25/ Arantxa de la Chica y Clara Fajardo",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://www.youtube.com/live/DDATht-x6bY?si=4M__nTghrpv0Lrg1&t=5009",
// });

// let ep26 = new Episode({
//   name: "25/ Iratxe Rodríguez",
//   imgURL: "public/img/video_covers/rffmplay.jpg",
//   episodeURL: "https://youtu.be/kRf73OVbYqA?list=PLktT4paNQ5csG91nzRXs44i-pCpYWi7Cw&t=2746",
// });
