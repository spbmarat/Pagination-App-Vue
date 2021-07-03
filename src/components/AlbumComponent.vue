<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">Album photos</h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="photo in displayedPhotos"
            v-bind:key="photo.id"
          >
            <div class="card mb-4 box-shadow post-cards">
              <img v-bind:src="photo.thumbnailUrl"
                class="card-img-top"
                alt="Card image cap"
              />
              <div class="card-body">
                <a
                  v-bind:href="
                    'https://jsonplaceholder.typicode.com/albums/' +
                    albumNum +
                    '/photos'
                  "
                >
                  <h5 class="capitalize">{{ photo.title }}</h5></a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron text-center">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-for="pageNumber in pages"
            v-bind:key="pageNumber.id"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
 props: ["albumNum"],
  /*   props: {
    albumNum: Number
  }, */
  data() {
    return {
      photos: [],
      baseUrl: "https://jsonplaceholder.typicode.com/",
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
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
  },
};
</script>