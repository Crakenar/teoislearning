<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container px-4 px-lg-1">
        <router-link class="navbar-brand" to="/">
          <img :src="logo" alt="logo teoislearning">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" style="display: flex">
            <li class="nav-item"><router-link class="nav-link active" to="/home">{{ $t('NAV.HOME')}}</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/projects">{{ $t('NAV.PROJECTS')}}</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/experiences">{{ $t('NAV.EXPERIENCES')}}</router-link></li>
          </ul>
          <div class="row ">
            <div class="col flag-cat ">
              <img :src="frF" alt="image of the french flag to choose the language french">
            </div>
            <div class="col ">
              <div class=" form-switch">
                <input class="form-check-input" @change="$i18n.locale === 'fr' ? $i18n.locale = 'en' : $i18n.locale = 'fr' " type="checkbox" id="flexSwitchLanguage">
              </div>
            </div>
            <div class="col flag-cat ">
              <img :src="engF" alt="image of the english flag to choose the language english">
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <router-view></router-view>

</template>

<script setup>
let logo = require('./assets/img/logo/logo_small.png');
let engF = require('./assets/img/nav/enFlag.svg.png');
let frF = require('./assets/img/nav/Flag_of_France.svg.webp');

</script>

<style lang="scss" scoped>

.navbar-brand {
  width: 20%;
  img {
    width: 100%;
  }
}

.row {
  padding: 0!important;
  margin: 0!important;

  .flag-cat {
    height: 30px;
    width: 30px;
    padding: 0!important;
    margin: 0!important;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

header {
  //background: #c31432;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to right, #240b36, #c31432);


  background: #8360c3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2ebf91, #8360c3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

} /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



</style>
