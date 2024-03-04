<template>
  <main class="homepage ">
    <Header />
    <Download />
    <Question />
    <Footer />
    <BackToTop />
  </main>
</template>

<script lang="ts" setup>
  // @ts-ignore
  import {useMetaSeoIndex} from '@/util/meta.ts'
  import SchemaJson from '@/util/schema.json'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import BackToTop from '@/components/BackToTop.vue'
  import Question from '@/components/Question.vue'
  import Download from '@/components/Download.vue'

  useMetaSeoIndex()

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
.custom-collapse:deep(.el-collapse-item) {
  font-size: 20px !important;
  text-align: left !important;
}
.el-collapse-item__header {
  text-align: left !important;
}

</style>
