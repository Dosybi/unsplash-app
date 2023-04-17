import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: '1KWfdF6f9DnAE5Z9LVzlbyYrl89c1j9pZ9LBLa7GNfo'
})

export const fetchRandomImages = async (count = 9) => {
  try {
    const response = await unsplash.photos.getRandom({ count })
    return response.response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const searchImages = async (query, page = 1, perPage = 10) => {
  if (!query) {
    throw new Error('Search query is required')
  }

  try {
    const response = await unsplash.search.getPhotos({ query, page, perPage })
    return response.response
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getImageDetails = async (id) => {
  if (!id) {
    throw new Error('Image ID is required')
  }
  const response = await unsplash.photos.get({ photoId: id })
  return response.response
}
