<template>
  <div class="nav">
    <div class="menu">
      <div class="img1">
        <img class="skull" src="@/assets/img/murray.png" alt="">
      </div>
      <ul>
        <li><a @click="selvPersonInfo">personInfo</a></li>
        <li><a @click="selvInfoOther">infoOther</a></li>
        <li><a @click="selvskills">skills</a></li>
        <li><a @click="selvProyectos">proyectos</a></li>
      </ul>

      <!-- <v-app-bar
      src="@/assets/img/fondoMapa.jpg"
      sm="1"
    >
      <v-menu
        light
        color="primary"
      >

        <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon icon v-on="on"></v-app-bar-nav-icon>
        </template>

        <v-list-item-content>
            <v-list-item-title>personInfo</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
            <v-list-item-title>infoOther</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
            <v-list-item-title>skins</v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
            <v-list-item-title>Proyectos</v-list-item-title>
        </v-list-item-content>  
      </v-menu>

      <v-toolbar-title >Page title</v-toolbar-title>

    </v-app-bar> -->
      <div class="img2">
        <img class="timon" src="@/assets/img/timon.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['vPersonInfo','vInfoOther','vSkills', 'vProyectos'])
  },

  methods: {
    ...mapMutations(['selvPersonInfo','selvInfoOther','selvskills','selvProyectos'])
  },
}
</script>

<style scoped>

@font-face{
  font-family: fontPirate;
  src: url(../assets/fonts/PirataOne-Regular.ttf);
}

.nav {
  font-family: fontPirate;
}
.menu {
  display: flex;
  justify-content: center;
}
ul {
  display: flex;
  justify-content: center;
}

ul > li {
  list-style: none;
  border: 4px solid rgb(131, 110, 61);
  border-radius: 10%;
  background-image: url("../assets/img/fondoMapa.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  color: rgb(131, 110, 61);
 
  padding: 20px;
}

a{
  text-decoration: none;
  color: black;
}

.logo {
  display: flex;
  justify-content: center;
  flex: 1;
}

div > img{
  width: 100px;
}

.img1 {
  position: relative;
  margin-right: 20px;
}

.img1 > .skull {
  float: left;
  left: 0;
  margin: -20px;
}

.img2 {
  position: relative;
  margin-left: 25px;
}

.img2 > .timon {
  float: right;
  right: 0;
  margin: -20px;
}

@media (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: column;
    width: 200px;
    text-align: center;
  }
  div > img{
  width: 80px;
}
}

</style>