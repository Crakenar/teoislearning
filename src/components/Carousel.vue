<template>
  <div>
    <C2 :list-tec="listTec" @techChanged="emitNewTech"/>
    <div class="row" style="margin-top: 50px;">
<!--border on hover + change color if active      -->
      <div class="col-lg-6 p-lg-4 border" :class="{active: isFEOn}" @click="changeTec('FE')">Front-End</div>
      <div class="col-lg-6 p-lg-4 border" :class="{active: isBEOn}" @click="changeTec('BE')">Back-End</div>
      <div class="col-lg-6 p-lg-4 border" :class="{active: isSFOn}" @click="changeTec('SF')">{{$t('CAROUSEL.SKILLS.SOFTSKILL')}}</div>
      <div class="col-lg-6 p-lg-4 border" :class="{active: isDBOn }" @click="changeTec('DB')">{{$t('CAROUSEL.SKILLS.DATABASE')}}</div>
    </div>
  </div>
</template>

<script setup>
import C2 from "@/components/c2";
import {Technos} from "@/Model/Technos";
import {ref, defineEmits} from "vue";


const emit = defineEmits(['newTech']);
const isFEOn = ref(true);
const isBEOn = ref(false);
const isSFOn = ref(false);
const isDBOn = ref(false);

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
      isFEOn.value = !isFEOn.value
      isDBOn.value = false;
      isBEOn.value = false;
      isSFOn.value = false;
      break;

    case 'BE':
      listTec.value = [
          new Technos('netcore',require('../assets/img/Presentation/icons/netcore.svg'))
      ];
      isBEOn.value = !isBEOn.value
      isFEOn.value = false;
      isDBOn.value = false;
      isSFOn.value = false;
      break;

    case 'SF':
      listTec.value = [
        new Technos('curious',require('../assets/img/Presentation/carousel/softskills/curieux.png')),
        new Technos('attentif',require('../assets/img/Presentation/carousel/softskills/attentif.png'))
      ]
      isSFOn.value = !isSFOn.value
      isFEOn.value = false
      isDBOn.value = false;
      isBEOn.value = false;
      break;

    case 'DB':
      listTec.value = [
        new Technos('mysql',require('../assets/img/Presentation/icons/mysql.svg'))
      ]
      isDBOn.value = !isDBOn.value
      isFEOn.value = false;
      isBEOn.value = false;
      isSFOn.value = false;
      break;
  }
}
</script>

<style scoped lang="scss">
.active {
  background-color: #8360c3;
}
</style>