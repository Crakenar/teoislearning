<template>
  <div class="card" style="width: 18rem;">
    <img :src="imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
      <Accordion />
      <a href="#" class="btn btn-primary">{{dates}}</a>
    </div>
  </div>
</template>

<script setup>
import Accordion from "@/components/Accordion";
// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  title: String,
  description: String,
  imgUrl: String,
  dates: String
});
</script>

<style scoped lang="scss">

</style>