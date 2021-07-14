<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">Album {{ albumNum }} photos</h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="photo in photos.slice(
              this.$apiService.perPage * (this.pageNum - 1),
              this.pageNum * this.$apiService.perPage
            )"
            v-bind:key="photo.id"
          >
            <div class="card mb-4 box-shadow post-cards">
              <router-link :to="'/album' + albumNum + '/photo' + photo.id"
                >Open Photo{{ photo.id }}</router-link
              >
              <router-view></router-view>
              <a v-bind:href="photo.url">
                <img
                  v-bind:src="photo.thumbnailUrl"
                  class="card-img-top"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="capitalize">{{ photo.title }}</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :pageNumToRender="this.pageNum"
      :listForPagination="this.photos"
      @childToParentPageNumber="setPageNum($event)"
    />
  </main>
</template>

<script>
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
    name: "Album",
    components: {
    PaginationComponent,
  },
    props: {
    albumNum: Number,
  },
  data() {
    return {
      photos: [],
      pageNum: 1,
    };
  },
  methods: {
    setPageNum(pagenum) {
      this.pageNum = pagenum;
    },
  },
  mounted() {
        this.$apiService.getPhotos(this.albumNum).then((photos) => (this.photos = photos));
        console.log(this.photos)
  },
};
</script>