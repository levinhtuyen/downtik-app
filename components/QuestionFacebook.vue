<template >
  <div>
    <div class="container px-4 mx-auto">
      <div class="">
        <p class="mt-8 text-3xl font-semibold text-black  ">{{ $t('facebookDownloader')}}</p>
        <p class="mt-4 text-body-content">
          <span>{{ $t('downtikWasInventedToHelpYouFacebook1')}}</span>
          <span>{{ $t('downtikWasInventedToHelpYouFacebook2')}}</span>
          <span>{{ $t('downtikWasInventedToHelpYouFacebook3')}}</span>
          <span>{{ $t('downtikWasInventedToHelpYouFacebook4')}}</span>
        </p>
        <p class="mt-8 text-3xl font-semibold text-black  "><span>{{ $t('facebookStoryVideoDownloader')}}</span></p>
        <p class="mt-4 text-body-content">
          <span>{{ $t('downtikAlsoCoulDownloadFbVideoStory1')}}</span>
          <span>{{ $t('downtikAlsoCoulDownloadFbVideoStory2')}}</span>
        </p>
      </div>

      
      <div class="py-12 custom-collapse">
        <el-collapse v-model="activeNamesCollapse"  accordion>
          <el-collapse-item  name="1">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('whyUseDowntikToDownloadFacebookVideo')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content">
                <span> {{ $t('accordingToUserReviewsAndComments1')}}</span>
                <span> {{ $t('accordingToUserReviewsAndComments2')}}</span>
                <span> {{ $t('accordingToUserReviewsAndComments3')}}</span></p> 
                
            </div>
            
          </el-collapse-item>
          <el-collapse-item  name="2">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('howToDownloadFacebookVideosToYourComputer')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span>{{ $t('onAComputerJustCopyTheLinkOfTheFacebook1')}} </span>
                <span>{{ $t('onAComputerJustCopyTheLinkOfTheFacebook2')}} </span></p>
            </div>
          </el-collapse-item>
          <!-- <el-collapse-item name="3">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                Tôi có thể tải xuống video phát Trực tiếp trên Facebook không?</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span> Tất nhiên rồi, Nhưng bạn chỉ có thể tải xuống các video Trực tiếp trên Facebook nhưng chỉ sau khi chúng kết thúc. còn trong lúc phát sẽ không thể tải được.</span></p> 
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                Bạn có theo dõi các liên kết tôi sử dụng?</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content">Không! Chúng tôi không lưu hoặc lưu trữ bất kỳ video nào bạn đã tải xuống, tất cả chỉ được lưu trữ trên máy chủ Facebook.</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                Chất lượng video nào được trình tải video Facebook hỗ trợ?</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span> Hầu hết các video đều ở định dạng MP4 và dưới dạng SD, HD, FullHD, 2K, 4K. Chất lượng phụ thuộc vào nguồn tải lên của tệp. Nếu tác giả đã tải nó lên 1080p, bạn sẽ có thể lưu video Facebook với chất lượng tương tự.</span></p>
            </div>
          </el-collapse-item> -->
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useRoute  } from 'vue-router'

  import {ref} from 'vue'
  let activeNamesCollapse = ref('1')

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
