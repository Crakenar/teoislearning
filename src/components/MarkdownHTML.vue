<template>
  <div>
    <div v-html="mdHTML"></div>
  </div>
</template>

<script setup>
//make it a slot ?
import {computed, defineProps} from "vue";
import {marked} from "marked";
const props = defineProps({
  descriptionMD: String
});
const mdHTML = computed(() => marked(props.descriptionMD ? props.descriptionMD : ''))


</script>
