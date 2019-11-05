const mockData = {
  movies: [
    {
      id: 1,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      genre: `fantasy`,
      runTime: `1:22:13`,
      released: 2010,
      director: `Wes Andreson`,
      starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      rating: 8.9,
      ratingsCount: 240,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      reviews: [{
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.8,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.0,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.1,
        author: `Kris Isaac`,
      }],
      likeThis: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        posterImage: `img/bohemian-rhapsody.jpg`,
        genre: `drama`,
        runTime: `2:22:13`,
        released: 2014,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 4,
        title: `Aviator`,
        posterImage: `img/aviator.jpg`,
        genre: `drama`,
        runTime: `1:22:43`,
        released: 2009,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }],
    },
    {
      id: 2,
      title: `Bohemian Rhapsody`,
      posterImage: `img/bohemian-rhapsody.jpg`,
      genre: `drama`,
      runTime: `2:22:13`,
      released: 2014,
      director: `Wes Andreson`,
      starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      rating: 7.9,
      ratingsCount: 200,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      reviews: [{
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.8,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.0,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.1,
        author: `Kris Isaac`,
      }],
      likeThis: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        posterImage: `img/bohemian-rhapsody.jpg`,
        genre: `drama`,
        runTime: `2:22:13`,
        released: 2014,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 4,
        title: `Aviator`,
        posterImage: `img/aviator.jpg`,
        genre: `drama`,
        runTime: `1:22:43`,
        released: 2009,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }
      ],
    },
    {
      id: 3,
      title: `Macbeth`,
      posterImage: `img/macbeth.jpg`,
      genre: `drama`,
      runTime: `3:22:13`,
      released: 2015,
      director: `Wes Andreson`,
      starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      rating: 5.9,
      ratingsCount: 40,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      reviews: [{
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.8,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.0,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.1,
        author: `Kris Isaac`,
      }],
      likeThis: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        posterImage: `img/bohemian-rhapsody.jpg`,
        genre: `drama`,
        runTime: `2:22:13`,
        released: 2014,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 4,
        title: `Aviator`,
        posterImage: `img/aviator.jpg`,
        genre: `drama`,
        runTime: `1:22:43`,
        released: 2009,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }
      ],
    },
    {
      id: 4,
      title: `Aviator`,
      posterImage: `img/aviator.jpg`,
      genre: `drama`,
      runTime: `1:22:43`,
      released: 2009,
      director: `Wes Andreson`,
      starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      rating: 9.9,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      reviews: [{
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.8,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.0,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.1,
        author: `Kris Isaac`,
      }],
      likeThis: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        posterImage: `img/bohemian-rhapsody.jpg`,
        genre: `drama`,
        runTime: `2:22:13`,
        released: 2014,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 4,
        title: `Aviator`,
        posterImage: `img/aviator.jpg`,
        genre: `drama`,
        runTime: `1:22:43`,
        released: 2009,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      }
      ],
    },
    {
      id: 5,
      title: `The Grand Budapest Hotel`,
      posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
      genre: `comedy`,
      runTime: `2:42:13`,
      released: 2000,
      director: `Wes Andreson`,
      starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      rating: 9.9,
      ratingsCount: 210,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      reviews: [{
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.8,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.0,
        author: `Kris Isaac`,
      }, {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in
                  years.`,
        date: `December 24, 2016`,
        rating: 8.1,
        author: `Kris Isaac`,
      }],
      likeThis: [{
        id: 2,
        title: `Bohemian Rhapsody`,
        posterImage: `img/bohemian-rhapsody.jpg`,
        genre: `drama`,
        runTime: `2:22:13`,
        released: 2014,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      },
      {
        id: 4,
        title: `Aviator`,
        posterImage: `img/aviator.jpg`,
        genre: `drama`,
        runTime: `1:22:43`,
        released: 2009,
        director: `Wes Andreson`,
        starrings: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
        src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      }
      ],
    },
  ]
};

export default mockData;
