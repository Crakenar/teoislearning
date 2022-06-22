<template>
  <div class="row">
    <div class="col flag-cat">
      <img :src="URL_PROFIL_PIC" alt="profil pictures">
    </div>
    <div class="col ">
      <!--Faire une box de code avec les couleurs si possibles pour dire mon nom prenom age addresse etc      -->
      <div class="code-block">
        <h2 class="l2"> <cite> <strong> {{ $t('PRESENTATION.NAME')}} : </strong></cite> T&eacute;o  Berguerre</h2>
        <h2 class="l3"> <cite> <strong> {{ $t('PRESENTATION.CODENAME')}} : </strong></cite> Crakenar </h2>
        <h2 class="l4"> <cite> <strong> {{ $t('PRESENTATION.OCCUPATION')}} : </strong></cite> {{ $t('PRESENTATION.OCCUPATION2')}}</h2>
        <h2 class="l5"> <cite> <strong> {{ $t('PRESENTATION.MAIL')}} : </strong></cite> teo.berguerre&commat;hotmail.com </h2>
        <h2 class="l6"> <cite> <strong> {{ $t('PRESENTATION.ADDRESS')}} : </strong></cite> 10 place des Jacobins 38130, Echirolles</h2>
        <h2 class="l7"> <cite> <strong> {{ $t('PRESENTATION.HOBBIES')}} : </strong></cite> {{ $t('PRESENTATION.HOBBIES2')}}</h2>
        <h2 class="l8"> <cite> <strong> {{ $t('PRESENTATION.CHARACTERISTICS')}} : </strong></cite> {{ $t('PRESENTATION.CHARACTERISTICS2')}}</h2>
        <div class="row">
        </div>
        <i></i>
      </div>
    </div>
  </div>
  <div class="row" style="margin-top: 200px">
    <div class="col text-center">
      <p style="text-align: left">Level : {{yearExp}}</p>
      <div class="col dresseur"> <img :src="URL_DRESSEUR_PIC" alt="icon of an angular image"></div>
      <div class="progress">
        <div class="progress-bar" :style="stringFinal"></div>
      </div>
      <div class="row">
        <div class="col">Connaissances  {{yearExp}}</div>
        <div class="col">Apprentissage</div>
      </div>
    </div>
    <div class="col">
      <Carousel />
    </div>
  </div>
  <div class="row" style="text-align: center">
    <div class="code-block"></div>
  </div>

</template>
<script setup>
import moment from 'moment';
import Carousel from './Carousel'

let month = moment().format('M');
let percentageMonthWidth = month / 12 * 100;
let stringFinal = 'width : ' + percentageMonthWidth + '%';
let yearExp = moment("2020", "YYYY").fromNow().slice(0,2);

const URL_PROFIL_PIC = require('../assets/img/Presentation/1655844360365.jpeg');
const URL_DRESSEUR_PIC = require('../assets/img/Presentation/dresseur.gif');
</script>

<style scoped lang="scss">
@import '../assets/SCSS/presentation.scss';
</style>
