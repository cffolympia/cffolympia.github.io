let NOTICIAS = [];

class Articulo {
  constructor({
    title = "¡El Olympia está a tope!",
    imgLink = "",
    text = "",
    date = new Date().toLocaleString().split(",")[0],
    imgPosition = "center",
  }) {
    this.title = title;
    this.imgLink = imgLink;
    this.text = text;
    this.date = date;
    this.imgPosition = imgPosition;
  }
}

let a1 = new Articulo({
  title: "El olympia estrena nueva equipación.",
  imgLink: "/public/img/noticias/noticia_1.JPG",
  text: "Con la nueva temporada el CFF Olympia estrena la nueva equipación Adidas.",
  date: "12/09/2022",
});
let a2 = new Articulo({
  title: "Victoria y goleada fuera de casa.",
  imgLink: "/public/img/noticias/noticia_2.JPG",
  text: "Goleada y partidazo de todo el equipo en la cuarta jornada de liga ante el CD. Salamanca FF.",
  date: "02/10/2022",
});
let a3 = new Articulo({
  title: "El primer equipo se pone líder tras su victoria.",
  imgLink: "/public/img/noticias/noticia_3.JPG",
  text: "El primer equipo se consolida como líder tras su merecida victoria contra el Santa Teresa CD Femenino.",
  date: "16/10/2022",
});
let a4 = new Articulo({
  title: "Dos semanas de líderes.",
  imgLink: "/public/img/noticias/noticia_4.JPG",
  text: "Tras la victoria contra el Atlético de Madrid femenino, el Olympia se mantiene en primera posición por segunda semana consecutiva.",
  date: "29/10/2022",
});
let a5 = new Articulo({
  title: "¡Los partidos se ganan JUNTAS!",
  imgLink: "/public/img/noticias/noticia_5.JPG",
  text: "El primer equipo vence al Dínamo Guadalajara por 0 a 1.",
  date: "15/01/2023",
});
let a6 = new Articulo({
  title: "¡Nuestras cadetes están imparables!",
  imgLink: "/public/img/noticias/noticia_6.JPG",
  text: "¡Nuestro Cadete A está imparable! #soñamosjuntas",
  date: "25/01/2023",
});
let a7 = new Articulo({
  title: "¡El derbi se queda en casa!",
  imgLink: "/public/img/noticias/noticia_7.JPG",
  text: "Victoria frente al Olímpico de Madrid en la vuelta del derbi roceño.",
  date: "05/02/2023",
});
let a8 = new Articulo({
  title: "Una derrota que nos hace pensar en el siguiente.",
  imgLink: "/public/img/noticias/noticia_8.JPG",
  text: "Derrota frente al Pozuelo de Alarcón en la segunda vuelta por 1 a 0.",
  date: "20/02/2023",
});
let a9 = new Articulo({
  title: "Las equipaciones del Olympia viajan a Burkina Faso.",
  imgLink: "/public/img/noticias/noticia_9.jpg",
  text: '<a href="https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/">https://lavozdelaa6.es/las-equipaciones-del-cff-olympia-de-las-rozas-viajan-a-burkina-faso/</a>',
  date: "21/02/2023",
});
let a10 = new Articulo({
  title: "¡Nuestro filial sigue líder!",
  imgLink: "/public/img/noticias/noticia_10.jpg",
  text: "El Senior B se mantiene como líder.",
  date: "07/03/2023",
});
let a11 = new Articulo({
  title: "¡Tercer puesto para las Veteranas!",
  imgLink: "/public/img/noticias/noticia_11.jpg",
  text: "Las veteranas terminan en el tercer puesto de la II edición de la liga Misma Pasión. Meción especial para Carmen, galardonada jugadora más veterana de la liga.",
  date: "28/03/2023",
  imgPosition: "0 15%",
});
let a12 = new Articulo({
  title: "Empate del Juvenil A frente al Atlético de Madrid.",
  imgLink: "/public/img/noticias/noticia_12.jpg",
  text: "El Juvenil A empata con el Atlético de Madrid por 3 a 3 en la vigésimo sexta jornada de la liga.",
  date: "02/04/2023",
  imgPosition: "0 70%",
});
let a13 = new Articulo({
  title: "El Olympia regresa de la SWIT cup.",
  imgLink: "/public/img/noticias/noticia_13.jpg",
  text: "El Olympia regresa a casa tras participar en el torneo SWIT de Sabadell.",
  date: "10/04/2023",
});
let a14 = new Articulo({
  title: "Victoria conjunta del Olympia y Jugones.",
  imgLink: "/public/img/noticias/noticia_14.JPG",
  text: "Las veteranas del Olympia y de Jugones se unen para ganar por 3 a 0 al Moralzarzal.",
  date: "17/04/2023",
});
let a15 = new Articulo({
  title: "¡CAMPEONAS DE LA 1ª EDICIÓN!",
  imgLink: "/public/img/noticias/noticia_15.JPG",
  text: "El Benjamín queda campeón de la primera edición de la liga F7 femenino categoría benjamín tras remontar un 1-0 en su último partido frente al Atlético de Madrid, ganando por 1-2.",
  date: "23/04/2023",
});
let a16 = new Articulo({
  title: "¡CAMPEONAS DE LIGA!",
  imgLink: "/public/img/noticias/noticia_16.JPG",
  text: "El Cadete B logra quedar campeón de liga tras su victoria frente al Colmenarejo por 4-0.",
  date: "23/04/2023",
});
let a17 = new Articulo({
  title: "¡ALEVÍN B CAMPEÓN DE LIGA!",
  imgLink: "/public/img/noticias/noticia_17.JPG",
  text: "El Alevín B se alza con la victoria en la liga tras vencer por 7 a 1 a la Gimnastica de Colmenarejo",
  date: "14/05/2023",
  imgPosition: "0 27%",
});
let a18 = new Articulo({
  title: "De visita en Valdebebas",
  imgLink: "/public/img/noticias/noticia_18.JPG",
  text: "El Benjamín acompañó al Real Madrid en su partido este fin de semana.",
  date: "14/05/2023",
  imgPosition: "0 18%",
});
let a19 = new Articulo({
  title: "¡SENIOR B CAMPEÓN DE LIGA!",
  imgLink: "/public/img/noticias/noticia_19.JPG",
  text: "El Senior B se proclama campeón de liga tras un 5-0 frente a la E.F. Carabanchel.",
  date: "28/05/2023",
  imgPosition: "0 16%",
});
let a20 = new Articulo({
  title: "Disponible el Campamento del Olympia",
  imgLink: "/public/img/noticias/noticia_20.JPG",
  text: "Si quieres apuntarte, contacta con nosotros.",
  date: "01/06/2023",
});
let a21 = new Articulo({
  title: "Campeonas del X Torneo Solidario Zósimo Ibáñez",
  imgLink: "/public/img/noticias/noticia_21.JPG",
  text: "El Alevín se hace con el primer puesto del X Torneo Solidario Zósimo Ibáñez.",
  date: "11/06/2023",
});
let a22 = new Articulo({
  title: "¡Campeona de España con la Selección Madrileña Sub17!",
  imgLink: "/public/img/noticias/noticia_22.JPG",
  text: "La jugadora Elsa Sánchez (Senior A) se proclama campeona del Campeonato de Selecciones Autonómicas Sub17 2023.",
  date: "11/06/2023",
});
let a23 = new Articulo({
  title: "Subcampeonas del XIX Torneo Estrellas de Móstoles",
  imgLink: "/public/img/noticias/noticia_23.JPG",
  text: "El Infantil se proclama subcampeón de la 19ª edición del Torneo de Fútbol Estrellas de Móstoles.",
  date: "11/06/2023",
});
let a24 = new Articulo({
  title: "¡ASCENSO A PREFERENTE!",
  imgLink: "/public/img/noticias/noticia_24.JPG",
  text: "El Senior C logra el ascenso a categoría Preferente tras vencer al Collado Villalba por 5 a 3.",
  date: "11/06/2023",
});
let a25 = new Articulo({
  title: "Alba Masa jugadora Mahou 5 estrellas de la temporada",
  imgLink: "/public/img/noticias/noticia_25.JPG",
  text: "Alba Masa se proclama jugadora Mahou 5 estrellas de la temporada 22-23.",
  date: "15/06/2023",
  imgPosition: "center center",
});

