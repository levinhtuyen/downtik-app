<template>
  <div>
    <div id="pagetop"  class="fixed hidden cursor-pointer bottom-8 right-12"  @click="toTop">
      <img style="" src="@/assets/svg/backtotop.svg" alt="Downloading a video from Musically using the MusicallyDown tool"/>
    </div>
  </div>
</template>
<script setup lang="ts">
  const nuxtApp = useNuxtApp()
const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
  
  let mybutton = document.getElementById('pagetop')
  mybutton.style.display = 'none'
}
onMounted(() => {
  document.addEventListener('wheel', (event) => {
  let mybutton = document.getElementById('pagetop')

    var prev = event.pageY
    if (prev > 300) {
      mybutton.style.display = 'block'
    } else {
      mybutton.style.display = 'none'
    }
  })
})
</script>
<style lang="scss" scoped>
#pagetop {
  z-index: 1000000;
  img {
    border-radius: 50%;
    background-color: #ffffff;
  }
}
</style>
