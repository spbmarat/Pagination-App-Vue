// eslint-disable-next-line no-unused-vars
export default class ApiService {
  baseUrl = "https://jsonplaceholder.typicode.com/";
  perPage = 9;
  pageNumtoRender = 1;


  constructor() {
    this.albums = [];
    this.photos = [];
  }



  getAlbums() {
    if (this.albums.length) {
      return new Promise((resolve) => {
        resolve(this.albums);
      });
    }
    else {
      /* fetch(this.baseUrl + "albums")
       .then(response => response.json())
       .then(albums => {
         this.albums = albums;
         return albums;
       }) */
      return fetch(this.baseUrl + "albums")
        .then((response) => {
          return response.json();
        })
        .then((albums) => {
          this.albums = albums;
          console.log(this.albums);
          console.log("Hello");
          return albums
        })
        .catch((response) => {
          console.log(response);
        });
    }
  }

  getPhotos(albumnum) {
    if (this.photos.length) {
      return new Promise((resolve) => {
        resolve(this.photos);
      });
    }
    else {
      return fetch(this.baseUrl + "albums/" + albumnum + "/photos")
        .then((response) => {
          return response.json();
        })
        .then((photos) => {
          this.photos = photos;
          console.log(this.photos);
          console.log("photos");
          return photos
        })
        .catch((response) => {
          console.log(response);
        });
    }
  }
}
