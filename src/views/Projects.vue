<template>
  <div  v-if="projectList" >
    <div class="container-fluid">
      <ul class="nav justify-content-center">
        <li class="nav-item" v-for="(language) in languagesUsed" :key="language">
          <a class="nav-link text-white" @click="filter(language)">{{language}}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" @click="filter()">{{$t('PROJECT.ALL')}}</a>
        </li>
<!--        <li class="end-0">-->
<!--          <form class="d-flex">-->
<!--            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">-->
<!--          </form>-->
<!--        </li>-->
      </ul>
    </div>
    <div class="row">
      <div  v-for="(project, index) in projectList" :key="index" class="p-lg-2 col-xs-12 col-md-6 col-lg-4 content-center">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
  <div v-else class="text-center ring"> <div class="lds-dual-ring"></div> </div>
</template>

<script setup>
import ProjectCard from "@/components/ProjectCard";
import {onMounted, ref, watchEffect} from "vue";
import axios from "axios";

const projectListCache = ref([]);
const languagesUsed = ref([]);
const URL_API = 'https://api.github.com/users/Crakenar/repos?sort=updated&page=1'

function filter(tag) {
  projectList.value = projectListCache.value;
  if (tag){
    projectList.value = projectList.value.filter((p) => p.language === tag)
  }
}

//TODO : Faire en sorte que l'on obtienne une liste de projets via un ensemble de fichier de type .md ou .json a voir
//TOdo ajouter un 'store' pour i18n value ?
const projectList = ref(null);

onMounted(() => {
  if (projectListCache.value.length === 0){
    axios.get(URL_API).then((response) => {
      projectList.value = response.data
      projectListCache.value = response.data;
      for (let i = 0; i < response.data.length; i++){
        let language = response.data[i].language;
        const html = 'HTML';
        const css = 'CSS';
        if (language && (language !== html && language !== css)  && languagesUsed.value.indexOf(language) < 0){
          languagesUsed.value.push(language)
        }
      }
    });
  }
});

watchEffect(() => {
})
</script>

<style scoped lang="scss">
.content-center {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.nav-link {
  background-color: rgba(#d63384, 0.6) !important;
  margin: 10px;
  border-radius:  50rem;
  cursor: pointer;
}


.ring {
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}



</style>