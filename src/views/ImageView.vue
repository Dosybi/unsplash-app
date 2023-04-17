<template>
  <div class="max-w-[1479px] mx-auto px-4 lg:px-0">
    <ImageDetails v-if="image" :image="image" />
    <p v-else>Loading image details...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ImageDetails from '@/components/ImageDetails.vue'
import { getImageDetails } from '@/api/unsplash.js'

export default {
  components: {
    ImageDetails
  },
  setup() {
    const route = useRoute()
    const image = ref(null)

    onMounted(async () => {
      const imageId = route.params.id
      image.value = await getImageDetails(imageId)
    })

    return {
      image
    }
  }
}
</script>
