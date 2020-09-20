<template>
  <div class="panel-global" id="nolog">
    <h1>{{title}}</h1>
    <div class="panel-listing">
      <div class="text-log">
        <div class="title-log"></div>
        <div class="text-log">
          <a class="btnNoLog" href="/Login">{{ $t('global.login') }}</a>
          <p >{{ $t('global.or') }}</p>
          <a class="btnNoLog" id="register" href="/Register">{{ $t('global.register') }}</a>
          <p>{{ $t('homeInfo') }}</p>
        </div>
      </div>
      <div id="deco">
        <div class="overflow">
          <div id="static-item">
              <itemCreatePanel />
              <itemStatic v-for="(seriestat, index) in seriestats" :key="index" :seriestat="seriestat" />
          </div>
        </div>
        <img id="iphone" src="../../public/img/iphone.png" alt="">
      </div>
      <svg  id="homeBg" width="868" height="1048" viewBox="0 0 868 1048" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect class="item-bg" opacity="0.05" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.1" x="314" y="112" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.15" x="86" y="224" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.05" y="336" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.1" x="314" y="448" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.2" x="86" y="560" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.05" y="672" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.2" x="314" y="784" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.15" x="86" y="896" width="554" height="94" rx="20" fill="#190D2F"/>
        <rect class="item-bg" opacity="0.01" y="1006" width="554" height="94" rx="20" fill="#190D2F"/>
      </svg>


    </div>
  </div>
</template>

<script>
import itemStatic from '@/components/itemStatic'
import itemCreatePanel from '@/components/itemCreatePanel'
import { gsap, TimelineMax, CSSPlugin } from 'gsap'
gsap.registerPlugin(CSSPlugin)

export default {
  data () {
    return {
      titmeline: null,
      series: null,
      seriestats: [
        {
          title: 'Serie 1',
          platform: 'Netflix',
          category: 'Action',
          season: 1,
          episode: 12,
          see: false
        },
        {
          title: 'Serie 2',
          platform: 'Prime Video',
          category: 'Horror',
          season: 4,
          episode: 7,
          see: false
        },
        {
          title: 'Serie 3',
          platform: 'OCS',
          category: 'Science-fiction',
          season: 2,
          episode: 3,
          see: true
        },
        {
          title: 'Serie 4',
          platform: 'Netflix',
          category: 'Anime',
          season: 1,
          episode: 2,
          see: true
        }
      ]
    }
  },
  components: {
    itemStatic, itemCreatePanel
  },
  props: [
    'title'
  ],
  async mounted () {
    this.h1Pos()
    const item2 = document.getElementsByClassName('panel-item')[1]
    const checkbox = item2.querySelector('input[type=checkbox')
    let tl = new TimelineMax({repeat: -1, repeatDelay: 1})
    tl.to(item2, {className: 'panel-item show', duration: 1, delay: 1})
      .to(checkbox, {checked: true, duration: 2})
      .to(item2, {className: 'panel-item see', duration: 2})
      .to(item2, {className: 'panel-item show', duration: 1, delay: 1})
      .to(checkbox, {checked: false, duration: 1, delay: 1})
      .to(item2, {className: 'panel-item', duration: 1, delay: 1})

    let tlAssets = new TimelineMax()
    tlAssets.from("h1, #deco", {opacity: 0, y: () => Math.random() * 50 - 10 + 10, duration: 1, stagger: 0.5})
            .from(".text-log:last-child", {opacity: 0, y: () => Math.random() * 50 - 10 + 10, duration: 1, ease: "power2.out"})

    let tlBg = new TimelineMax({repeat: -1})
    tlBg.from(".item-bg", { attr: { opacity: 0, y: () => Math.random() * 300 - 100 + 10 }, duration: 1, stagger: 0.15})
        .to(".item-bg", { attr: { opacity: 0, x: () => Math.random() * 300 - 100 + 100 }, duration: 1, stagger: 0.15})
      
  },
  created() {
    window.addEventListener("resize",this.h1Pos);
  },
  destroyed() {
    window.removeEventListener("resize",this.h1Pos);
  },
  methods: {
    h1Pos() {
      const h1 = document.getElementsByTagName('h1')[0]
      const titlelog = document.getElementsByClassName('title-log')[0]
      const nolog = document.getElementById('nolog')

      if(window.innerWidth >= 768) {
        titlelog.prepend(h1)
      } else {
        nolog.prepend(h1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/components/panelNoLog.scss";
  @import "../scss/components/panel.scss";
</style>
