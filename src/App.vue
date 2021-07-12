<template>
  <router-view></router-view>
  <OnePageOfAlbumsListComponent
    v-if="!albumNum"
    :pageNumToRender="this.pageNum"
    :perPage="this.perPage"
    :listOfAllAlbums="albums"
    @childToParentAlbumNumber="setAlbumNum($event)"
  /> 
  <p>HHHHHHHHHHH {{ albumNum }}</p>
<!--   <AlbumComponent v-if="albumNum" :albumNum="(this.albumNum = albumNum)" />
 -->  
 <PhotoComponent v-if="albumNum" :albumNum="(this.albumNum = albumNum)" />
 <PaginationComponent
    v-if="!albumNum"
    :pageNumToRender="this.pageNum"
    :perPage="this.perPage"
    :listOfAllAlbums="albums"
    @childToParentPageNumber="setPageNum($event)"
  />
</template>

<script>
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import OnePageOfAlbumsListComponent from "./components/OnePageOfAlbumsListComponent.vue";
 import PaginationComponent from "./components/PaginationComponent.vue";
import ApiService from "./services/ApiService.js" 
 /* import AlbumComponent from "./components/AlbumComponent.vue";
 */
export default {
  name: "App",
  components: {
     OnePageOfAlbumsListComponent,
    PaginationComponent,
    /* AlbumComponent, */
  },
  data() {
    return {
      pageNum: 1,
      albumNum: 0,
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
    setAlbumNum(pagenum) {
      this.albumNum = pagenum;
    },
  },
  mounted() {
    ApiService.getAlbums();
  },
};
</script>
