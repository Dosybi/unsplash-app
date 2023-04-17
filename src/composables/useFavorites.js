import { ref, watch } from 'vue'

const FAVORITES_KEY = 'favorites'

const favorites = ref(JSON.parse(localStorage.getItem(FAVORITES_KEY)) || {})

watch(favorites, (newFavorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
})

export const useFavorites = () => {
  const addToFavorites = (image) => {
    favorites.value[image.id] = image
  }

  const removeFromFavorites = (id) => {
    delete favorites.value[id]
  }

  const isFavorite = (id) => {
    return !!favorites.value[id]
  }

  const getAllFavorites = () => {
    return Object.values(favorites.value)
  }

  return {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    getAllFavorites
  }
}
