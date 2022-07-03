<template>
  <div>
    <c2 :list-tec="listTec" :key="refresh" />
    <div class="row" style="margin-top: 50px;">
<!--border on hover + change color if active      -->
      <div class="col-lg-6 p-lg-4 border" :class="isFEOn ? 'active' :'' " @click="changeTec('FE')">Front-End</div>
      <div class="col-lg-6 p-lg-4 border" :class="isBEOn ? 'active' :'' " @click="changeTec('BE')">Back-End</div>
      <div class="col-lg-6 p-lg-4 border" :class="isSFOn ? 'active' :'' " @click="changeTec('SF')">{{$t('CAROUSEL.SKILLS.SOFTSKILL')}}</div>
      <div class="col-lg-6 p-lg-4 border" :class="isDBOn ? 'active' :'' " @click="changeTec('DB')">{{$t('CAROUSEL.SKILLS.DATABASE')}}</div>
    </div>
  </div>
</template>

<script setup>
import C2 from "@/components/c2";
import {ref} from "vue";

let isFEOn = true;
let isBEOn,isSFOn,isDBOn = false;

let listTec = ref([
  require('../assets/img/Presentation/icons/angular.svg'),
  require('../assets/img/Presentation/icons/vuejs.svg'),
  require('../assets/img/Presentation/icons/react.svg'),
]);

function changeTec(tec) {
  switch (tec) {
    case 'FE':
      listTec.value = [
        require('../assets/img/Presentation/icons/angular.svg'),
        require('../assets/img/Presentation/icons/vuejs.svg'),
        require('../assets/img/Presentation/icons/react.svg'),
      ]
      this.isFEOn = !this.isFEOn
      this.isDBOn = false;
      this.isBEOn = false;
      this.isSFOn = false;
      break;

    case 'BE':
      listTec.value = [
        require('../assets/img/Presentation/icons/netcore.svg')
      ];
      this.isBEOn = !this.isBEOn
      this.isFEOn = false;
      this.isDBOn = false;
      this.isSFOn = false;
      break;

    case 'SF':
      listTec.value = [
        require('../assets/img/Presentation/carousel/softskills/curieux.png'),
        require('../assets/img/Presentation/carousel/softskills/attentif.png')
      ]
      this.isSFOn = !this.isSFOn
      this.isFEOn = false
      this.isDBOn = false;
      this.isBEOn = false;
      break;

    case 'DB':
      listTec.value = [
        require('../assets/img/Presentation/icons/mariadb.svg'),
        require('../assets/img/Presentation/icons/mysql.svg')
      ]
      this.isDBOn = !this.isDBOn
      this.isFEOn = false;
      this.isBEOn = false;
      this.isSFOn = false;
      break;
  }
}
</script>

<style scoped lang="scss">
.active {
  background-color: #8360c3;
}
</style>