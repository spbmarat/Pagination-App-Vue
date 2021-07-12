<template>
  <div class="jumbotron text-center">
    <button
      type="button"
      v-for="pageNumber in pages"
      v-bind:key="pageNumber.id"
      :class="getButtonClassAndActiveButton(pageNumber)"
      @click="
        this.$emit('childToParentPageNumber', pageNumber);
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
    perPage: Number,
    listOfAllAlbums: Object,
  },
  emits: ["childToParentPageNumber"],
  data() {
    return {
      isPressed: [],
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
    getButtonClassAndActiveButton(index) {
      if (index == this.pageNumToRender) {
        return "btn btn-sm pressed";
      } else {
        return "btn btn-sm btn-outline-secondary";
      }
    },
  },
  watch: {
    listOfAllAlbums() {
      this.setPages();
    },
  },
};
</script>