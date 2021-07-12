 // eslint-disable-next-line no-unused-vars
 class ApiService {
  baseUrl =  "https://jsonplaceholder.typicode.com/";

  albums = [];

  constructor() {}

  getAlbums() {
    if (this.albums.length) {
      return new Promise((resolve) => {
        resolve(this.albums);
      });
    }
    else {
      return fetch(this.baseUrl + "albums")
        .then(res => res.json())
        .then(albums => {
          this.albums = albums;
          return albums;
        })
    }    
  }
}
