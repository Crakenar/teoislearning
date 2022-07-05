<template>
  <div id="carousel" class="carousel" data-bs-interval="false" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="({id, logoURL}, index) in props.listTec" :id="id"
           :key="id"
           :class="index === 0 ? 'active' : ''" class="carousel-item">
        <img :alt="id" :src="logoURL" class="w-25">
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carousel" type="button"
            @click="detectNewTech">
      <span aria-hidden="true" class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carousel" type="button"
            @click="detectNewTech">
      <span aria-hidden="true" class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import {defineEmits, defineProps, onMounted, onUpdated} from "vue";

const props = defineProps({
  listTec: Array,
})

const emit = defineEmits(['techChanged']);
let tech = "";

function detectNewTech() {
  //IF CAROUSEL WITH SLIDE -> DELAY FOR .ACTIVE TO GO ON THE HTML ELEMENT
  // SO WE NEED TO WAIT FOR IT BC WE SEACH FOR IT TO SEE WICH TECH IS SEEN ELSE N-1
 /*   function sleep(ms) {
      return new Promise(
          resolve => setTimeout(resolve, ms)
      );
    }
  await sleep(1000);
*/
  let tecHTML = document.getElementsByClassName('carousel-item active');
  if (tecHTML) {
    tech = tecHTML[0].id;
    emit('techChanged', tech);
  }
}


onMounted(() => {
  detectNewTech();
});

//pour lorsque l'on change entre front/back bdd etc
onUpdated(() => {
  detectNewTech();
})

</script>

<style lang="scss" scoped>
.carousel-item {
  img {
    height: 200px;
  }
}
</style>
