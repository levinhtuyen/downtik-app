<template>
  <header class="bg-white dark:bg-gray-900">
    <nav
      class="container px-4 mx-auto p-1 grid grid-cols-2 gap-2 sm:grid-cols-2 lg:justify-between"
    >
      <div class="flex items-center justify-between">
        <a
          class="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-2xl"
          href="/"
        >
          <div class="flex items-center content-center justify-center gap-3">
            <img
              format="webp"
              src="@/assets/downtik.svg"
              width="44"
              height="44"
              alt="Downloading a video from Musically using the MusicallyDown tool"
            />
          </div>
        </a>
      </div>
      <div class="flex justify-end">
        <el-popover placement="bottom" :width="350" trigger="hover">
          <template #reference>
            <div class="flex items-center gap-1">
              {{ $t('langauge') }}:
              <img width="50" height="auto" :src="countryChoose.image" alt="" />
            </div>
          </template>
          <template #default>
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-2 cursor-pointer">
              <div
                v-for="countrie in countries"
                :key="countrie"
                @click="changeLanguage(countrie)"
              >
                <div class="flex items-center gap-2">
                  <img width="40" height="auto" :src="countrie.image" alt="" />
                  <span class="width-25">{{ countrie.name }}</span>
                </div>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import listCountries from '@/util/countries.json'

const { locale } = useI18n()
interface ICountry {
  name: string
  emoji: string
  lang: string
  unicode: string
  image: string
}
let countries = reactive(listCountries)
const countryChoose = ref({
  name: 'English',
  code: 'GB',
  lang: 'en',
  emoji: '🇬🇧',
  unicode: 'U+1F1EC U+1F1E7',
  image:
    'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/GB.svg'
})

const changeLanguage = (item: ICountry) => {
  if (!item) {
    return
  }
  locale.value = item.lang
  countryChoose.value = item
}
</script>
<style lang="scss" scoped>
#pagetop {
  z-index: 1000000;
  img {
    border-radius: 50%;
    background-color: #ffffff;
  }
}
/* .width-25 {
  width: 25px;
} */
</style>
