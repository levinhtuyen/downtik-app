<template>
  <div>
      <div class="h-96 bg-[#195fd7] flex justify-center items-center">
        <div class="container px-4 custom-input mx-auto ">
          <div class="p-5 pointer-events-none">
            <h1 class="text-center font-bold text-white text-4xl">{{ page === 'tiktok' ? $t('tiktokVideoDownload') : $t('facebookVideoDownload')}}</h1>
            <h2 class="text-center py-4 font-bold text-white text-xl">{{ page === 'tiktok' ?  $t('withoutWatermarkFastAllDevices') : $t('facebookwithoutWatermarkFastAllDevices')}}</h2>
          </div>
          <div class="flex items-center justify-center gap-4">
            <div class="flex items-center bg-white rounded-lg overflow-hidden pl-2 py-1 justify-between w-full gap-4">
              <input  class="text-base text-black font-bold flex-grow outline-none pl-2 " id="link-url"
                autocomplete="off" autocapitalize="none" type="text" :placeholder="page === 'tiktok' ? $t('pasteTiktokLinkHere') : $t('pasteFacebookLinkHere')" />
              <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button @click="pasteFunc()"
                  class="bg-[#8a2be2] text-white text-base rounded-lg px-4 py-2 font-thin text-[16px] lg:text-[20px]">{{ $t('paste')}}</button>
              </div>
            </div>
            <!-- component -->
            <el-button @click="downloadVideo" :loading="loading" :style="loading ? `pointer-events: none;` : ''"
              class="button-download text-white font-bold py-3 px-6  rounded inline-flex items-center">
              <template #loading>
                <div class="custom-loading">
                  <svg class="circular" viewBox="-10, -10, 50, 50">
                    <path
                      class="path"
                      d="
                      M 30 15
                      L 28 17
                      M 25.61 25.61
                      A 15 15, 0, 0, 1, 15 30
                      A 15 15, 0, 1, 1, 27.99 7.5
                      L 15 15
                    "
                      style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                    />
                  </svg>
                </div>
              </template>
              <svg
                class="w-4 h-4 mr-2 custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>{{ $t('download')}}</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
  import {ref} from 'vue'
  import { useRoute } from 'vue-router'

  let loading = ref(false)
  const route = useRoute()
  let input = ref('')
  let page = ref('tiktok')
  if(route.name === 'facebook-reels-download') {
    page.value = 'facebook'
  }
  const handleOpenDownload = async (urlDownload: String) => {
      
      let time=Date.now()
      let url = urlDownload
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.target = '_blank';
        tag.download = `video${time}.mp4`;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
        loading.value = false
      };
      xhr.onerror = err => {
        loading.value = false
        alert('Failed to download picture');
      };
      xhr.send();
  } 
  const downloadLinkTiktokVideoNoWatermark2 = async (url: String) => {
   
    handleOpenDownload(responseData.value.data.play)
  }
  const downloadLinkFacebook = async (url: String) => {

    
    handleOpenDownload(responseData.value.links["Download High Quality"])
  } 
  const downloadVideo = () => {
    loading.value = true
    let url = document.getElementById('link-url').value
    if(page.value ==='facebook') {
      downloadLinkFacebook(url)
    } else {
      downloadLinkTiktokVideoNoWatermark2(url)
    }
  }
  const pasteFunc = async () => {
    const permissionStatus = await navigator.permissions.query({name: 'clipboard-read'});
    // Will be 'granted', 'denied' or 'prompt':
    console.log(permissionStatus.state);
    if (permissionStatus.state === "denied") {
      alert('Vui lòng cho phép trình duyệt đọc clipboard')
    }

    let pasteButton = document.getElementsByTagName('button')[0];
    navigator.clipboard
      .readText()
      .then((cliptext) => {
        let input = document.getElementById('link-url')
        input.value = cliptext
      },
        err => console.log(err)
      );
  }
</script>
<style lang="scss" scoped>
.custom-input {
  width: 50%;
  @media screen and (max-width: 540px) {
    width: 100%;
  }

}
.custom-svg {
  filter: invert(100%) sepia(73%) saturate(2%) hue-rotate(166deg) brightness(112%) contrast(100%);
}
.button-download {
  background-color: #8a2be2;
  height: 42px;
  color: #ffffff;
  border: 1px solid #c98eff;
}
.text-body-content {
  font-size: 18px;
}
</style>
