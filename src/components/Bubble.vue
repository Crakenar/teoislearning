<template>
  <div v-if="isAttack" class="" :class="{'bubble fade-in-fade-out': props.isAttack}">
    <div>
      <h3>{{bubbleText.id.toUpperCase()}}</h3>
    </div>
    <div v-if="$i18n.locale === 'fr'">
      {{bubbleText.descriptionFR}}
    </div>
    <div v-else>{{bubbleText.descriptionEN}}</div>
  </div>
</template>

<script setup>
//Ce composant pourrait etre un slot
import {defineProps, ref, watch} from "vue";
import {store} from "@/Store";
import json from '@/assets/TechSkill/TechSkillconfig.json';
const props = defineProps({
  isAttack: null
})

const bubbleText  = ref(null);
// on pourrait utiliser un watch effet sur le store ?
watch(() => {
  if (store.SkillSelected && store.TechSelected){
    const listTechList = json.find(item => item.idSkill === store.SkillSelected);
    bubbleText.value = listTechList.TechList.find(item => item.id === store.TechSelected)
  }
});

</script>

<style scoped>
.bubble {
  height: 120px;
  width: 400px;
  background: white;
  position: absolute;
  top: 50%;
  left: 25%;
  border-radius: 40px;
}


.fade-in-fade-out {
  animation: fade-in 1s ease forwards, fade-out 1s ease forwards;
  animation-delay: 0s, 6s;
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

</style>