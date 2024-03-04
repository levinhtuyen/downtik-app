<template>
  <main class="homepage ">
    <header class="bg-white dark:bg-gray-900">
      <nav
        class="container px-4 mx-auto grid grid-cols-2 gap-2 sm:grid-cols-2 lg:justify-between"
      >
        <div class="flex items-center justify-between p-3">
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
              <img src="@/assets/logo.svg" alt="">
            </div>
          </a>
        </div>
        <div class="flex justify-end">
          <el-popover placement="bottom" :width="290" trigger="hover" popper-class="custom-lang">
            <template #reference>
              <div class="flex items-center gap-1  bg-white hover:bg-[#F5F5F5] w-34 px-4 cursor-pointer">
                <img width="30" height="30" :src="`${useAsset(countryChoose.image)}`" alt="" />
                <span  style="padding-bottom: 3px;"> Language</span>
              </div>
            </template>
            <template #default>
              <div class="grid grid-cols-2 gap-2 cursor-pointer">
                <div
                  v-for="countrie in countries"
                  :key="countrie"
                  @click="changeLanguage(countrie)"
                >
                  <div class="flex items-center gap-3">
                    <img width="30" height="30" :src="`${useAsset(countrie.image)}`" alt="" />
                    <span class="width-25">{{ countrie.name }}</span>
                  </div>
                </div>
              </div>
            </template>
          </el-popover>
        </div>
      </nav>
    </header>
    <div class="h-96 bg-[#292929] flex justify-center items-center">
      <div class="container px-4 custom-input mx-auto ">
          <h1 class="text-center font-bold text-white text-[50px]">{{ $t('tiktokVideoDownload') }}</h1>
          <h2 class="text-center py-7 font-bold text-white text-[30px]">{{ $t('unduhVideoTiktokDaringTanpaTandaAir') }}</h2>
        <div class="p-5 pointer-events-none">
          
        </div>
        <div class="flex items-center justify-center gap-4 h-[62px]">
          <div class="flex items-center bg-white rounded-2xl overflow-hidden pl-2 py-1 justify-between w-full gap-4 h-[72px]">
            <input  class="text-base text-black font-bold flex-grow outline-none pl-2 " id="link-url"
              autocomplete="off" autocapitalize="none" type="text" :placeholder="$t('cukupMasukkanTautan')" />
            <div class="ms:flex items-center px-2 mr-2 rounded-lg space-x-4 mx-auto ">
              <button @click="pasteFunc()"
                class="bg-[#D9D9D9] text-black text-base font-semibold rounded-xl px-4 py-3 font-thin text-[22px] lg:text-[20px] flex gap-2"><img src="@/assets/paste.svg" alt=""> {{ $t('tempel') }}</button>
            </div>
          </div>
          <!-- component -->
          <el-button @click="downloadVideo" v-loading="loading"  :style="loading ? `pointer-events: none;` : ''"
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
            <img width="45" style="padding-right: 12px;" src="@/assets/down.svg" alt="">
            <span>{{ $t('unduh') }}</span>
          </el-button>
        </div>
      </div>
    </div>
    <div>
      <div class="container px-4 mx-auto pb-24">
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('pengunduhanVideoTiktokTanpaTandaAir') }}</h2>
        <p class="text-[20px] text-center leading-7">
          <span>{{ $t('musicallydownAlatOnlineYangBanyakDigunakanMemungkinkanAndaMe') }}</span>
          <span>{{ $t('ngunduhVideoTiktokDenganMudahTanpaTandaAirApaPunDiakuiSeba') }}</span>
          <span>{{ $t('gaiSalahSatuPengunduhVideoTiktokTeratasIniMemungkinkanAndaM') }}</span>
          <span>{{ $t('enyimpanVideoFavoritAndaDalamFormatMp4BerkualitasTinggiDengan') }}</span>
          <span>{{ $t('resolusiHdMemastikanPengalamanMenontonPremium') }}</span>
        </p>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <div>
          <h2 class="font-bold text-[30px] align-middle py-7 text-center">{{ $t('fiturMusicallydow') }}</h2>
          <p class="text-[20px] text-center leading-7 pb-7">
            <span>{{ $t('platformLuarBiasaIniMemilikiBerbagaiFungsiDanKemampuanBeriku') }}</span>
            <span>{{ $t('tRincianKemampuanTersebut') }}</span>
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-24 pt-8">
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/icondown.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('dapatkanUnduhanGratis') }}</h3>
              <p class="text-[20px] leading-7">
                <span> {{ $t('menggunakanMusicallydownAdalahLayananPengunduhGratisPenggunaDa') }}</span>
                <span> {{ $t('patMenggunakanPlatformIniSecaraGratisDanAndaAkanMendapatkanU') }}</span>
                <span> {{ $t('nduhanGratisSelainItuAndaAkanMendapatkanUnduhanTanpaBatasM') }}</span>
                <span> {{ $t('enggunakanLayananIniMariGunakanLayananMenakjubkanIniDiPerang') }}</span>
                <span> {{ $t('katAnda') }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/iconkesesuaian.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('Kesesuaian') }}</h3>
              <p class="text-[20px] leading-7">
                <span>{{ $t('BaikAndaMenggunakanPcAndroidAtauIphoneMusicallydownKompatib') }}</span>
                <span>{{ $t('ElDenganSemuaPerangkatLayananIniDirancangUntukBekerjaSecara') }}</span>
                <span>{{ $t('EfisienDiBrowserPerangkatApaPunJadiPenggunaBisaDenganMudah') }}</span>
                <span>{{ $t('MengunduhVideoTiktokFavoritnyaDenganBantuanPlatformSerbagunaINi') }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/icontanpa.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('tanpaTandaAirTiktok') }}</h3>
              <p class="text-[20px] leading-7">
                <span>{{ $t('FiturIniMemungkinkanAndaMengunduhVideoTiktokDenganMulusMengh') }}</span>
                <span>{{ $t('IlangkanLogoTiktokUntukPengalamanMenontonYangLebihBersihDanB') }}</span>
                <span>{{ $t('EbasTandaAirSempurnaUntukMenyimpanDanMembagikanKontenTiktok') }}</span>
                <span>{{ $t('FavoritAndaTanpaGangguanBrandingPlatformMenawarkanVideoYangL') }}</span>
                <span>{{ $t('EbihHalusDanTidakMengganggu') }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/iconantarmuka.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('AntarmukaYangRamahPengguna') }}</h3>
              <p class="text-[20px] leading-7">
                <span>{{ $t('SalahSatuKemampuanMenakjubkanDariAplikasiIniAdalahAndaDapatM') }}</span>
                <span>{{ $t('EngunduhVideoTiktokDenganMudahUiLayananIniSederhanaDanMudah') }}</span>
                <span>{{ $t('DimengertiPenggunaDapatMengunduhMediaTanpaMenghadapiKesulitan') }}</span>
                <span>{{ $t('ApaPun') }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/iconberbagai.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('BerbagaiFormatTersedia') }}</h3>
              <p class="text-[20px] leading-7">
                <span>{{ $t('PlatformOnlineIniTidakHanyaMenyediakanLayananDownloadVideoFor') }}</span>
                <span>{{ $t('MatMp4TetapiJugaDownloadFormatMp3IniAdalahFiturYangMenarik') }}</span>
                <span>{{ $t('DanPenggunaTertarikPadaLayananIniKarenaMemberikanKeserbagunaa') }}</span>
                <span>{{ $t('NJadiPenggunaDapatMengunduhVideoTersebutKeDalamFormatMp3D') }}</span>
                <span>{{ $t('AnMembuatPlaylistLagunya') }}</span>
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-7">
            <img src="@/assets/iconvideo.svg" alt="">
            <div>
              <h3 class="text-[25px] font-semibold pb-4">{{ $t('VideoBerkualitasTinggi') }}</h3>
              <p class="text-[20px] leading-7">
                <span>{{ $t('TerakhirAndaDapatMendownloadVideoDenganKualitasHdMenggunakan') }}</span>
                <span>{{ $t('LayananLuarBiasaIniDanMendapatkanVideoDenganDefinisiTinggi') }}</span>
                <span>{{ $t('SebabPenggunaInginMelihatVideoHasilDownloadDenganKualitasTerbAik') }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('ApaItuPengunduhTiktokMusicallydown') }}</h2>
        <p class="text-[20px] text-center leading-7">
          <span>{{ $t('ApakahAndaInginMengunduhVideoDariTiktokTanpaTandaAirPengund') }}</span>
          <span>{{ $t('UhTiktokMusicallyDownTersediaUntukTujuanIniIniAdalahLayanan') }}</span>
          <span>{{ $t('OnlineYangDapatAndaGunakanDenganPerangkatApaPunKarenaHanya') }}</span>
          <span>{{ $t('MembutuhkanBrowserUntukMenavigasiWebsitePenggunaDapatMengguna') }}</span>
          <span>{{ $t('KanLayananIniTanpaMengeluarkanBiayaBerapaPunSelainItuTidak') }}</span>
          <span>{{ $t('PerluRegistrasiAtauBerlanggananUntukMenggunakanPlatformIni') }}</span>
        </p>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('UnduhVideoTiktokTanpaTandaAir') }}</h2>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('TiktokAdalahVideoPendekKontenKreatifDanKontenMenghiburLainn') }} </span>
          <span> {{ $t('YaTerpopulerDiDuniaIniMemilikiJutaanPenggunaDiSeluruhDunia') }} </span>
          <span> {{ $t('DanTerusBertambahIniAdalahPlatformUnikTempatPenggunaMemposti') }} </span>
          <span> {{ $t('NgKontenKreatifSelanjutnyaPenggunaDapatMelihatSemuaJenisVid') }} </span>
          <span> {{ $t('EoDiAplikasiMenghiburIniSelainItuIniTersediaSecaraGratis') }} </span>
        </p>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('KebanyakanOrangInginMendownloadVideoFavoritMerekaDariTiktokM') }} </span>
          <span> {{ $t('EskipunBisaJugaDenganAdanyaWatermarkDiAtasnyaSaatAndaMenjel') }} </span>
          <span> {{ $t('AjahiInternetBerbagaiPengunduhTiktokTersediaTetapiMemilihYang') }} </span>
          <span> {{ $t('TerbaikAdalahMasalahNyata') }} </span>
        </p>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('UntungnyaMusicallydownAdalahPlatformOnlineBaruUntukMengunduhV') }} </span>
          <span> {{ $t('IdeoTiktokTanpaTandaAirIniAdalahAlatOnlineYangMudahDigunak') }} </span>
          <span> {{ $t('AnSehinggaAndaDapatDenganMudahMengoperasikanDanMengunduhVideo') }} </span>
          <span> {{ $t('TiktokTanpaKesulitanApaPun') }} </span>
        </p>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('DalamPostinganIniAndaAkanMempelajariTentangProsesPengunduhan') }} </span>
          <span> {{ $t('DanFiturLayananMusicallydownSetelahMembacaArtikelIniAndaHar') }} </span>
          <span> {{ $t('UsMenggunakanLayananOnlineLuarBiasaIniDiPerangkatAnda') }} </span>
        </p>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('BagaimanaCaraMengunduhVideoDariPengunduhTiktokMusicallydown') }}</h2>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('ProsesnyaMudahAndaPerluMembukaSitusResmiLayananTersebutSali') }} </span>
          <span> {{ $t('NUrlTitokVideoTersebutDanTempelkanKeRuangYangDitentukanDiS') }} </span>
          <span> {{ $t('ItusWebMusicallydownKetukOpsiUnduhDanItuDiunduhDalamHitunga') }} </span>
          <span> {{ $t('NDetikDiPerangkatAnda') }} </span>
        </p>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('Kesimpulan') }}</h2>
        <p class="text-[20px] text-center leading-7">
          <span> {{ $t('MusacillydownAdalahAlatYangBerhargaBagiPecintaTiktokKarenaMe') }} </span>
          <span> {{ $t('MberiAndaAksesGratisUntukMengunduhVideoFavoritTanpaTandaAir') }} </span>
          <span> {{ $t('LangsungDiPerangkatAndaSelanjutnyaTidakPerluMenginstalAplika') }} </span>
          <span> {{ $t('SiApaPunMenggunakanBrowserAndaDanMulaiMenggunakanLayananLua') }} </span>
          <span> {{ $t('RBiasaIniDiPerangkatAnda') }} </span>
        </p>
        <div class="flex items-center justify-center pt-12">
          <hr class="w-1/2 h-[1px] border-dark-900">
        </div>
        <h2 class="font-bold text-[30px] align-middle py-8 text-center">{{ $t('FAQs') }}</h2>
        <h3 class="font-semibold text-[30px] py-8">{{ $t('BagaimanaCaraDownloadVideoTiktokTanpaWatermark') }}</h3>
        <ul class="list-disc pl-7">
          <li>
            <p class="text-[20px] leading-7">{{ $t('PertamaAndaPerluMembukaTiktokDanMenemukanVideoFavoritAnda') }}</p>
          </li>
          <li>
            <p class="text-[20px] leading-7">
              <span> {{ $t('SekarangDariOpsiBerbagiDapatkanTautannyaAtauJikaMenggunakanS') }} </span>
              <span> {{ $t('ItusWebDapatkanUrlVideonya') }} </span>
            </p>
          </li>
          <li>
            <p class="text-[20px] leading-7">
              <span> {{ $t('SetelahIniNavigasikanSitusWebDowntikAppTempelkanTautanDiRua') }} </span>
              <span> {{ $t('NgYangDiberikanDanKetukUntukMengunduhVideo') }} </span>
            </p>
          </li>
        </ul>
        <h4 class="font-semibold text-[30px] py-8">{{ $t('BagaimanaCaraMengunduhMp3Tiktok') }}</h4>
        <ul class="list-disc pl-7">
          <li>
            <p class="text-[20px] leading-7">{{ $t('UntukMengunduhFormatMp3DapatkanUrlVideonya') }}</p>
          </li>
          <li>
            <p class="text-[20px] leading-7">{{ $t('SekarangTempelTautanDiRuangTeksYangDiberikanKlikPadaUnduhan') }}</p>
          </li>
          <li>
            <p class="text-[20px] leading-7">{{ $t('AndaAkanMelihatOpsiFormatYangBerbedaPilihOpsiMp3DanUnduh') }}</p>
          </li>
        </ul>
        <h4 class="font-semibold text-[30px] py-8">{{ $t('ApakahMusicallydownBerfungsiDiPerangkatSeluler') }}</h4>
        <ul class="list-disc pl-7">
          <li>
            <p class="text-[20px] leading-7">
              <span> {{ $t('YaMusicallydownDapatDenganMudahBekerjaDanBeroperasiDiPerangk') }} </span>
              <span> {{ $t('AtSelulerApaPunUntukMengunduhVideoTiktok') }} </span>
            </p>
          </li>
        </ul>
        <h4 class="font-semibold text-[30px] py-8">{{ $t('DiManaVideoYangDiunduhDisimpan') }}</h4>
        <ul class="list-disc pl-7">
          <li>
            <p class="text-[20px] leading-7">
              <span> {{ $t('UnduhanAkanDisimpanDiFolderUnduhanPerangkatAndaSesuaiPilihan') }} </span>
              <span> {{ $t('AndaUntukMenyimpanVideo') }} </span>
            </p>
          </li>
        </ul>
        <h4 class="font-semibold text-[30px] py-8">{{ $t('ApakahMusicallydownMenyimpanVideoYangDiunduh') }}</h4>
        <ul class="list-disc pl-7">
          <li>
            <p class="text-[20px] leading-7">
              <span> {{ $t('TidakSecaraMusikaldownTidakAkanMenyimpanVideoApaPunKarenaD') }} </span>
              <span> {{ $t('IrancangUntukBerfungsiSebagaiPengunduh') }} </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <footer class="bg-light-200 dark:bg-gray-900">
      <div class="container px-4 mx-auto py-20" style="border-bottom: 1px solid #AFAFAF;">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          <div>
  
            <p class="text-[16px] font-semibold">Connect Us</p>
                <div  class="py-3">
                <div class="flex items-center justify-start pt-1 is-logo" >
                  <div class="is-logo-social">
                    <a
                      href="https://www.facebook.com/profile.php?id=61556007928815"
                      target="_blank"
                      aria-label="Connect Us"
                      ><img
                      format="webp"
                      loading="lazy"
                        src="https://fnjteam.sirv.com/webphongtro/webp/facebook.png"
                        width="29"
                        height="29"
                        alt="Downloading a video from Musically using the MusicallyDown tool"
                        /></a>
                  </div>
                  <div class="ml-3 is-logo-social">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@DowntikApp"
                      aria-label="Connect Us"
                      ><img
                        format="webp"
                        loading="lazy"
                        src="https://fnjteam.sirv.com/webphongtro/webp/youtube.png"
                        width="29"
                        height="29"
                        alt="Downloading a video from Musically using the MusicallyDown tool"
                        /></a>
                  </div>
                </div>
              </div>
  
          </div>
  
          <div >
            <p class="font-semibold text-gray-800 dark:text-white flex justify-center">
              Legal
            </p>
  
            <div class="mt-5 flex flex-col items-center space-y-2">
              <a href="#"
                class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Terms of Service</a>
              <a href="#"
                class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Privacy Policy</a>
              <a href="#"
                    class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Contact</a>
            </div>
          </div>
  
          <div>
            <p class="font-semibold text-gray-800 dark:text-white flex justify-end">
              Tools
            </p>
  
            <div class="mt-5 flex flex-col items-end space-y-2 flex justify-end">
              <a href="/"
                class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Download video Tiktok</a>
                <a href="/musicallydown-download-tiktok-videos-easily"
                class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Download Videos from Musically</a>
                <a href="/facebook-reels-download"
                  class="text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">Download video Facebook</a>
              </div>
          </div>
        </div>
      </div>
      <div class="h-[80px] flex items-center justify-center">
        <p class="text-[16px]">© 2024 DownTik - Video downloader</p>
      </div>
    </footer>
    <BackToTop />
  </main>
