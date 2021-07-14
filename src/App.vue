<template>
  <router-view />
</template>

<script>
import "./assets/style.css";
import "./assets/bootstrap.min.css";

export default {
  name: "App",
  components: {
  },
   emits: ["childToParentAlbumNumber"],
  data() {
    return {
      pageNum: 1,
      albumNum: 0,
      albums: [],
    };
  },
  methods: {
    setPageNum(pagenum) {
      this.pageNum = pagenum;
      this.$emit('childToMainPageNumber', pagenum);
    },
    setAlbumNum(pagenum) {
      this.albumNum = pagenum;
    },
  },
  mounted() {
    this.$apiService.getAlbums().then((albums) => (this.albums = albums));
  },
};
</script>