let a26 = new Articulo({
  title: "¡Victoria en el derbi roceño!",
  imgLink: "/public/img/noticias/noticia_26.jpg",
  text: "El Primer Equipo se impone por 6 a 2 frente a Las Rozas en la primera jornada de liga.",
  date: "10/09/2023",
  imgPosition: "center center",
});

let a27 = new Articulo({
  title: "¡En tercera posición!",
  imgLink: "/public/img/noticias/noticia_27.jpg",
  text: "Nuestro primer equipo suma tres importes puntos que le permite seguir trabajando y colocarse en tercera posición a tan solo tres puntos del líder.",
  date: "06/11/2023",
  imgPosition: "center center",
});

let a28 = new Articulo({
  title: "¡Senior B líder!",
  imgLink: "/public/img/noticias/noticia_28.jpg",
  text: "Nuestras jugadoras del Senior B se colocan en la primera posición tras haber cerrado el fin de semana con un contundente resultado. ¡Enhorabuena campeonas, a seguir trabajando en esta línea!",
  date: "10/11/2023",
  imgPosition: "center center",
});

let a29 = new Articulo({
  title: "Apple Tree renueva patrocinio",
  imgLink: "/public/img/noticias/noticia_29.jpg",
  text: "Apple Tree ratifica su compromiso con el deporte femenino y renueva el patrocinio con el club.",
  date: "16/11/2023",
  imgPosition: "center center",
});

