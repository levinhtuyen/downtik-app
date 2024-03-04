// @ts-ignore

import { reactive, computed } from 'vue'
export const  useMetaSeoIndex = () => {
  const siteData = reactive({
    title: 'MusicallyDown - Download TikTok Videos Easily',
    description: 'TikTok Video Downloader - downtik.app is one of the best free Download video Tiktok No Watermark tool available online. You can download TikTok video from any device you have.',
    content: '',
    ogTitle: 'MusicallyDown - Download TikTok Videos Easily',
    ogDescription: 'TikTok Video Downloader - downtik.app is one of the best free Download video Tiktok No Watermark tool available online. You can download TikTok video from any device you have.',
    ogImage: 'https://downtik.app/favicon.ico',
    ogType: 'article',
    ogLink: 'https://downtik.app',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'downtik.app',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content: computed(() => siteData.description),
      },
      {
        property: 'og:title',
        content: computed(() => siteData.ogTitle),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:description',
        content: computed(() => siteData.ogDescription),
      },
      {
        property: 'og:image',
        content: computed(() => siteData.ogImage),
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: computed(() => siteData.ogImageWidth),
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
    ],

    link: [
        { rel: 'canonical', href: 'https://downtik.app', id: 'canonical' },

    ],
  })
  return useHead
}
export const  useMetaSeoFacebook = () => {
  const siteData = reactive({
    title: 'Facebook Download - Download Video Facebook Without downtik.app',
    description: 'Facebook Video Downloader - downtik.app is one of the best free Download video Facebook No Watermark tool available online. You can download Facebook video from any device you have.',
    content: '',
    ogTitle: 'Facebook Download - Download Video Facebook Without downtik.app',
    ogDescription: 'Facebook Video Downloader - downtik.app is one of the best free Download video Facebook No Watermark tool available online. You can download Facebook video from any device you have.',
    ogImage: 'https://downtik.app/favicon.ico',
    ogType: 'article',
    ogLink: 'https://downtik.app',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'downtik.app',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content: computed(() => siteData.description),
      },
      {
        property: 'og:title',
        content: computed(() => siteData.ogTitle),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:description',
        content: computed(() => siteData.ogDescription),
      },
      {
        property: 'og:image',
        content: computed(() => siteData.ogImage),
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: computed(() => siteData.ogImageWidth),
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
    ],

    link: [
        { rel: 'canonical', href: 'https://downtik.app/facebook-reels-download', id: 'canonical' },

    ],
  })
  return useHead
}
export const  useMetaSeoYoutube = () => {
  const siteData = reactive({
    title: 'Youtube Download - Download Video Youtube Without downtik.app',
    description: 'Youtube Video Downloader - downtik.app is one of the best free Download video Youtube No Watermark tool available online. You can download Youtube video from any device you have.',
    content: '',
    ogTitle: 'Youtube Download - Download Video Youtube Without downtik.app',
    ogDescription: 'Youtube Video Downloader - downtik.app is one of the best free Download video Youtube No Watermark tool available online. You can download Youtube video from any device you have.',
    ogImage: 'https://downtik.app/favicon.ico',
    ogType: 'article',
    ogLink: 'https://downtik.app',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'downtik.app',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content: computed(() => siteData.description),
      },
      {
        property: 'og:title',
        content: computed(() => siteData.ogTitle),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:description',
        content: computed(() => siteData.ogDescription),
      },
      {
        property: 'og:image',
        content: computed(() => siteData.ogImage),
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: computed(() => siteData.ogImageWidth),
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
    ],

    link: [
        { rel: 'canonical', href: 'https://downtik.app/youtube-video-download', id: 'canonical' },

    ],
  })
  return useHead
}
export const  useMetaSeoMusicallydown = () => {
  const siteData = reactive({
    title: 'MusicallyDown - Download TikTok Videos Easily',
    description: 'Youtube Video Downloader - downtik.app is one of the best free Download video Youtube No Watermark tool available online. You can download Youtube video from any device you have.',
    content: '',
    ogTitle: 'MusicallyDown - Download TikTok Videos Easily',
    ogDescription: 'Youtube Video Downloader - downtik.app is one of the best free Download video Youtube No Watermark tool available online. You can download Youtube video from any device you have.',
    ogImage: 'https://downtik.app/bg.png',
    ogType: 'article',
    ogLink: 'https://downtik.app',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'downtik.app',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content: computed(() => siteData.description),
      },
      {
        property: 'og:title',
        content: computed(() => siteData.ogTitle),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:description',
        content: computed(() => siteData.ogDescription),
      },
      {
        property: 'og:image',
        content: computed(() => siteData.ogImage),
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: computed(() => siteData.ogImageWidth),
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
    ],

    link: [
        { rel: 'canonical', href: 'https://downtik.app/youtube-video-download', id: 'canonical' },

    ],
  })
  return useHead
}