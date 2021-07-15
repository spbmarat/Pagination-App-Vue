<template>
  <div class="text-center">
    <h5>Photo {{ this.photoNum }}</h5>
    <img :src="this.photoUrl" class="img-thumbnail" alt="Photo" />
  </div>
</template>

<script>
export default {
  props: {
    photoNum: String,
    photoUrl: String,
  },
};
</script>