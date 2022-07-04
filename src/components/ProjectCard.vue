<template>
  <div>
    <a data-bs-toggle="modal" :data-bs-target="'#' + props.project.name.toLowerCase().split(' ').join('')" class="card" style="width: 18rem; max-height: 350px; overflow-y: hidden">
      <div class="ring" v-if="props.project.ongoing === 'true'"></div>
      <span class="status" v-if="props.project.ongoing === 'true'">En cours</span>
      <span class="status" v-else>Finis</span>
      <img :src="require('../assets/img/Projets/' +props.project.imgUrl)" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{props.project.name}}</h5>
        <p class="card-text">{{props.project.technos.slice(0,3)}}</p>
      </div>
    </a>

    <!-- Modal -->
    <div class="modal fade" :id="props.project.name.toLowerCase().split(' ').join('')"
         tabindex="-1" :aria-labelledby="props.project.name.toLowerCase().split(' ').join('')" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{props.project.name}}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-lg-9" style="border-right: 2px solid black">
                <p class="card-text" v-if="$i18n.locale === 'fr'">{{props.project.descriptionFR}}</p>
                <p class="card-text" v-else>{{props.project.descriptionEN}}</p>
              </div>
              <div class="col-lg-3">
                <img :src="require('../assets/img/Projets/' +props.project.imgUrl)" class="card-img-top" alt="...">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a :href="props.project.githubUrl" target="_blank" class="btn btn-info github">Lien Github</a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Projet} from "@/Model/Projet";
import {defineProps} from "vue";
const props = defineProps({
  project: Projet,
});
/*TODO: remplace the loading/ongoing animation by me own -> idea : same as tik tok*/

</script>

<style scoped lang="scss">
.card {
  img {
    height: 120px;
    width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
}

a, a:hover,a:visited,a:focus, a:active  {
  text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: pointer;
}

.ring {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ring 2s linear infinite;


  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 1px rgba(255,255,255, 0.3);
  }
}

@keyframes ring {
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 1px #e65c00;
  }

  50% {
    transform: rotate(180deg);
    box-shadow: 1px 5px 1px #18b201;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 1px #0456c8;
  }
}

.status{
  position: absolute;
  right: 5px;
  top: 30px;
  font-size: .6rem;
}

</style>