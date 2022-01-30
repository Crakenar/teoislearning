<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <h2>{{ $t('message')}}</h2>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  msg: String
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
