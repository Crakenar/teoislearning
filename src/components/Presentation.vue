<template>
  {{props}}
  <div class="row">
    <div class="col">
      <img :src="URL_PROFIL_PIC" alt="profil pictures">
    </div>
    <div class="col">

    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  msg: String
});

const URL_PROFIL_PIC = '../assets/Presentation/ImageTeoSki.jpeg'
</script>

<style scoped lang="scss">
.row {
  text-align: center;
  max-height: 1080px;
}
</style>