let a30 = new Articulo({
  title: "Primera reunión con University Soccer",
  imgLink: "/public/img/noticias/noticia_30.jpg",
  text: "Se celebra la primera reunión de University Soccer con las familias del Olympia.",
  date: "17/11/2023",
  imgPosition: "center center",
});

let a31 = new Articulo({
  title: "Día del entrenador 2022 - 2023",
  imgLink: "/public/img/noticias/noticia_31.jpg",
  text: "Damos la enhorabuena a nuestros entrenadores por haber alcanzado el primer puesto de su liga en sus respectivas categorías.",
  date: "02/12/2023",
  imgPosition: "40% center",
});

let a32 = new Articulo({
  title: "Bota de oro a nuestra Directora Deportiva, Ana de la Chica.",
  imgLink: "/public/img/noticias/noticia_32.jpg",
  text: "GALA DE FÚTBOL EN MADRID 2023. La @RFFM_oficial ha entregado a nuestra Directora Deportiva la BOTA DE ORO a Ana de la Chica por ser la mejor entrenadora. Orgullo Olympia",
  date: "17/12/2023",
  imgPosition: "center center",
});

let a33 = new Articulo({
  title: "El Senior A se enfrenta a la Selección Madrileña Sub17.",
  imgLink: "/public/img/noticias/noticia_33.jpg",
  text: `¡Volvemos con la madrileña!<br/>
  El CFF Olympia vuelve a estar presente en la convocatoria de la Selección Madrileña Femenina Sub 17 con tres de nuestras jugadoras para un partido amistoso contra nuestro Senior A, un encuentro donde además de sonrisas, hubo goles y buen ambiente. La victoria se la llevo el Senior A con un resultado 2-1 pero todas disfrutaron de este increíble deporte, ¡Seguir trabajando duro!<br/>
  ¡Enhorabuena a Lorena Fernández, Clara Fajardo y Lucía Núñez!`,
  date: "01/02/2024",
  imgPosition: "center center",
});

let a34 = new Articulo({
  title: "L Í D E R E S ✌️",
  imgLink: "/public/img/noticias/noticia_34.jpg",
  text: "El Senior A se proclama líder y sumamos tres importantes puntos para seguir #soñandojuntas. GRACIAS AFICCIÓN. GRACIAS CANTERA.",
  date: "19/02/2024",
  imgPosition: "center center",
});

let a35 = new Articulo({
  title: "8M Día de la Mujer",
  imgLink: "/public/img/noticias/noticia_35.png",
  text: "Cinco formas de celebrar el Día Internacional de la Mujer como jugadora del CFF Olympia:<br/>1. Celebrar los logros de tus compañeras.<br/>2. Ayudar a generar compromiso y transmitir que juntas todo se puede lograr.<br/>3. Motivar a otros para que aprendan y se involucren en el fútbol femenino.<br/>4. Dar ejemplo siempre en el campo y en los entrenamientos.<br/>5. Inspirar a otros con tu pasión por el fútbol.",
  date: "08/03/2024",
  imgPosition: "center center",
});

