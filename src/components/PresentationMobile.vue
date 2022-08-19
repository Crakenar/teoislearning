<template>
  <div class="d-sm-block d-md-block d-lg-none">
    <div class="flag-cat">
      <img :src="URL_PROFIL_PIC" alt="profil pictures">
    </div>
    <div id="accordionExample" class="accordion">
      <div class="accordion-item">
        <h2 id="heading" class="accordion-header">
          <button aria-controls="collapse" aria-expanded="true" class="accordion-button" data-bs-target="#collapse"
                  data-bs-toggle="collapse" type="button">
            {{ $t('PRESENTATION.ABOUTME')}}
          </button>
        </h2>
        <div id="collapse" aria-labelledby="heading" class="accordion-collapse collapse show"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <h6><cite> <strong> {{ $t('PRESENTATION.NAME') }} : </strong></cite> T&eacute;o Berguerre</h6>
            <h6><cite> <strong> {{ $t('PRESENTATION.CODENAME') }} : </strong></cite> Crakenar </h6>
            <h6><cite> <strong> {{ $t('PRESENTATION.OCCUPATION') }} : </strong></cite> {{ $t('PRESENTATION.OCCUPATION2') }}</h6>
            <h6><cite> <strong> {{ $t('PRESENTATION.MAIL') }} : </strong></cite> teo.berguerre&commat;teoislearning.com</h6>
            <h6 class="l6"><cite> <strong> {{ $t('PRESENTATION.ADDRESS') }} : </strong></cite> 10 place des Jacobins 38130,
              Echirolles</h6>
            <h6><cite> <strong> {{ $t('PRESENTATION.HOBBIES') }} : </strong></cite>{{ $t('PRESENTATION.HOBBIES2') }}</h6>
            <h6>
              <cite>
                <strong> {{ $t('PRESENTATION.CHARACTERISTICS') }} : </strong>
              </cite>
              {{ $t('PRESENTATION.CHARACTERISTICS2') }}</h6>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingOne" class="accordion-header">
          <button aria-controls="collapseOne" aria-expanded="true" class="accordion-button" data-bs-target="#collapseOne"
                  data-bs-toggle="collapse" type="button">
            Front-End
          </button>
        </h2>
        <div id="collapseOne" aria-labelledby="headingOne" class="accordion-collapse collapse"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row text-center">
              <div class="col">
                <code>VueJS</code>
                <div class="m-2">
                  <img :src="URL_VUE" alt="">
                </div>
              </div>
              <div class="col">
                <code>Angular</code>
                <div class="m-2">
                  <img :src="URL_ANGULAR" alt="">
                </div>
              </div>
              <div class="col">
                <code>Bootstrap</code>
                <div class="m-2">
                  <img :src="URL_BOOTSTRAP" alt="">
                </div>
              </div>
              <div class="col">
                <code>SASS</code>
                <div class="m-2">
                  <img :src="URL_SASS" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
          <button aria-controls="collapseTwo" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#collapseTwo" data-bs-toggle="collapse" type="button">
            Back-End
          </button>
        </h2>
        <div id="collapseTwo" aria-labelledby="headingTwo" class="accordion-collapse collapse"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row text-center">
              <div class="col">
                <code>.NetCore</code>
                <div class="m-2">
                  <img :src="URL_DOTNET" alt="">
                </div>
              </div>
              <div class="col">
                <code>EF Core</code>
                <div class="m-2">
                  <img :src="URL_EFCORE" alt="">
                </div>
              </div>
              <div class="col">
                <code>MYSQL</code>
                <div class="m-2">
                  <img :src="URL_MYSQL" alt="">
                </div>
              </div>
              <div class="col">
                <code>SQL Server</code>
                <div class="m-2">
                  <img :src="URL_SQLSERVER" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingTools" class="accordion-header">
          <button aria-controls="collapseTools" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#collapseTools" data-bs-toggle="collapse" type="button">
            {{$t('PRESENTATION.TOOLS')}}
          </button>
        </h2>
        <div id="collapseTools" aria-labelledby="headingTools" class="accordion-collapse collapse"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div class="row text-center">
              <div class="col">
                <code>Git</code>
                <div class="m-2">
                  <img :src="URL_GIT" alt="">
                </div>
              </div>
              <div class="col">
                <code>Docker</code>
                <div class="m-2">
                  <img :src="URL_DOCKER" alt="">
                </div>
              </div>
              <div class="col">
                <code>Webstorm</code>
                <div class="m-2">
                  <img :src="URL_WEBSTORM" alt="">
                </div>
              </div>
              <div class="col">
                <code>Rider</code>
                <div class="m-2">
                  <img :src="URL_RIDER" alt="">
                </div>
              </div>
              <div class="col">
                <code>MySQL Workbench</code>
                <div class="m-2">
                  <img :src="URL_MYSQLWORKBENCH" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 id="headingThree" class="accordion-header">
          <button aria-controls="collapseThree" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#collapseThree" data-bs-toggle="collapse" type="button">
            {{ $t('PRESENTATION.FEWWORDS')}}
          </button>
        </h2>
        <div id="collapseThree" aria-labelledby="headingThree" class="accordion-collapse collapse"
             data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{$t('PRESENTATION.FEWWORDS2')}}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// make a file to load images ??
const URL_PROFIL_PIC = require('../assets/img/Presentation/1655844360365.jpeg');

const URL_ANGULAR = require("@/assets/img/Presentation/icons/angular.svg");
const URL_VUE = require("@/assets/img/Presentation/icons/vuejs.svg");
const URL_SASS = require("@/assets/img/Presentation/icons/Sass.png");
const URL_BOOTSTRAP = require("@/assets/img/Presentation/icons/Bootstrap.png");

const URL_GIT = require("@/assets/img/Presentation/icons/git.png");
const URL_DOCKER = require("@/assets/img/Presentation/icons/docker.png");
const URL_WEBSTORM = require("@/assets/img/Presentation/icons/webstorm.png")
const URL_RIDER = require("@/assets/img/Presentation/icons/rider.png");
const URL_MYSQLWORKBENCH = require("@/assets/img/Presentation/icons/mysqlWorkbench.png")

const URL_DOTNET = require("@/assets/img/Presentation/icons/netcore.svg");
const URL_EFCORE = require("@/assets/img/Presentation/icons/EFCore.png")
const URL_MYSQL = require('../assets/img/Presentation/icons/mysql.svg');
const URL_SQLSERVER = require("@/assets/img/Presentation/icons/SQLServer.jpg")
</script>

<style lang="scss" scoped>
.flag-cat {
  height: 400px;
  width: 300px;
  margin: 40px auto auto;

  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
    border-radius: 20px;
  }
}

.accordion {
  margin: 10%;

  .accordion-body {
    img {
      width: 100px;
      height: 100px;
    }
  }

}


</style>