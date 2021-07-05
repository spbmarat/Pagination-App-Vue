<template>
  <div class="jumbotron text-center">
    <button
      type="button"
      class="btn btn-sm btn-outline-secondary"
      v-for="pageNumber in pages"
      v-bind:key="pageNumber.id"
      @click="
        pageNum = pageNumber;
        this.$emit('childToParent', pageNum);
      "
    >
      {{ pageNumber }}
    </button>
  </div>
</template>
<script>
export default {
  name: "PaginationComponent",
  props: {
    pageNumToRender: Number,
    listOfAllAlbums: Object,
  },
  emits: ["childToParent"],
  data() {
    return {
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.listOfAllAlbums.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    returnListOfAlbumsForPage() {
      let perPage = this.perPage;
      let from = this.pageNumToRender * (perPage - 1);
      let to = this.pageNumToRender * perPage;
      return this.listOfAllAlbums.slice(from, to);
    },
  },
  watch: {
    listOfAllAlbums() {
      this.setPages();
    },
  },
};
</script>