// eslint-disable-next-line no-unused-vars
export default class ApiService {

  constructor(url) {
    this.url = url;
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
      return fetch(this.url + "albums")
        .then((response) => {
          return response.json();
        })
        .then((albums) => {
          this.albums = albums;
          return albums
        })
        .catch((response) => {    // TODO: add global error handling 
          console.log(response);
        });
    }
  }

  getPhotos(albumNum, skipCache) {
    if (skipCache) {
      this.photos = [];
    }
    if (this.photos.length) {
      return new Promise((resolve) => {
        resolve(this.photos);
      });
    }
    else {
      return fetch(this.url + "albums/" + albumNum + "/photos")
        .then((response) => {
          return response.json();
        })
        .then((photos) => {
          this.photos = photos;
          return photos
        })
        .catch((response) => {    // TODO: add global error handling 
          console.log(response);
        });
    }
  }
}
