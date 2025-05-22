import {Injectable} from '@angular/core';
import {PostModel} from '../../core/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostRepository {
  localKey: string = "post-list";
  response: any = {
    "status": "ok",
    "totalResults": 10,
    "articles": [{
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC News",
      "title": "La frenética semana de Trump en negociaciones de paz da una pista de lo que realmente quiere",
      "description": "Después de siete días de intensos intercambios diplomáticos, tenemos una idea más clara de la ideología global del presidente de Estados Unidos y de los límites de su arte de la acuerdo.",
      "url": "https://www.bbc.co.uk/news/articles/clyv789ejgxo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/abf6/live/a15c5ed0-323b-11f0-8519-3b5a01ebe413.png",
      "publishedAt": "2025-05-16T23:37:16.8969389Z",
      "content": "La centralidad de Trump en la política exterior estadounidense también se ha hecho evidente esta semana. Esto es más que una simple obviedad. Se puso de manifiesto la falta de implicación de otras partes del gobierno estadounidense que… [+1043 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC News",
      "title": "Moodys rebaja la calificación crediticia de EE. UU. por el aumento de la deuda",
      "description": "Moodys afirmó que las sucesivas administraciones estadounidenses no habían logrado revertir los crecientes déficits y los costos de los intereses.",
      "url": "https://www.bbc.co.uk/news/articles/c4ge0xk4ld1o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/dee8/live/c6c0ac30-329f-11f0-b797-3d84820fb826.jpg",
      "publishedAt": "2025-05-16T22:22:22.7231597Z",
      "content": "EE. UU. ha perdido su última calificación crediticia triple A otorgada por una importante agencia de calificación crediticia tras ser rebajada por Moodys, que alegó el aumento de la deuda federal en los últimos años. década.\r\nAl rebajar la calificación de EE. UU. a 'Aa1',… [+442 caracteres]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC News",
      "title": "De Aberdeen a Penzance: Fin de la ruta ferroviaria directa más larga del Reino Unido",
      "description": "Los pasajeros disfrutan del viaje de 1240 kilómetros de Aberdeen a Penzance por última vez. tiempo.",
      "url": "https://www.bbc.co.uk/news/articles/c753zzvd6gno",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/8ae2/live/950e8e60-3235-11f0-8947-7d6241f9fce9.jpg",
      "publishedAt": "2025-05-16T22:07:28.412279Z",
      "content": "Aimee, que vive en Derby, ama los trenes desde niña.\r\n\"Cuando era pequeña, mi abuelo vivía en Wigginton, cerca de Tamworth. Soy uno de 21 primos y solíamos reunirnos y, obviamente, cuando... [+465 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC News",
      "title": "Sleep Token: Even in Arcadia es el primer álbum número uno de la banda en el Reino Unido",
      "description": "El misterioso grupo de rock alcanza el primer puesto con su último álbum, Even in Arcadia Arcadia.",
      "url": "https://www.bbc.co.uk/news/articles/cgmjympr1ejo",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/85a1/live/f04fb8f0-327e-11f0-9b62-af0dc41482a6.jpg",
      "publishedAt": "2025-05-16T19:52:18.9734143Z",
      "content": "Tras su lanzamiento de 2023, Take Me to Eden, que alcanzó el número tres, la banda ahora cuenta con 9,4 millones de oyentes mensuales en Spotify.\r\nLa plataforma de streaming anunció a principios de esta semana que Even in Arcadia era… [+750 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC Noticias",
      "title": "Nombrados los bomberos muertos en el incendio del parque empresarial",
      "description": "Los bomberos que murieron en el incendio en Bicester Motion fueron identificados como Jennie Logan, de 30 años, y Martyn Sadler, de 38.",
      "url": "https://www.bbc.co.uk/news/articles/c1e6zx870p3o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/4437/live/e2ce0e20-3251-11f0-8f4d-8b01a6224c0f.jpg",
      "publishedAt": "2025-05-16T19:52:15.0525151Z",
      "content": "La policía ha iniciado una investigación por una muerte inexplicable y actualmente no la está tramitando como un asunto penal.\r\nEl subjefe de policía de Thames Valley, Tim Metcalfe, declaró: \"Esto es… [+515 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC Noticias"},
      "author": "BBC News",
      "title": "Estatua de Melania Trump desaparecida de su ciudad natal en Eslovenia",
      "description": "La representación en bronce de la Primera Dama de EE. UU. reemplaza una versión de madera anterior, que fue incendiada en 2019.",
      "url": "https://www.bbc.co.uk/news/articles/cvg7egyrk40o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/27e3/live/d98da0c0-3277-11f0-9b62-af0dc41482a6.jpg",
      "publishedAt": "2025-05-16T18:37:25.8949797Z",
      "content": "La simetría probablemente atraería al extravagante director estadounidense Wes Anderson, quien a menudo presenta atracos extraños en sus películas. Pero incluso en su catálogo anterior, ha habido Nunca había habido nada parecido a… [+901 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC Noticias",
      "title": "Final de Eurovisión 2025: Nos reunimos con los cinco favoritos",
      "description": "Conoce a los cinco artistas que apuntan a llevarse el trofeo de Eurovisión, a medida que se acerca la final del sábado.",
      "url": "https://www.bbc.co.uk/news/articles/czelprjn6z5o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/dcf6/live/a3895950-322d-11f0-8519-3b5a01ebe413.jpg",
      "publishedAt": "2025-05-16T23:37:21.2708506Z",
      "content": "<ul><li>Probabilidad de ganar: 39%\r\n</li><li>Idioma: Sueco\r\n</li><li>Género: Epadunk\r\n</li><li>Reproducciones en Spotify: 43,9 millones\r\n</li></ul>\r\nKAJ es el primer artista finlandés en representar a Suecia en Eurovisión, … [+1675 caracteres]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC News",
      "title": "Kerri Pegg: Directora de prisión que tuvo una relación con un recluso encarcelada",
      "description": "Kerri Pegg, de 42 años, era vista como una \"estrella en ascenso\", pero en su juicio se escuchó que \"no actuó según las reglas reglas\".",
      "url": "https://www.bbc.co.uk/news/articles/c991y2871r1o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/e9e8/live/cfe0e860-326e-11f0-96c3-cf669419a2b0.jpg",
      "publishedAt": "2025-05-16T16:07:25.0834499Z",
      "content": "El jurado escuchó que Pegg era conocido por pasar mucho tiempo en su oficina con el recluso y, en octubre de 2018, solicitó su libertad condicional.\r\nAunque este tipo de solicitudes son habituales allí… [+858 chars]"
    }, {
      "source": {"id": "bbc-news", "name": "BBC News"},
      "author": "BBC Noticias",
      "title": "Frank Skinner finalmente se casa tras cuatro rechazos de propuestas de matrimonio",
      "description": "El comediante anunció en su podcast que se casó con Cath Mason tras 24 años juntos.",
      "url": "https://www.bbc.co.uk/news/articles/c0mr1yewlr0o",
      "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ae1e/live/443528d0-3237-11f0-bbd7-d7ac0a5cd218.jpg",
      "publishedAt": "2025-05-16T13:07:24.254317Z",
      "content": "Skinner declaró previamente durante una entrevista con The Sun, externa en 2024, que le había pedido a Mason que se casara con él cuatro veces, pero ella siempre se había negado.\r\n\"Quizás sea alguna terrible razón personal que… [+963 chars]"
    }]
  }
  postList: any = this.response.articles;

  storePost(post: PostModel[]) {
    localStorage.setItem(this.localKey, JSON.stringify(post));
  }

  chargeInitialization(): void {
    this.storePost(this.postList);
  }

  getPost(): PostModel[] {
    const data = localStorage.getItem(this.localKey);
    return data ? JSON.parse(data) : [];
  }
}
