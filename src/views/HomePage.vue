<template>
  <div>
    <div class="content">
      <div class="img">
        <img :src="require('../assets/img/ImageTeoSki.png')" class="grow" alt="...">
      </div>
      <div class="buttons">
        <button class="btn btn-info m-3 bounce-in-left">Mon Github</button>
        <button class="btn btn-info m-3 bounce-in-right">Mon CV</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped lang="scss">

.content {
  margin-top: 5%;
  text-align: center;
  img {
    width: 20%;
    border-radius: 10px;
  }

  .bounce-in-right {
    animation: bounce-in-right 2s ease;
  }
  @keyframes bounce-in-right {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(-30px);
    }
    80% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }

  .bounce-in-left {
    animation: bounce-in-left 2s ease;
  }
  @keyframes bounce-in-left {
    0% {
      opacity: 0;
      transform: translateX(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(30px);
    }
    80% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }


  .grow {
    animation: grow 2s ease;
  }
  @keyframes grow {
    from { transform: scale(0); }
    to { transform: scale(1); }
  }

}

@media only screen and (max-width: 500px) {
  .content{
    margin-top: 20%;
  }
  img{
    width: 60%!important;
  }
}
@media only screen and (min-width: 500px) and (max-width: 700px) {
  .content{
    margin-top: 15%;
  }
  img{
    width: 40%!important;
  }
}
@media only screen and (min-width: 701px) and (max-width: 933px) {
  .content{
    margin-top: 10%;
  }
  img{
    width: 30%!important;
  }
}
</style>