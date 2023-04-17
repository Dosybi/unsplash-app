<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold text-center my-8">Search Results for: "{{ query }}"</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ImageCard
        v-for="image in searchResults"
        :key="image.id"
        :image="image"
        @click="goToImage(image.id)"
      />
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { searchImages } from '@/api/unsplash'
import ImageCard from '@/components/ImageCard.vue'

export default {
  props: {
    query: {
      type: String,
      required: true
    }
  },
  components: {
    ImageCard
  },
  setup(props) {
    const searchResults = ref([])
    const router = useRouter()

    const fetchSearchResults = async (query) => {
      try {
        const results = await searchImages(query)
        searchResults.value = results?.results || []
      } catch (error) {
        console.error(error)
      }
    }

    watch(
      () => props.query,
      (newQuery) => {
        if (newQuery) {
          fetchSearchResults(newQuery)
        }
      },
      { immediate: true }
    )

    const goToImage = (id) => {
      router.push(`/image/${id}`)
    }

    return {
      searchResults,
      goToImage
    }
  }
}
</script>
