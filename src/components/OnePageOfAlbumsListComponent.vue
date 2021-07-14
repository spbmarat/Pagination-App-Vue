
<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">
      List of albums, page {{ this.pageNum }}
    </h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="album in albums.slice(
              this.$apiService.perPage * (this.pageNum - 1),
              this.pageNum * this.$apiService.perPage
            )"
            v-bind:key="album.id"
          >
            <div class="card mb-4 box-shadow post-cards">
              <div class="card-header">
                <router-link :to="'/album' + album.id"
                  >Open Album {{ album.id }}</router-link
                >
              </div>
              <div class="card-body">
                <h5 class="capitalize">{{ album.title }}</h5>
              </div>
            </div>
            <!-- </button> -->
            <!--   </a> -->
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :pageNumToRender="this.pageNum"
      :listForPagination="this.albums"
      @childToParentPageNumber="setPageNum($event)"
    />
  </main>
</template>

<script>
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  name: "Alc",
  components: {
    PaginationComponent,
  },
  emits: ["childToParentAlbumNumber"],
  data() {
    return {
      pageNum: 1,
      albums: [],
    };
  },
  methods: {
    setPageNum(pagenum) {
      this.pageNum = pagenum;
    },
  },
  mounted() {
    this.$apiService.getAlbums().then((albums) => (this.albums = albums));
  },
};
</script>