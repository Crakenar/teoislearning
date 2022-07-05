<template>
  <div>
    <C2 :list-tec="listTec" @techChanged="emitNewTech"/>
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
import {Technos} from "@/Model/Technos";
import {ref, defineEmits} from "vue";


const emit = defineEmits(['newTech']);
let isFEOn = true;
let isBEOn,isSFOn,isDBOn = false;

/* WE have here 2 times an emit (c2 -> Carousel -> Presentation),
   we may use a store to improve code readability and scalability
*/
function emitNewTech(value) {
  if (value){
    emit('newTech', value)
  }
}

let listTec = ref([
      new Technos('angular',require("@/assets/img/Presentation/icons/angular.svg")),
      new Technos('vuejs',require("@/assets/img/Presentation/icons/vuejs.svg")),
      new Technos('react',require("@/assets/img/Presentation/icons/react.svg"))
]);

function changeTec(tec) {
  switch (tec) {
    case 'FE':
      listTec.value = [
        new Technos('angular',require('../assets/img/Presentation/icons/angular.svg')),
        new Technos('vuejs',require('../assets/img/Presentation/icons/vuejs.svg')),
        new Technos('react',require('../assets/img/Presentation/icons/react.svg'))
      ]
      this.isFEOn = !this.isFEOn
      this.isDBOn = false;
      this.isBEOn = false;
      this.isSFOn = false;
      break;

    case 'BE':
      listTec.value = [
          new Technos('netcore',require('../assets/img/Presentation/icons/netcore.svg'))
      ];
      this.isBEOn = !this.isBEOn
      this.isFEOn = false;
      this.isDBOn = false;
      this.isSFOn = false;
      break;

    case 'SF':
      listTec.value = [
        new Technos('curious',require('../assets/img/Presentation/carousel/softskills/curieux.png')),
        new Technos('attentif',require('../assets/img/Presentation/carousel/softskills/attentif.png'))
      ]
      this.isSFOn = !this.isSFOn
      this.isFEOn = false
      this.isDBOn = false;
      this.isBEOn = false;
      break;

    case 'DB':
      listTec.value = [
        new Technos('mysql',require('../assets/img/Presentation/icons/mysql.svg'))
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