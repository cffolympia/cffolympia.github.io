let VIDEOS = [];

class Video {
  constructor({ name = "", imgURL = "", videoURL = "" }) {
    this.name = name;
    this.imgURL = imgURL;
    this.videoURL = videoURL;
  }
}

let v1 = new Video({
  name: "Estrellas por la Igualdad",
  imgURL: "public/img/video_covers/estrellas22.jpg",
  videoURL: "https://youtu.be/2qdIcb7fZzA",
});

let v2 = new Video({
  name: "CFF Olympia vs CD Oceja",
  imgURL: "public/img/video_covers/olympia-oceja.jpg",
  videoURL: "https://www.youtube.com/watch?v=CEu7xRyJ3pM",
});

let v3 = new Video({
  name: "CFF Olympia vs CD Castellón",
  imgURL: "public/img/video_covers/olympia-castellon.jpg",
  videoURL: "https://www.youtube.com/watch?v=vOY_4-xlits",
});

let v4 = new Video({
  name: "Día del entrenador 22-23",
  imgURL: "public/img/video_covers/jornadaentrenador.jpg",
  videoURL:
    "https://www.youtube.com/live/MGvU6Cxu--8?si=pPpPg3mKOBmYNKVW&t=7988",
});

let v5 = new Video({
  name: "¡Abriendo camino, cumpliendo sueños!",
  imgURL: "public/img/video_covers/telediario.jpg",
  videoURL:
    "https://x.com/cff_olympia/status/1732156436514226562?s=46&t=FN9ri0Tbnwc3FJpmnM1Wpw",
});

let v6 = new Video({
  name: "Entrevista a Ana y Arantxa de la Chica",
  imgURL: "public/img/video_covers/entrevista-ana-arantxa.jpg",
  videoURL: "https://www.youtube.com/watch?v=kd4BevsWr_0",
});

let v7 = new Video({
  name: "RFFM Podcast 01 - Arantxa de la Chica",
  imgURL: "/public/img/video_covers/rffmpodcast.png",
  videoURL: "https://youtu.be/Yzmc53_AP5Y?si=zjXAVwWhnYZnxrGa",
});

let v8 = new Video({
  name: "RFFM Podcast 02 - Lucía Sánchez",
  imgURL: "/public/img/video_covers/rffmpodcast.png",
  videoURL: "https://youtu.be/HZK2-hsCITE?si=R5T2h73MD5Q19rZ3",
});

let v9 = new Video({
  name: "RFFM Programa 106",
  imgURL: "/public/img/video_covers/rffmpodcast.png",
  videoURL: "https://www.rffmplay.es/videos/287538-programa-106",
});

let v10 = new Video({
  name: "El Día Después (24/11/2025): Que ninguna niña se quede sin jugar",
  imgURL: "/public/img/video_covers/cover_diadespues.jpg",
  videoURL: "https://www.youtube.com/watch?v=9UIr5GS8IG4",
});

//Máximo 15-20 video para no petar la web, iremos quitando superando el umbral de los 15 yo creo
VIDEOS.push(v10);

export default VIDEOS;
