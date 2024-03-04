<template>
  <main class="homepage ">
    <Header />
      
    <Download/>
    <QuestionFacebook />
    <Footer />
    <BackToTop />
  </main>
</template>

<script lang="ts" setup>
  // @ts-ignore
  import {useMetaSeoFacebook} from '@/util/meta.ts'
  import Download from '@/components/Download.vue'
  import SchemaJson from '@/util/schema.json'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import BackToTop from '@/components/BackToTop.vue'
  import QuestionFacebook from '@/components/QuestionFacebook.vue'

  useMetaSeoFacebook()
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(SchemaJson.schema1),
        async: true,
        defer: true
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify(SchemaJson.schema2),
        async: true,
        defer: true
      }
    ]
  })
</script>

<style lang="scss" scoped>

.text-body-content {
  font-size: 18px;
}
</style>
