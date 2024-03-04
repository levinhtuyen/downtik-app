<template lang="">
  <div class="container px-4 mx-auto justify-center">
    <el-input
    v-model="textarea"
    placeholder="Please input"
    :autosize="{ minRows: 3, maxRows: 6 }"
    type="textarea"
    class="w-96"
  />  <el-button type="primary" @click="convertText(textarea)">submit</el-button>
  <div class="container">
    <div>
      {{ arr }}
    </div>
  </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
let arr = ref([])
const capitalize_Words = (str) => {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
const convertLowerCase = (str) => {
  let title =  str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();  
    let titleConvert = capitalize_Words(title)
    titleConvert = titleConvert.replace(/\s+/g, '');
    return titleConvert 
}
function splitter(str,  l){
    l = 70
    let strs = str.match(/.{1,70}/g);
    strs = strs.map((str, index) => ({ name: str}));
    return strs
  }
const convertText = (value) => {
  if(value.length > 70) {
    arr.value = splitter(value)
    arr.value = arr.value.map((item) => {
      return item.name = convertLowerCase(item.name)
    })
  } else {
    let title = convertLowerCase(value)
    arr.value[0] = {
      titleConvert : title
    }
  }

  
}

</script>
<style lang="">
  
</style>