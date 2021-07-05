<template>
  <PaginationLogic objForPagination="albums" />
  <main role="main" id="pagination-app">
    <h2 class="jumbotron text-center">Albums</h2>
    <div class="container" v-cloak>
      <div class="container">
        <div @childToParent = 'elements' class="row">
          <div
            class="col-md-4"
            v-for="element in childToParent"
            v-bind:key="element.id"
          >
            <div class="card mb-4 box-shadow post-cards">
              <div class="card-body">
                <a
                  v-bind:href="
                    'https://jsonplaceholder.typicode.com/albums/' +
                    element.id +
                    '/photos'
                  "
                >
                  <h5 class="capitalize">{{ element.title }}</h5></a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron text-center">
          <!--       <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            v-for="pageNumber in pages"
            v-bind:key="pageNumber.id"
            @click="page = pageNumber"
          >
            {{ pageNumber }}
          </button> -->
        </div>
      </div>
    </div>
  </main>
  <AlbumComponent albumNum="3" />
</template>

<script>
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import PaginationLogic from "./components/PaginationLogicComponent.vue";
import AlbumComponent from "./components/AlbumComponent.vue";

export default {
  name: "App",
  components: {
    PaginationLogic,
    AlbumComponent,
  },
  methods: {
    toConsole() {
      console.log("this.o");
    },
  },
};
</script>