</template>

<script lang="ts" setup>
  // @ts-ignore
  import {useMetaSeoMusicallydown} from '@/util/meta.ts'
  import SchemaJson from '@/util/schema.json'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import BackToTop from '@/components/BackToTop.vue'
  // import Question from '@/components/Question.vue'
  import Download from '@/components/Download.vue'
  import { useRoute } from 'vue-router'
  import { ref, reactive } from 'vue'
  import { filename } from 'pathe/utils';
// import listCountries from '@/util/countries.json'

const { locale } = useI18n()
interface ICountry {
  name: string
  emoji: string
  lang: string
  unicode: string
  image: string
}
// let countries = reactive(listCountries)
const countryChoose = ref({
  name: "Indonesia",
    code: "ID",
    emoji: "🇮🇩",
    lang: "in",
    unicode: "U+1F1EE U+1F1E9",
    image: "indo.png"
})
function useAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/' + path]
}

const changeLanguage = (item: ICountry) => {
  if (!item) {
    return
  }
  locale.value = item.lang
  countryChoose.value = item
}
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
  useMetaSeoMusicallydown()
  const countries = ref([
  {
    name: "Tiếng Việt",
    emoji: "🇻🇳",
    lang: "vi",
    unicode: "U+1F1FB U+1F1F3",
    image: "vn.png"
  },
  {
    name: "English",
    code: "GB",
    emoji: "🇬🇧",
    lang: "en",
    unicode: "U+1F1EC U+1F1E7",
    image: "us.png"
  },
  {
    name: "Indonesia",
    code: "ID",
    emoji: "🇮🇩",
    lang: "in",
    unicode: "U+1F1EE U+1F1E9",
    image: "indo.png"
  },
  {
    name: "Français",
    code: "FR",
    emoji: "FE",
    lang: "fr",
    unicode: "U+1F1EE U+1F1E9",
    image: "fr.png"
  }
])
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
  @font-face {
    font-family: "Segoe UI This";
    src: url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.eot");
    src: url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/19efebbad6fdf0140cf23e4491f2ecd6.svg#Segoe UI This")format("svg");
}
  * {
    font-family: 'Segoe UI', sans-serif !important;
  }
.custom-collapse:deep(.el-collapse-item) {
  font-size: 20px !important;
  text-align: left !important;
}
.el-collapse-item__header {
  text-align: left !important;
}
.custom-input {
  width: 54%;
  @media screen and (max-width: 540px) {
    width: 100%;
  }

}
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
.custom-svg {
  filter: invert(100%) sepia(73%) saturate(2%) hue-rotate(166deg) brightness(112%) contrast(100%);
}
.button-download {
  background-color: #EB2744;
  height: 72px;
  color: #ffffff;
  border: 1px solid #EB2744;
  min-width: 200px;
  border-radius: 20px;
  font-size: 25px
}

.text-body-content {
  font-size: 18px;
}
</style>
<style>
.custom-lang {
  padding: 12px 20px !important;
}
</style>
