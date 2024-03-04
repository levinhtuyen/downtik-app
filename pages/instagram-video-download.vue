<template>
  <main class="homepage " v-loading="loading">
    <Header />
    <div>
      <div class="h-96 bg-[#195fd7] flex justify-center items-center">
        <div class="container px-4 custom-input mx-auto ">
          <div class="p-5 pointer-events-none">
            <h1 class="text-center font-bold text-white text-4xl">Youtube Video Download</h1>
            <h2 class="text-center py-4 font-bold text-white text-xl">Without Watermark. Fast. All devices</h2>
          </div>
          <div class="flex items-center justify-center gap-4">
            <div class="flex items-center bg-white rounded-lg overflow-hidden pl-2 py-1 justify-between w-full gap-4">
              <input  class="text-base text-black font-bold flex-grow outline-none pl-2 " id="link-url"
                autocomplete="off" autocapitalize="none" type="text" placeholder="Pase TikTok link here" />
              <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button @click="pasteFunc()"
                  class="bg-[#8a2be2] text-white text-base rounded-lg px-4 py-2 font-thin text-[16px] lg:text-[20px]">Paste</button>
              </div>
            </div>
            <!-- component -->
            <el-button @click="downloadVideo" v-loading="loading"
              class="button-download text-white font-bold py-3 px-6  rounded inline-flex items-center">
              <svg
                class="w-4 h-4 mr-2 custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <Question />
    <Footer />
    <BackToTop />
  </main>
</template>

<script lang="ts" setup>
  // @ts-ignore
  import {ref} from 'vue'
  import {useMetaSeoYoutube} from '@/util/meta.ts'
  import SchemaJson from '@/util/schema.json'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import BackToTop from '@/components/BackToTop.vue'
  import Question from '@/components/Question.vue'

  let loading = ref(false)
  useMetaSeoYoutube()

  const handleOpenDownload = async (urlDownload) => {
      console.log('urlDownload :>> ', urlDownload);
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
      };
      xhr.onerror = err => {
        alert('Failed to download picture');
      };
      xhr.send();
  } 

  const downloadLinkTiktokVideoNoWatermark2 = async (url) => {
    
    handleOpenDownload(responseData.value.data.play)
  }
  const downloadVideo = () => {
    let url = document.getElementById('link-url').value
    downloadLinkTiktokVideoNoWatermark2(url)
  }
  const pasteFunc = async () => {
    const permissionStatus = await navigator.permissions.query({name: 'clipboard-read'});
    console.log('permissionStatus :>> ', permissionStatus);
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
