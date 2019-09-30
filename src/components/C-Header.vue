<template>
  <div>
    <header>
      <div class="imgUser">
        <img src="@/assets/img/imgUser.jpeg" alt="">
      </div>
      <h1 class="titlePage">David Artero Martin</h1>
      <div class="contactInfo">
        <div class="contactEmail"><a href=""><img src="@/assets/img/computer-tablet.png" alt=""></a></div>
        <h2 class="subTitle">Junior Front-end Developer</h2>
        <div class="contactPhone"><a href=""><img src="@/assets/img/gmail.png" alt=""></a></div>
      </div>
      <div class="navegation">
        <cNav/>
      </div>
    </header>
  </div>
</template>

<script>
import cNav from '../components/C-Nav.vue'
export default {
  components: {
    cNav
  }
}
</script>

<style scoped>

@font-face{
  font-family: fontPirate;
  src: url(../assets/fonts/PirataOne-Regular.ttf);
}

header {
  font-family: fontPirate;
  border: 1px solid white;
  background-image: url("../assets/img/fondo-oscuro2.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

h1{
  text-align: center;
  color: rgb(158, 157, 160);
}

header > div{
  margin: 20px;
}

.imgUser{
  padding: 10px;
  text-align: center;
}

.imgUser img{
  width: 200px;
  height: 200px;
  border: 5px solid white;
  box-shadow: 10px;
  border-radius: 100%;
}

.contactInfo{
  display: flex;
  margin: 20px;
}

.contactInfo > div{
  flex: 1;
  margin: auto;
}

.contactEmail{
  text-align: end;
}

.contactEmail img{
  padding: 2px;
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  width: 50px;
}

.contactPhone img{
  padding: 2px;
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  width: 50px;
}

.subTitle{
  margin-left: 2%;
  margin-right: 2%;
  text-align: center;
  color: rgb(158, 157, 160);
}

</style>