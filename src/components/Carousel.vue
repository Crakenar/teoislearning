<template>
  <div>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
      <div class="carousel-inner">
        <div  v-for="(icons, index) in listIconFight" :key="index"
              class="carousel-item" :class="index === 0 ? 'active' : ''">
          <img  :src="icons" class="w-25">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="row" style="margin-top: 50px;">
<!--border on hover + change color if active      -->
      <div class="col-lg-6 p-lg-5 border">Front-End</div>
      <div class="col-lg-6 p-lg-5 border">Back-End</div>
      <div class="col-lg-6 p-lg-5 border">Soft-Skills</div>
      <div class="col-lg-6 p-lg-5 border"> jsp</div>
    </div>
  </div>
</template>

<script setup>
const listIconFight = [
  require('../assets/img/Presentation/icons/angular.svg'),
  require('../assets/img/Presentation/icons/vuejs.svg'),
  require('../assets/img/Presentation/icons/react.svg'),
  require('../assets/img/Presentation/icons/netcore.svg')
]
</script>

<style scoped lang="scss">
.carousel-item {


  img {
    height: 200px;
  }
}
</style>