<script>
export default {
  name: "PaginationLogic",
  props: ["objForPagination"],
  emits: ['childToParent'],
  data() {
    return {
      elements: [],
      baseUrl: "https://jsonplaceholder.typicode.com/",
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    getElementsList(objForPagination) {
      fetch(this.baseUrl + objForPagination)
        .then((response) => {
          return response.json();
        })
        .then((elements) => {
          this.elements = elements;
          console.log(this.elements);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    setPages() {
      let numberOfPages = Math.ceil(this.elements.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(elements) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return elements.slice(from, to);
    },
  },

  watch: {
    elements() {
      this.setPages();
    },
  },
 
    displayedElements() {
      this.$emit("childToParent", this.paginate(this.elements));
    
  },
  mounted() {
    this.getElementsList(this.objForPagination);
  },
};
</script>