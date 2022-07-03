<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
    <div class="carousel-inner">
      <div  v-for="(icons, index) in props.listTec" :key="icons"
            class="carousel-item" :class="index === 0 ? 'active' : ''">
        <img  :src="icons" class="w-25" :alt="icons">
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
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  listTec: Array,
})

</script>

<style lang="scss" scoped>
.carousel-item {


  img {
    height: 200px;
  }
}
</style>
