<template>
  <div class="mx-auto max-w-[1479px]">
    <h1 class="font-bold text-4xl mb-[51px] md:mb-[94px] md:text-7xl text-center">Избранное</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 lg:px-0">
      <ImageCard
        v-for="image in favoriteImages"
        :key="image.id"
        :image="image"
        @click="goToImage(image.id)"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import ImageCard from '@/components/ImageCard.vue'
import { useFavorites } from '@/composables/useFavorites'
import { useRouter } from 'vue-router'

export default {
  components: {
    ImageCard
  },
  setup() {
    const { getAllFavorites } = useFavorites()
    const favoriteImages = ref(getAllFavorites())
    const router = useRouter()

    const goToImage = (id) => {
      router.push(`/image/${id}`)
    }

    watch(
      () => router.currentRoute.value,
      () => {
        favoriteImages.value = getAllFavorites()
      }
    )

    return {
      favoriteImages,
      goToImage
    }
  }
}
</script>
