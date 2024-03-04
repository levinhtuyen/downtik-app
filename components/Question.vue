<template >
  <div>
    <div class="container px-4 mx-auto">
      <div class="">
        <p class="mt-8 text-lg font-semibold text-black  ">Website downtik.app </p>
        <p class="mt-4 text-body-content">
          <span>{{ $t('iNowProvideAnApp')}}</span></p>
      </div>
      <div>
        <p class="mt-8 text-lg font-semibold text-black  ">{{ $t('downloadTiktokVideosMusicallyWithout')}}</p>
        <p class="mt-4 text-body-content">
          <span>{{ $t('downtikAppIsOneOfThebestTiktok1')}}</span>
          <span>{{ $t('downtikAppIsOneOfThebestTiktok2')}}</span>
          <span>{{ $t('downtikAppIsOneOfThebestTiktok3')}}</span>
          <span>{{ $t('downtikAppIsOneOfThebestTiktok4')}}</span>
        </p>
      </div>
      <div>
        <p class="mt-8 text-lg font-semibold text-black  ">downtik.app</p>

        <p class="mt-2 text-body-content">{{ $t('noWatermarkForBetterQualityWhichMost')}}</p>
        <p class="mt-2 text-body-content">{{ $t('downloadTiktokVideosMusicallyVideos')}}</p>
        <p class="mt-2 text-body-content">{{ $t('tiktokOnlyAllowsUsersToDwnloadVideosBy')}}
        </p>
        <p class="mt-2 text-body-content">{{ $t('downloadByUsingYourBrowsersIWantToKeep')}}</p>
        <p class="mt-2 text-body-content">{{ $t('iMakeAnApplicationForThisPurposeAsWell')}}</p>
        <p class="mt-2 text-body-content">{{ $t('itsAlwaysFreeIOnlyPlaceSomeAdsWhich')}}</p>
        <p class="mt-2 text-body-content">{{ $t('newDownloadProvidesUsersWithTheAbilityToDownload')}}</p>
      </div>
      <div class="py-12 custom-collapse">
        <el-collapse v-model="activeNamesCollapse"  accordion>
          <el-collapse-item  name="1">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('howToDownloadVideoTiktokNoWatermark')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"> {{ $t('openTiktokAppOnYourPhone')}}</p>
                <p  class="mt-2 text-body-content">{{ $t('chooseWhateverVideoYouWantToDownload')}}</p>
                <p  class="mt-2 text-body-content">{{ $t('clickToTheShareButtonAtTheRightBottom')}}</p>
                <p  class="mt-2 text-body-content">{{ $t('clickTheCopyLinkButton')}}</p>
                <p  class="mt-2 text-body-content">{{ $t('downloadByUsingYourBrowsersIWantToKeep')}} <span>{{ $t('iMakeAnApplicationForThisPurposeAsWell')}}</span></p>
                <p  class="mt-2 text-body-content">{{ $t('goBackToDownloadappAndPasteYourDownloadLinkToTheFieldAboveThenClickToTheDownloadButton')}}</p> <p  class="mt-2 text-body-content">{{ $t('waitForOurServerToDoItsJobAndThenSaveTheVideoToYourDevice')}}</p> 
            </div>
            
          </el-collapse-item>
          <el-collapse-item  name="2">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('howToDownloadTiktokVideoToYourMobilePhoneOrComputer')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span>{{ $t('openTheTiktokAppClickTheShareButtonAndClickCopyLinkGoTo')}}</span></p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('isTiktokVideoLegal')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span> {{ $t('asLongAsYouDontUseTheirTiktokNoWatermarkVideosForCommercial')}}</span></p> 
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('howToDownloadTiktokVideosToAndroid')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content">{{ $t('tsVerySimpleGoToDowntikapp')}}</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5">
            <template #title>
              <span class="text-[14px] lg:text-[18px] text-left">
                {{ $t('howToDownloadTiktokToYourIphoneIos')}}</span>
            </template>
            <div>
              <p  class="mt-2 text-body-content"><span> {{ $t('openTiktokAppSelectVideo')}}</span></p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
