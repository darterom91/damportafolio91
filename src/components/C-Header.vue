<template>
  <div>
    <header>
      <div class="contacts">
        <div @click="allInfo" class="imgUser">
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
import {mapState, mapMutations} from 'vuex'
export default {
  components: {
    cNav
  },
  computed: {
    ...mapState(['vPersonInfo','vInfoOther','vSkills', 'vProyectos'])
  },
  methods: {
    ...mapMutations(['selvPersonInfo','selvInfoOther','selvskills','selvProyectos', 'allInfo'])
  },
}
</script>

<style scoped>

header {
  font-family: Arial, Helvetica, sans-serif;
  
}
.contacts {
  padding: 10px;
  background-color: black;
  /* background-image: url("../assets/img/informatica-fondo.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover; */
}

.imgUser{
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  padding: 2%;
  background-color: white;
  border: 1px solid black;
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
  margin-left: 20%;
  margin-right: 20%;
  background-color: white;
}

h1{
  padding: 20px;
  text-align: center;
  color: black;
  background-color: rgb(0, 166, 41);
}

.contactInfo{
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  padding: 0px;
  background-color: black;
  border-bottom: 2px solid white;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-radius: 0px 0px 10px 10px;
}

.contactInfo > div{
  flex: 1;
  margin: auto;
}

.contactEmail{
  padding: 20px;
  text-align: end;
  background-color: black;
  border-radius: 0px 0px 0px 10px;
}

.contactEmail img{
  padding: 2px;
  background-color: white;
  border: 3px solid white;
  border-radius: 100%;
  width: 60px;
}

.contactPhone{
  padding: 20px;
  background-color: black;
  border-radius: 0px 0px 10px 0px;
}

.contactPhone img{
  padding: 2px;
  background-color: white;
  border: 3px solid white;
  border-radius: 100%;
  width: 60px;
}

.subTitle{
  margin: auto;
  padding: 10px;
  text-align: center;
  color: white;
}

@media(max-width: 900px){

  .imgUser{
    margin-left: 15%;
    margin-right: 15%;
  }

  .name {
    margin-left: 15%;
    margin-right: 15%;
  }

  .contactInfo{
    margin-left: 15%;
    margin-right: 15%;
  }

  h1 {
    font-size: 1.4em;
  }

  .imgUser img{
    width: 150px;
    height: 150px;
  }

  .contactEmail img{
    width: 50px;
  }

  .contactPhone{
    padding: 20px;
    background-color: black;
  }

  .contactPhone img{
    width: 50px;
  }
  .subTitle {
    font-size: 1.2em;
    padding: 4%;
  }
}
@media(max-width: 600px){

  .imgUser{
    margin-left: 5%;
    margin-right: 5%;
  }

  .name {
    margin-left: 5%;
    margin-right: 5%;
  }

  .contactInfo{
    margin-left: 5%;
    margin-right: 5%;
  }

  h1 {
    font-size: 1.5em;
  }

  .imgUser img{
    width: 120px;
    height: 120px;
  }

  .contactEmail img{
    width: 50px;
  }

  .contactPhone{
    padding: 20px;
    background-color: black;
  }

  .contactPhone img{
    width: 50px;
  }
  .subTitle {
    font-size: 1.2em;
    padding: 4%;
  }
}

@media(max-width: 500px){
  .imgUser{
    margin-left: 0%;
    margin-right: 0%;
  }

  .name {
    margin-left: 0%;
    margin-right: 0%;
  }

  .contactInfo{
    margin-left: 0%;
    margin-right: 0%;
  }

  h1 {
    font-size: 1.2em;
  }

  .imgUser img{
    width: 115px;
    height: 115px;
  }

  .contactEmail img{
    width: 40px;
  }

  .contactPhone{
    padding: 20px;
    background-color: black;
  }

  .contactPhone img{
    width: 40px;
  }
  .subTitle {
    font-size: 1em;
    padding: 3%;
  }
}

@media(max-width: 400px){

  .contacts {
    padding: 0px;
  }

  .imgUser{
    border-radius: 0 0 0 0;
    margin-left: 0%;
    margin-right: 0%;
  }

  .name {
    margin-left: 0%;
    margin-right: 0%;
  }

  .contactInfo{
    border-radius: 0 0 0 0;
    margin-left: 0%;
    margin-right: 0%;
  }

  h1 {
    padding: 15px;
    font-size: 1.2em;
  }

  .imgUser img{
    width: 100px;
    height: 100px;
  }

  .contactEmail{
    border-radius: 0px 0px 0px 0px;
}

  .contactEmail img{
    width: 35px;
  }

  .contactPhone{
    border-radius: 0px 0px 0px 0px;
    background-color: black;
  }

  .contactPhone img{
    width: 35px;
  }
  .subTitle {
    font-size: 1em;
    padding: 4%;
  }
}

</style>