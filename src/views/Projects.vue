<template>
  <div class="container-fluid">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active text-white" @click="filter('Vuejs')">Vue JS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" @click="filter('Angular')">Angular</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" @click="filter('.NetCore')">.Net Core</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" @click="filter('PHP')">PHP/Symfony</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" @click="filter('Others')">Others</a>
      </li>
      <li class="end-0">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
        </form>
      </li>
    </ul>
  </div>
  <div class="row">
    <div v-for="(project, index) in filteredList" :key="index" class="p-lg-2 col-lg-4 content-center">
      <ProjectCard :project="project"/>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard";
import {computed, ref} from "vue";
import jsonDate from "@/assets/markdown/Projects/teoislearning.json"
let search = ref('');
// let filterByTag = ref(null);

/*TODO: je n'arrive pas a faire un try par tag et via le input en meme temps (pb de pointeur ?)
*  Solution de 'remplacement' passer par une two ways binding pour le search mais pas bo
* j'aurais voulu avoir le input pour des mots genre noms de projets et avoir les tags appart et non pas qu'ils viennent
* se rattacher a la variable search */


const filteredList = computed(() =>{
  // if (filterByTag.value !== null){
  //   console.log(filterByTag)
  //   return filterByTag.value;
  // }else {
  //   return projectList.filter(project => {
  //     return project.name.toLowerCase().includes(search.value.toLowerCase())
  //         || project.technos.indexOf(search.value) >= 0})
  // }

    return projectList.filter(project => {
      return project.name.toLowerCase().includes(search.value.toLowerCase())
          || project.technos.indexOf(search.value) >= 0})
});

function filter(tag) {
  // filterByTag.value = projectList.filter(p => {
  //   return p.technos.indexOf(tag) >= 0
  // })
  search.value = tag
}

//TODO : Faire en sorte que l'on obtienne une liste de projets via un ensemble de fichier de type .md ou .json a voir
//TOdo ajouter un 'store' pour i18n value ?
const projectList = jsonDate;

</script>

<style scoped lang="scss">
.content-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>