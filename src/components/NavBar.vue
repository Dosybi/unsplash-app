<template>
  <nav class="mb-12">
    <div class="mx-auto items-center bg-black pt-4 pb-4">
      <div class="mx-auto max-w-[1479px] flex justify-between px-4 lg:px-0">
        <div>
          <router-link to="/">
            <img src="../assets/logo.svg" alt="Art Gallery San-Francisco" />
          </router-link>
        </div>
        <div class="flex gap-5 md:gap-[38px] items-center">
          <div v-if="route.path !== '/'">
            <form @submit.prevent="search" class="w-fit">
              <div class="flex items-center max-w-[866px] mx-auto flex-row-reverse md:flex-row">
                <img src="../assets//search-white.svg" class="" />
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Поиск"
                  class="md:placeholder:text-white placeholder:text-xl text-white text-xl bg-black ml-3 placeholder:text-black w-[60px]"
                />
              </div>
            </form>
          </div>
          <div class="favorites">
            <router-link to="/favorites" class="text-gray-700">
              <div class="flex items-center">
                <img src="../assets/favorite.svg" />
                <div class="hidden lg:block ml-2.5 text-white text-lg">Избранное</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="route.path === '/'"
      class="bg-navbar flex justify-center items-center py-20 px-5 bg-cover w-full"
    >
      <form @submit.prevent="search" class="flex items-center w-full">
        <div class="relative w-full max-w-[866px] mx-auto">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск"
            class="h-[70px] pt-5 pb-[22px] px-[26px] placeholder:text-black w-full placeholder:text-2xl text-black text-2xl"
          />
          <img
            src="../assets//search.svg"
            class="absolute right-[26px] top-[24px] lg:right-[34px]"
          />
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const searchQuery = ref('')
    const router = useRouter()
    const route = useRoute()

    const search = () => {
      if (searchQuery.value) {
        router.push(`/search/${searchQuery.value}`)
      }
    }

    return {
      searchQuery,
      search,
      route
    }
  }
}
</script>
