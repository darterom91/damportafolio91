<template>
  <div>
    <header>
      <div class="contacts">
        <div class="imgUser">
          <img src="@/assets/img/imgUser.jpeg" alt="">
        </div>
        <div class="name"><h1 class="titlePage">David Artero Martin</h1></div>
        <div class="contactInfo">
          <div class="contactEmail"><a href=""><img src="@/assets/img/computer-tablet.png" alt=""></a></div>
          <h2 class="subTitle">Front-end Developer</h2>
          <div class="contactPhone"><a href=""><img src="@/assets/img/gmail.png" alt=""></a></div>
        </div>
      </div>
        <cNav/>
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

header {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}
.contacts {
  padding: 10px;
  background-image: url("../assets/img/informatica-fondo.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.imgUser{
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  padding: 2%;
  background-color: white;
  border-radius: 10px 10px 0 0;
}

.imgUser img{
  width: 200px;
  height: 200px;
  border: 10px solid black;
  box-shadow: 0px 2px 10px black;
  border-radius: 100%;
}

.name {
  padding: 0px;
  margin-left: 25%;
  margin-right: 25%;
  background-color: white;
}

h1{
  padding: 20px;
  text-align: center;
  color: black;
  background-color: rgb(0, 193, 133);
}


.contactInfo{
  display: flex;
  margin-left: 25%;
  margin-right: 25%;
  padding: 0px;
  background-color: rgb(50, 72, 95);
  border-radius: 0px 0px 10px 10px;
}

.contactInfo > div{
  flex: 1;
  margin: auto;
  border-radius: 0px 0px 10px 10px;
}

.contactEmail{
  padding: 20px;
  text-align: end;
  background-color: black;
}

.contactEmail img{
  padding: 2px;
  background-color: white;
  border: 2px solid black;
  border-radius: 100%;
  width: 60px;
}

.contactPhone{
  padding: 20px;
  background-color: black;
}

.contactPhone img{
  padding: 2px;
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  width: 60px;
}

.subTitle{
  margin: auto;
  padding: 10px;
  text-align: center;
  color: white;
  border-bottom: 4px solid white;
}

</style>