let a36 = new Articulo({
  title: "Merecida victoria",
  imgLink: "/public/img/noticias/noticia_36.jpg",
  text: "El primer equipo compitió en su último partido, sumando tres puntos y mantiene el liderato.",
  date: "28/03/2024",
  imgPosition: "center center",
});

let a37 = new Articulo({
  title: "Manteniendo el liderato",
  imgLink: "/public/img/noticias/noticia_37.jpg",
  text: "Las chicas del filial siguen intratables, y también mantienen el liderato. Exelente temporada.",
  date: "28/03/2024",
  imgPosition: "center center",
});

let a38 = new Articulo({
  title: "Empate contra el líder",
  imgLink: "/public/img/noticias/noticia_38.jpg",
  text: "Las chicas del Senior C empatan frente a las líderes. Un partido disputado donde hicieron un gran trabajo.",
  date: "28/03/2024",
  imgPosition: "center center",
});

let a39 = new Articulo({
  title: "Ana en las jornadas de reciclaje de la RFFM",
  imgLink: "/public/img/noticias/noticia_39.jpg",
  text: '<a href="https://www.rffm.es/noticias/generosa-diseccion-del-trabajo-formativo-en-cuatro-clubes-madrilenos-en-una-nueva-jornada-de-actualizacion-y-reciclaje-del-comite-de-entrenadores-dedicada-a-la-direccion-y-coordinacion-de-cantera">https://www.rffm.es/noticias/generosa-diseccion-del-trabajo-formativo-en-cuatro-clubes-madrilenos-en-una-nueva-jornada-de-actualizacion-y-reciclaje-del-comite-de-entrenadores-dedicada-a-la-direccion-y-coordinacion-de-cantera</a>',
  date: "11/04/2024",
  imgPosition: "center center",
});

let a40 = new Articulo({
  title: "Entrevista a Lydia Vizcaíno",
  imgLink: "/public/img/noticias/noticia_40.jpg",
  text: '<a href="https://twitter.com/futboleras_ff/status/1767843817359651113">https://twitter.com/futboleras_ff/status/1767843817359651113</a>',
  date: "12/04/2024",
  imgPosition: "center center",
});

let a41 = new Articulo({
  title: "Más 3 puntos",
  imgLink: "/public/img/noticias/noticia_41.png",
  text: "El primer equipo sigue concentrado hacia su objetivo. Constancia, fuerza, equipo y actitud.",
  date: "29/04/2024",
  imgPosition: "center center",
});

let a42 = new Articulo({
  title: "Gala de la mujer",
  imgLink: "/public/img/noticias/noticia_42.jpg",
  text: "",
  date: "20/06/2024",
  imgPosition: "center center",
});

let a43 = new Articulo({
  title: "Juvenil B asciende a Preferente",
  imgLink: "/public/img/noticias/noticia_43.jpg",
  text: "",
  date: "20/06/2024",
  imgPosition: "center center",
});

let a44 = new Articulo({
  title: "Alevín A asciende a Autonómica",
  imgLink: "/public/img/noticias/noticia_44.jpg",
  text: "",
  date: "20/06/2024",
  imgPosition: "center center",
});

let a45 = new Articulo({
  title: "Triple Ascenso",
  imgLink: "/public/img/noticias/noticia_45.jpg",
  text: "",
  date: "20/06/2024",
  imgPosition: "center center",
});

let a46 = new Articulo({
  title: "CAMPEONAS DONOSTI CUP G19",
  imgLink: "/public/img/noticias/noticia_46.jpg",
  text: "Algunos equipos de nuestra cantera, han viajado. San Sebastián para disputar el torneo internacional. Tras un gran papel de nuestras categorías G12 y G17, fue nuestro G19 quien en el mítico estadio de Anoeta (Reale Arena), se hicieron con el trofeo de campeonas frente a top tec (Selección de jugadoras catalana). Gadea torres además de hacer el gol que nos hizo levantar el título, se llevó el MVP.<br/><br/>Enhorabuena chicas, pero sobre tod, enhorabuena afición por viajar con el Olympia y hacer de cualquier lugar, nuestra casa.",
  date: "07/07/2024",
  imgPosition: "center center",
});

let a47 = new Articulo({
  title: "HYUNDAI MOTOR GAMBOA APOYA AL OLYMPIA",
  imgLink: "/public/img/noticias/noticia_47.jpg",
  text: "Hyundai motor Gamboa se une en el camino del Olympia para fomentar el fútbol femenino e impulsar nuestro club.",
  date: "03/08/2024",
  imgPosition: "center center",
});

