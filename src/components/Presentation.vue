<template>
  <div class="d-none d-lg-block">
    <div class="row">
      <div class="col flag-cat">
        <img :src="URL_PROFIL_PIC" alt="profil pictures">
      </div>
      <div class="col">
        <!--Faire une box de code avec les couleurs si possibles pour dire mon nom prenom age addresse etc      -->
        <div class="code-block">
          <h2 class="l2"><cite> <strong> {{ $t('PRESENTATION.NAME') }} : </strong></cite> T&eacute;o Berguerre</h2>
          <h2 class="l3"><cite> <strong> {{ $t('PRESENTATION.CODENAME') }} : </strong></cite> Crakenar </h2>
          <h2 class="l4"><cite> <strong> {{ $t('PRESENTATION.OCCUPATION') }} : </strong></cite>
            {{ $t('PRESENTATION.OCCUPATION2') }}</h2>
          <h2 class="l5"><cite> <strong> {{ $t('PRESENTATION.MAIL') }} : </strong></cite> teo.berguerre&commat;teoislearning.com
          </h2>
          <h2 class="l6"><cite> <strong> {{ $t('PRESENTATION.ADDRESS') }} : </strong></cite> 10 place des Jacobins 38130,
            Echirolles</h2>
          <h2 class="l7"><cite> <strong> {{ $t('PRESENTATION.HOBBIES') }} : </strong></cite>
            {{ $t('PRESENTATION.HOBBIES2') }}</h2>
          <h2 class="l8"><cite> <strong> {{ $t('PRESENTATION.CHARACTERISTICS') }} : </strong></cite>
            {{ $t('PRESENTATION.CHARACTERISTICS2') }}</h2>
          <div class="row">
          </div>
          <i></i>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 200px">
      <div class="col">
        <div id="dresser" class="col dresseur" :class="{'loadBubble slide-left': isAttack}">
          <img :src="URL_DRESSEUR_PIC" alt="icon of an angular image">
        </div>
        <Bubble :is-attack="isAttack"/>
        <div class="imgLevel" data-bs-toggle="tooltip" title="how many years of experience since my first internship">
          <img :src="URL_LEVEL" alt="free icon of a level by Freepik">
          <span>{{ yearExp }}</span>
        </div>
        <div class="progress" style="margin: 10px;">
          <div :style="stringFinal" class="progress-bar"></div>
        </div>
        <div class="code-block2 row attack">
          <div class="col-lg-6 pt-lg-3 border" :class="{'forbidden': capacityNumber === 1}" @click="attack(1)"><i class="i--1"></i>{{$t('ATTACKS.MASTERY')}}</div>
          <div class="col-lg-6 pt-lg-3 border" :class="{'forbidden': capacityNumber === 2}" @click="attack(2)"><i class="i--2"></i>{{$t('ATTACKS.LEARNINGCURVE')}}</div>
          <div class="col-lg-6 pt-lg-3 border" :class="{'forbidden': capacityNumber === 3}" @click="attack(3)"><i class="i--3"></i>{{$t('ATTACKS.INTEREST')}}</div>
          <div class="col-lg-6 pt-lg-3 border" :class="{'forbidden': capacityNumber === 4}" @click="attack(4)"><i class="i--4"></i>{{$t('ATTACKS.ESCAPE')}}</div>
        </div>
      </div>
      <div class="col">
        <Carousel/>
      </div>
    </div>
  </div>
</template>
<script setup>
import moment from 'moment';
import Carousel from './Carousel'
import Bubble from '@/components/Bubble';
import {onMounted, ref} from "vue";
import {store} from "@/Store";


let dresser;
const capacityNumber = ref(0);
const isAttack = ref(false);
let month = moment().format('M');
let percentageMonthWidth = month / 12 * 100;
let stringFinal = 'width : ' + percentageMonthWidth + '%';
let yearExp = moment("2020", "YYYY").fromNow().slice(0, 2);

const URL_PROFIL_PIC = require('../assets/img/Presentation/1655844360365.jpeg');
const URL_DRESSEUR_PIC = require('../assets/img/Presentation/dresseur.gif');
const URL_LEVEL = require('../assets/img/Presentation/icons/level-up.png');

function attack(value) {
  isAttack.value = false;
  store.changeSkill(value);
  isAttack.value = !isAttack.value;
  capacityNumber.value = value;
}
let x = 0;
function endAnimationListener(event) {
  switch (event.type) {
    case "animationend":
        x = x + 1;
        //if x === 2/4/6/8... means a full animation ended idk why if i put x declaration in animationlistener it reset every time
        // bc I declaredthe eventListener only one time during the mount event
      if (x%2 === 0){
        console.log('final animation completed')
        isAttack.value = false;
      }
      break;
  }
}

onMounted(() => {
  dresser = document.getElementById('dresser');
  dresser.addEventListener("animationend", endAnimationListener, false);
})
</script>

<style lang="scss" scoped>
@import '../assets/SCSS/presentation.scss';
.attack {
  .i {
    width: 0!important;
    height: 0!important;
    border:10px solid transparent;
    border-left-color: black;
    margin-top: 23px;
    animation: bounce 1s ease infinite;
    position: absolute;
    &--1 {
      @extend .i;
      left: 13%;
      top: 0;
    }
    &--2 {
      @extend .i;
      left: 65%;
      top: 0;
    }
    &--3 {
      @extend .i;
      left: 13%;
      top: 44%;
    }
    &--4 {
      @extend .i;
      left: 65%;
      top: 44%;
    }
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
    40% {transform: translateX(-3px);}
    60% {transform: translateX(-5px);}
  }
   > div {

   }
  &:hover {
    cursor: grab;

  }
}

.forbidden {
  pointer-events: none;
  background-color: mediumvioletred;
  cursor: not-allowed!important;
  &:hover {
    cursor: not-allowed!important;
  }

  > i {
    visibility: hidden;
  }
}
.slide-left {
  animation: fade-out-left 1s ease forwards, fade-out-right 1s ease forwards;
  animation-delay: 0s, 6s;
}

@keyframes fade-out-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%);
  }
}

@keyframes fade-out-right {
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>
