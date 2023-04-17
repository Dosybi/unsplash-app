<template>
  <div class="w-full square-wrapper rounded-lg cursor-pointer" @click="$emit('click')">
    <img
      class="w-full h-full object-cover"
      :src="image.urls.small"
      :alt="image.description || image.alt_description"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToFavorites() {
      console.log(`Add ${this.image.id} to favorites`)
    }
  }
}
</script>

<style>
.square-wrapper {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.square-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