let a48 = new Articulo({
  title: "DÍA DE LA MUJER",
  imgLink: "/public/img/noticias/noticia_48.jpg",
  text: "El Olympia celebra el día de la mujer.",
  date: "08/03/2024",
  imgPosition: "center center",
});

let a49 = new Articulo({
  title: "OLYMPIA EN LA GALA DE LA MUJER",
  imgLink: "/public/img/noticias/noticia_49.jpg",
  text: "El Olympia participa en la gala de la mujer organizada por la RFFM.",
  date: "08/03/2024",
  imgPosition: "center center",
});

let a50 = new Articulo({
  title: "JUGADORA MAHOU 5 ESTRELLAS | SEPTIEMBRE",
  imgLink: "/public/img/noticias/noticia_50.JPG",
  text: "La #JugadoraCincoEstrellas del mes de septiembre es Lucía Sánchez. Su rendimiento, compromiso y aportación al equipo la han convertido en la mejor jugadora del mes. ¡Enhorabuena, Lucía!",
  date: "30/09/2025",
  imgPosition: "center center",
});

let a51 = new Articulo({
  title: "ABONOS TEMPORADA 25/26 YA DISPONIBLES",
  imgLink: "/public/img/noticias/noticia_51.png",
  text: "Ya están disponibles los abonos de la temporada 25/26 para el primer equipo y el filial. Puedes elegir entre el abono básico, válido para un solo equipo, o el abono completo para disfrutar de ambos. Si aún no tienes el tuyo, estás a tiempo de vivir toda la segunda vuelta desde la grada. ¡No te quedes sin él!",
  date: "14/10/2025",
  imgPosition: "center center",
});

let a52 = new Articulo({
  title: "LUNES NOCHE - CLAUDIA HERNANDO",
  imgLink: "/public/img/noticias/noticia_52.jpeg",
  text: '<a href="https://www.rffmplay.es/videos/287538-programa-106">HAZ CLICK AQUI PARA ACCEDER!</a>',
  date: "20/10/2025",
  imgPosition: "center center",
});

let a53 = new Articulo({
  title: "JUGADORA MAHOU 5 ESTRELLAS | OCTUBRE",
  imgLink: "/public/img/noticias/noticia_53.png",
  text: "Elisa Puerta ha sido elegida Jugadora Mahou 5 Estrellas del mes de octubre gracias a su gran rendimiento y regularidad sobre el terreno de juego. ¡Enhorabuena, Eli!",
  date: "31/10/2025",
  imgPosition: "center center",
});

let a54 = new Articulo({
  title: "JUGADORA MAHOU 5 ESTRELLAS | NOVIEMBRE",
  imgLink: "/public/img/noticias/noticia_54.JPG",
  text: "Cristina Rincón es la Jugadora Mahou 5 Estrellas del mes de noviembre. Su trabajo, esfuerzo y aportación al equipo han sido claves durante el mes. ¡Enhorabuena, Cris!",
  date: "30/11/2025",
  imgPosition: "center center",
});

let a55 = new Articulo({
  title: "JUGADORA MAHOU 5 ESTRELLAS | DICIEMBRE",
  imgLink: "/public/img/noticias/noticia_55.JPG",
  text: "Yolanda Albalat ha sido reconocida como Jugadora Mahou 5 Estrellas del mes de diciembre tras un mes destacado por su compromiso y rendimiento con el equipo. ¡Enhorabuena, Yolanda!",
  date: "22/12/2025",
  imgPosition: "center center",
});

let a56 = new Articulo({
  title: "LUNES NOCHE - SAMMY",
  imgLink: "/public/img/noticias/noticia_56.jpeg",
  date: "12/01/2026",
  imgPosition: "center center",
});
let a57 = new Articulo({
  title: "EL FILIAL ARRANCA EL AÑO COMO LÍDER",
  imgLink: "/public/img/noticias/noticia_57.JPG",
  text: "El filial inicia el año con mucha energía, imponiéndose por 0-1 ante el hasta entonces líder y alcanzando la primera posición de la tabla. Gran trabajo de todo el equipo para seguir creyendo en la lucha por el campeonato liguero. Con tres jugadoras entre las máximas goleadoras y siendo el equipo menos goleado, continúan creciendo a nivel individual y colectivo.",
  date: "21/01/2026",
  imgPosition: "center center",
});

