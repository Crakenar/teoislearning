<template>
  <div>
    <div v-html="mdHTML"></div>
  </div>
</template>

<script setup>
import {computed, defineProps} from "vue";
import {marked} from "marked";
const props = defineProps({
  urlMD: String
});
const mdHTML = computed(() => marked(props.urlMD.default ? props.urlMD.default : ''))


</script>
