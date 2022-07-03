<template>
  <div class="container-fluid">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link text-white" href="#">2019</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">2020</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">2022</a>
      </li>
      <li class="end-0">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
        </form>
      </li>
    </ul>
  </div>
  <div class="content-center">
    <div v-for="(project, index) in filteredList" :key="index" class="p-lg-2">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script setup>
import {Projet} from "@/Model/Projet.js";
import ProjectCard from "@/components/ProjectCard";
import {computed, ref} from "vue";
let search = ref("");

const filteredList = computed(() =>{
  return projectList.filter(project => {
    return project.technos.indexOf(search.value.toLowerCase()) >= 0})
});


//TODO : Faire en sorte que l'on obtienne une liste de projets via un ensemble de fichier de type .md ou .json a voir
//TOdo ajouter un 'store' pour i18n value ?
const projectList = [
  new Projet(
      'TeoisLearning',
      'Simple projet pour ',
      'Simple project to ',
      require('../assets/img/logo/logo_small_icon_only_inverted.png'),
      'https://github.com/Crakenar/teoisleaning',
      ['Vuejs', 'SCSS'],
      new Date()
  ),
  new Projet(
      'Yikes Ang',
      'Simple project to XXX',
      'Simple project to ',
      require('../assets/img/Presentation/dresseur.gif'),
      'https://github.com/Crakenar/teoisleaning',
      ['Angular', 'SCSS'],
      new Date()
  ),
  new Projet(
      'Yikes',
      'Simple project to XXX',
      'Simple project to ',
      '../assets/img/logo/logo_white_large.png',
      'https://github.com/Crakenar/teoisleaning',
      ['React', 'SCSS'],
      new Date()
  ),
  new Projet(
      'Yikes',
      'Simple project to XXX',
      'Simple project to ',
      '../assets/img/logo/logo_white_large.png',
      'https://github.com/Crakenar/teoisleaning',
      ['.NetCore', 'SCSS'],
      new Date()
  )
]
</script>

<style scoped lang="scss">
.content-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>