let a58 = new Articulo({
  title: "NUEVO PATROCINADOR - CEO DENTAL",
  imgLink: "/public/img/noticias/noticia_58.png",
  text: "La clínica dental CEO Dental se une a la familia del Olympia para crecer de la mano, apoyando el fútbol femenino desde la base y dando visibilidad a nuestras benjaminas.",
  date: "21/01/2026",
  imgPosition: "center center",
});
let a59 = new Articulo({
  title: "ACTUALIDAD DEL PRIMER EQUIPO",
  imgLink: "/public/img/noticias/noticia_59.JPG",
  text: "Nuestro primer equipo sigue creyendo en estar en los puestos altos de la clasificación gracias al trabajo, el compromiso y la actitud. Tras un inicio de temporada complicado, el esfuerzo diario comienza a reflejarse poco a poco en los resultados.",
  date: "22/01/2026",
  imgPosition: "center center",
});
let a60 = new Articulo({
  title: "JUGADORA MAHOU 5 ESTRELLAS | ENERO",
  imgLink: "/public/img/noticias/noticia_60.jpeg",
  text: "Andrea Rodríguez ha sido elegida Jugadora Mahou 5 Estrellas del mes de enero gracias a su esfuerzo, compromiso y rendimiento durante el mes. ¡Enhorabuena, Andrea!",
  date: "31/01/2026",
  imgPosition: "center center",
});

let a61 = new Articulo({
  title: "LUNES NOCHE - CLARA GÓMEZ",
  imgLink: "/public/img/noticias/noticia_61.jpeg",
  date: "10/02/2026",
  imgPosition: "center center",
});

let a62 = new Articulo({
  title: "ÁLBUM EDICIÓN ESPECIAL OLYMPIA",
  imgLink: "/public/img/noticias/noticia_62.jpeg",
  text: "Ya está disponible el álbum oficial de cromos del CFF Olympia edición 2025-2026, con jugadoras, equipos y staff del club. Esta colección oficial incluye todos los equipos y todos los cromos necesarios para completarla, con un diseño exclusivo Olympia. Reserva ya el tuyo por 27 €.",
  date: "11/02/2026",
  imgPosition: "center center",
});

let a63 = new Articulo({
  title: "EL SENIOR B, CAMPEÓN DE TERCERA FEDERACIÓN FEMENINA",
  imgLink: "/public/img/noticias/noticia_63.jpeg",
  text: "El Senior B ha sido campeón de la categoría Tercera Federación Femenina. Enhorabuena a todas las jugadoras y al cuerpo técnico por este gran logro.",
  date: "30/04/2026",
  imgPosition: "center center",
});

let a64 = new Articulo({
  title: "LUCÍA NÚÑEZ, MÁXIMA GOLEADORA DE LA CATEGORÍA",
  imgLink: "/public/img/noticias/noticia_64.jpeg",
  text: "Lucía Núñez ha sido la máxima goleadora de la categoría, firmando una temporada destacada por su capacidad anotadora.",
  date: "30/04/2026",
  imgPosition: "center top",
});

let a65 = new Articulo({
  title: "CELEBRACIÓN DEL TÍTULO",
  imgLink: "/public/img/noticias/noticia_65.mp4",
  text: "Celebración del Senior B tras proclamarse campeonas.",
  date: "30/04/2026",
  imgPosition: "center top",
});




NOTICIAS.push(
  a65,
  a64,
  a63,
  a62,
  a61,
  a60,
  a59,
  a58,
  a57,
  a56,
  a55,
  a54,
  a53,
  a52,
  a51,
  a50,
  a49,
  a48,
  a47,
  a46,
  a45,
  a44,
  a43,
  a42,
  a41,
  a40,
  a39,
  a38,
  a37,
  a36,
  a35,
  a34,
  a33,
  a32,
  a31,
  a30,
  a29,
  a28,
  a27,
  a26,
  a25,
  a24,
  a23,
  a22,
  a21,
  a20,
  a19,
  a18,
  a17,
  a16,
  a15,
  a14,
  a13,
  a12,
  a11,
  a10,
  a9,
  a8,
  a7,
  a6,
  a5,
  a4,
  a3,
  a2,
  a1,
);

export default NOTICIAS;
