<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">
      List of albums {{ this.pageNumToRender }} page
    </h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="album in this.listOfAllAlbums.slice(this.perPage*(this.pageNumToRender - 1), this.pageNumToRender * this.perPage)"
            v-bind:key="album.id"
          >
            <div class="card mb-4 box-shadow post-cards">
    <!--           <img
                v-bind:src="photo.thumbnailUrl"
                class="card-img-top"
                alt="Card image cap"
              /> -->
              <div class="card-body">
                 <h5 class="capitalize">{{ album.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
   props: {
    pageNumToRender: Number,
    listOfAllAlbums: Object,
  },
  data() {
    return {
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  /* methods: {
    getPhotos() {
          fetch(this.baseUrl + "albums/" + this.albumNum + "/photos")
        .then((response) => {
          return response.json();
        })
        .then((photos) => {
          this.photos = photos;
          console.log(this.photos);
        })
        .catch((response) => {
          console.log(response);
        }); 
    },
    setPages() {
      let numberOfPages = Math.ceil(this.photos.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(photos) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return photos.slice(from, to);
    },
  },

  watch: {
    photos() {
      this.setPages();
    },
  },
  computed: {
    displayedPhotos() {
      return this.paginate(this.photos);
    },
  },
  mounted() {
    this.getPhotos();
  }, */
};
</script>