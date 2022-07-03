<template>
  <div class="card" style="width: 18rem;">
    <img :src="props.project.imgUrl" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{props.project.name}}</h5>
      <p class="card-text" v-if="$i18n.locale === 'fr'">{{props.project.descriptionFR}}</p>
      <p class="card-text" v-else>{{props.project.descriptionEN}}</p>
      <p class="card-text">{{props.project.technos}}</p>
      <a :href="props.project.githubUrl" target="_blank" class="btn btn-primary">Lien Github</a>
    </div>
  </div>
</template>

<script setup>
import {Projet} from "@/Model/Projet";
import {defineProps} from "vue";
const props = defineProps({
  project: Projet
});

</script>

<style scoped lang="scss">
.card {
  img {
    height: 100px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>