<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">Album {{ this.albumNum }} photos</h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="photo in slicedList"
            v-bind:key="photo.id"
          >
            <div class="card mb-4 box-shadow post-cards">
              <router-link
                :to="{
                  name: 'Photo',
                  params: { photoNum: photo.id, photoUrl: photo.url },
                  props: { albumNum: this.albumNum, photoNum: photo.id },
                }"
                >Photo{{ photo.id }}
                <img
                  :src="photo.thumbnailUrl"
                  class="card-img-top"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="capitalize">{{ photo.title }}</h5>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationComponent
      :activePage="this.pageNum"
      :lengthOfListForPagination="this.photos.length"
      @newActivePageFromPagination="setPageNum($event)"
    />
  </main>
</template>

<script>
import PaginationComponent from "../components/PaginationComponent.vue";
import { PER_PAGE } from "../constants";

export default {
  name: "Album",
  components: {
    PaginationComponent,
  },
  props: {
    albumNum: String,
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
  computed: {
    slicedList() {
      return this.photos.slice(
        PER_PAGE * (this.pageNum - 1),
        this.pageNum * PER_PAGE
      );
    },
  },
  // TODO: move photo logic to PhotoComponent
  mounted() {
    this.$apiService
      .getPhotos(this.albumNum, true)
      .then((photos) => (this.photos = photos));
  },
};
</script>