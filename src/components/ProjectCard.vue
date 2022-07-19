<template>
  <div>
    <div class="card" style="width: 24rem; height: 220px;">
      <div class="ring" v-if="ongoing"></div>
      <span class="status" v-if="ongoing">{{$t('PROJECT.PROGRESS')}}</span>
      <span class="status-done" v-else>{{$t('PROJECT.FINISHED')}}</span>
      <div class="card-body">
        <h5 class="card-title">{{props.project.name}} </h5>
        <div  class="card-text" style=" margin-top: 30px">
          <div>{{props.project.description}}</div>
          <div class="footer-badge">
            <p v-if="props.project.language" class="badge rounded-pill bg-info">
              {{props.project.language}}
            </p>
            <p v-else class="badge rounded-pill bg-info">{{$t('PROJECT.NONE')}}</p>
            <p>{{lastUpdate}}</p>
            <p class="badge rounded-pill bg-info"><a style="" :href="props.project.html_url" target="_blank">Lien Github</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from 'moment'
import {computed, defineProps} from "vue";
const props = defineProps({
  project: Object,
});
const lastUpdate = computed(() => moment(props.project.updated_at).format('LL'))

const ongoing = computed(() => {
  const updatedYear = moment(props.project.updated_at).format('YYYY');
  const updatedMonth = moment(props.project.updated_at).format('MM');
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();
  return actualYear - updatedYear < 1 && actualMonth - updatedMonth < 2;
});
/*TODO: remplace the loading/ongoing animation by me own -> idea : same as tik tok*/
</script>

<style scoped lang="scss">
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
$top: 30px !default;
.status{
  position: absolute;
  right: 5px;
  top: $top;
  font-size: .9rem;

  &--done {
    @extend .status;
    top: 10px;
  }
}
.status-done{
  position: absolute;
  right: 5px;
  font-size: .9rem;
}

.updateDate {
  margin-top: 15px;
}

.footer-badge {
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>