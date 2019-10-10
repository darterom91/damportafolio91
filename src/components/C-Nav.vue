<template>
  <div class="nav">
      <!-- <div class="img1">
        <img class="skull" src="@/assets/logo.png" alt="">
      </div> -->
      <div class="menu">
        <li><a class="white--text" href="#personInfo" @click="selvPersonInfo">Per-Info</a></li>
        <li><a class="white--text" href="#infoOther"  @click="selvInfoOther">infoOther</a></li>
        <li><a class="white--text" href="#skins" @click="selvskills">Skills</a></li>
        <li><a class="white--text" href="#Proyectos" @click="selvProyectos">Proyectos</a></li>
        <li class="all"><a class="black--text" href="#personInfo" @click="allInfo">All</a></li>
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
      <!-- <div class="img2">
        <img class="timon" src="@/assets/img/murray.png" alt="">
      </div> -->
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['vPersonInfo','vInfoOther','vSkills', 'vProyectos'])
  },

  methods: {
    ...mapMutations(['selvPersonInfo','selvInfoOther','selvskills','selvProyectos', 'allInfo'])
  },
}
</script>

<style scoped>

.nav {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  background-color: rgb(0, 166, 41);
  padding: 5px;
  display: flex;
  justify-content: center;
}
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu > li {
  list-style: none;
  background-color: black;
  border: 1px solid white;
  border-radius: 20px;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  padding: 15px;
  font-weight: bold;
}

.menu > .all {
  list-style: none;
  background-color: white;
  width: 50px;
  border: 1px solid white;
  border-radius: 100%;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;

}
.all > a{
  color: black;
}

a{
  text-decoration: none;
  font-size: 0.9em;
}

.img1 {
  border: 1px solid black;
  background-color: white;
  border-radius: 100%;
  padding: 20px;
}

.img1 > .skull {
  width: 50px;
}

.img2 {
  border: 1px solid black;
  background-color: white;
  border-radius: 100%;
  padding: 10px;
}

.img2 > .timon {
  width: 50px;
}

@media(max-width: 900px){
  .menu > li {
    margin-left: 15px;
    margin-right: 15px;
    padding: 15px;
  }

  .menu > .all {
    list-style: none;
    background-color: white;
    width: 50px;
  }

  a{
    text-decoration: none;
  }
}

@media (max-width: 600px) {
  .menu > li {
    margin-left: 10px;
    margin-right: 10px;
    width: 90px;
    text-align: center;
    padding: 10px;
  }

  .menu > .all {
    list-style: none;
    background-color: white;
    width: 40px;
  }

  a{
    text-decoration: none;
  }
}

@media(max-width: 500px){
  .menu > li {
    margin-left: 5px;
    margin-right: 5px;
    width: 80px;
    text-align: center;
    padding: 10px;
  }
  .menu > .all {
    list-style: none;
    background-color: white;
    width: 40px;
  }
  a{
    font-size: 0.8em;
  }
}

@media(max-width: 400px){
  .nav {
    margin-top: 5px;
  }

  .menu > li {
    margin-left: 2px;
    margin-right: 2px;
    width: 60px;
    text-align: center;
    padding: 3px;
  }

  .menu > .all {
    list-style: none;
    background-color: white;
    width: 20px;
  }

  a{
    font-size: 0.6em;
  }
}

</style>