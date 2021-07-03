<template>
  <main role="main" id="album-viewer">
    <section >
      <div class="container">
        <h3 class="jumbotron-heading">Album photos with Vuejs</h3>
      </div>
    </section>

    <h2 class="jumbotron text-center">Albums</h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="album in displayedAlbums" v-bind:key="album.id">
            <div class="card mb-4 box-shadow post-cards">
              <div class="card-body">
                
                <a v-bind:href="'https://jsonplaceholder.typicode.com/albums/' + album.id + '/photos'"> 
                <h5 class="capitalize">{{ album.title }}</h5></a>
              </div>
            </div>
          </div>
        </div>

         <div class="jumbotron text-center">
            <button type="button" class=" btn btn-sm btn-outline-secondary" v-for="pageNumber in pages" v-bind:key ="pageNumber.id"  @click="page = pageNumber"> {{pageNumber}} </button>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      albums: [],
      baseUrl: "https://jsonplaceholder.typicode.com/",
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
  methods: {
    getAlbums() {
      fetch(this.baseUrl + "albums")
        .then((response) => {
          return response.json();
        })
        .then((albums) => {
          this.albums = albums;
          console.log(this.albums);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.albums.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(albums) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return albums.slice(from, to);
    },
  },

   watch: {
    albums() {
      this.setPages();
    },
  },
  computed: {
    displayedAlbums() {
      return this.paginate(this.albums);
    },
  }, 
  mounted() {
    this.getAlbums();
  },
};
</script>