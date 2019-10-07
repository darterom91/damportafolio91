<template>
  <div class="nav">
      <div class="img1">
        <img class="skull" src="@/assets/logo.png" alt="">
      </div>
      <div class="menu">
        <li><a @click="selvPersonInfo">personInfo</a></li>
        <li><a @click="selvInfoOther">infoOther</a></li>
        <li><a @click="selvskills">skills</a></li>
        <li><a @click="selvProyectos">proyectos</a></li>
      </div>

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
        <img class="timon" src="@/assets/img/firebase_logo.png" alt="">
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
  border: 1px solid black;
  background-color: black;
  padding: 2%;
  display: flex;
  justify-content: space-evenly;
}
.menu {
  display: flex;
  justify-content: center;
  background-color: white;
}
.menu {
  border: 1px solid black;
  display: flex;
  padding: 10px;
  justify-content: start;
}

.menu > li {
  list-style: none;
  border: 1px solid black;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
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


.img1 {
  border: 1px solid black;
  padding: 20px;
  background-color: white;
  border-radius: 100%;

}

.img1 > .skull {
  width: 60px;
  margin: auto;
}

.img2 {
  border: 1px solid black;
  background-color: white;
  border-radius: 100%;
}

.img2 > .timon {
   width: 100px;
}

@media (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: column;
    width: 200px;
    text-align: center;
  }
  div > img {
    width: 80px;
  }
}

</style>