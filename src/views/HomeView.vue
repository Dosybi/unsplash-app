<template>
  <div class="mx-auto max-w-[1479px]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 lg:px-0">
      <ImageCard
        v-for="image in images"
        :key="image.id"
        :image="image"
        @click="goToImage(image.id)"
      />
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { fetchRandomImages } from '@/api/unsplash'
import ImageCard from '@/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  },
  setup() {
    const router = useRouter()
    const images = ref([])

    const getImages = async () => {
      try {
        images.value = await fetchRandomImages()
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(getImages)

    const goToImage = (id) => {
      router.push(`/image/${id}`)
    }

    return {
      images,
      goToImage
    }
  }
}
</script>
