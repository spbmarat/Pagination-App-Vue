<template>
  <OnePageOfAlbumsListComponent
    :pageNumToRender="this.pageNum"
    :perPage="this.perPage"
    :listOfAllAlbums="albums"
  />
  <PaginationComponent
    :pageNumToRender="this.pageNum"
    :perPage="this.perPage"
    :listOfAllAlbums="albums"
    @childToParent="setPageNum($event)"
  />
  <AlbumComponent albumNum="3" />
</template>

<script>
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import OnePageOfAlbumsListComponent from "./components/OnePageOfAlbumsListComponent.vue";
import PaginationComponent from "./components/PaginationComponent.vue";
import AlbumComponent from "./components/AlbumComponent.vue";

export default {
  name: "App",
  components: {
    OnePageOfAlbumsListComponent,
    PaginationComponent,
    AlbumComponent,
  },
  data() {
    return {
      pageNum: 1,
      albums: [],
      perPage: 9,
      baseUrl: "https://jsonplaceholder.typicode.com/",
    };
  },
  methods: {
    getListOfAlbums() {
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
    setPageNum(pagenum) {
      this.pageNum = pagenum;
    },
  },
  mounted() {
    this.getListOfAlbums();
    this.setAlbumsFromComponent();
  },
};
</script>
