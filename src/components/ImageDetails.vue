<template>
  <div v-if="image">
    <div class="flex items-center w-full mx-auto max-w-[1479px] mb-8 md:mb-[46px]">
      <img
        :src="image.user.profile_image.small"
        :alt="image.user.name"
        class="w-12 border border-solid border-white rounded-lg md:w-[55px] mr-2.5"
      />
      <div>
        <div class="text-black text-lg md:text-3xl md:text-white">{{ image.user.name }}</div>
        <div class="text-gray-500 md:text-3xl md:text-white">@ {{ image.user.username }}</div>
      </div>
      <div class="ml-auto flex gap-4">
        <div
          class="w-[41px] border rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)] py-[11px] md:py-[13px] md:px-3 px-2.5 flex justify-center items-center cursor-pointer h-[41px] md:w-[49px] md:h-[49px]"
          @click="toggleFavorite"
        >
          <img src="../assets/favorites-black.svg" alt="Добавить в избранное" />
        </div>
        <div
          class="cursor-pointer w-[41px] border rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.25)] py-[11px] px-2.5 flex justify-center items-center border-[#FFF200] bg-[#FFF200] md:w-full"
        >
          <img src="../assets/download.svg" alt="Скачать" class="mr-0 md:mr-4" />
          <div class="hidden md:block text-xl">Download</div>
        </div>
      </div>
    </div>
    <img :src="image.urls.regular" :alt="image.alt_description" class="w-full h-auto" />
  </div>
  <div v-else>
    <p>Loading image details...</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useFavorites } from '@/composables/useFavorites'

export default {
  props: {
    image: {
      type: Object,
      required: true,
      default: null
    }
  },

  setup(props) {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
    const isFavoriteImage = computed(() => props.image && isFavorite(props.image.id))

    const toggleFavorite = () => {
      if (isFavoriteImage.value) {
        removeFromFavorites(props.image.id)
      } else {
        addToFavorites(props.image)
      }
      isFavoriteImage.value = !isFavoriteImage.value
    }

    return {
      isFavorite: isFavoriteImage,
      toggleFavorite
    }
  }
}
</script>

<style>
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
