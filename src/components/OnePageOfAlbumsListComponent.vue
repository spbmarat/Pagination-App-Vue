
<template>
  <main role="main" id="album-viewer">
    <h2 class="jumbotron text-center">
      List of albums, page {{ this.pageNumToRender }}
    </h2>
    <div class="container" v-cloak>
      <div class="container">
        <div class="row">
          <div
            class="col-md-4"
            v-for="album in this.listOfAllAlbums.slice(
              this.perPage * (this.pageNumToRender - 1),
              this.pageNumToRender * this.perPage
            )"
            v-bind:key="album.id"
          >
            <router-link :to="'/album/'+ album.id">Open Album {{album.id}}</router-link>
           <!--  <a :href="'https://jsonplaceholder.typicode.com/albums/' +album.id + '/photos' "> -->
            <!-- <button  type="button" class = "btn btn-sm btn-outline-secondary"
            @click="this.$emit('childToParentAlbumNumber', album.id)"> -->
              <div class="card mb-4 box-shadow post-cards">
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
  </main>
</template>

<script>
export default {
  props: {
    pageNumToRender: Number,
    perPage: Number,
    listOfAllAlbums: Object,
  },
  emits: ["childToParentAlbumNumber"],
  data() {
    return {};
  },
};
</script>