<template>
  <div class="jumbotron text-center" :on="setPages()">
    <button
      type="button"
      v-for="pageNumber in pages"
      v-bind:key="pageNumber.id"
      class="btn btn-sm"
      :class="[isPressed(pageNumber) ? 'pressed' : 'btn-outline-secondary']"
      @click="emitNewActivePageFromPagination(pageNumber)"
    >
      {{ pageNumber }}
    </button>
  </div>
</template>
<script>
import { PER_PAGE } from "../constants";

export default {
  name: "PaginationComponent",
  props: {
    activePage: Number,
    lengthOfListForPagination: Number,
  },
  emits: ["newActivePageFromPagination"],
  data() {
    return {
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.lengthOfListForPagination / PER_PAGE);
      this.pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);
    },
    emitNewActivePageFromPagination(pageNumber) {
      this.$emit("newActivePageFromPagination", pageNumber);
    },
    isPressed(index) {
      return index === this.activePage;
    },
  },
};
</script>