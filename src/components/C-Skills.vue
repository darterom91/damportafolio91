<template>
  <div class="contenido">
    <h2>Skills</h2>
      <ul>
        <li class="HTML">HTML <v-rating v-model="html" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="CSS">CSS <v-rating v-model="css" background-color="red lighten-3" color="black"></v-rating></li>
        <li class="JS">JS <v-rating v-model="js" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="vue">vue cli-3 <v-rating v-model="VC3" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="Wordpress">Wordpress<v-rating v-model="Wordpress" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="java">java <v-rating v-model="java" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="SQL">SQL <v-rating v-model="SQL" background-color="black lighten-3" color="black"></v-rating></li>
        <li class="Firebase">Firebase <v-rating v-model="Firebase" background-color="black lighten-3" color="black"></v-rating></li>
      </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    html: 5,
    css: 5,
    js: 4,
    VC3: 4,
    Wordpress: 4,
    Firebase: 3,
    java: 3,
    SQL: 3
  }),
}
</script>

<style scoped>

.contenido{
  border: 10px solid black;
  border-radius: 0 0 10px 10px;
  background-color: white;
  padding-bottom: 10px;
}

section div > h2{
  border-bottom: 5px solid rgb(0, 166, 41);
  color: white;
  background-color: black;
  padding-left: 20px;
}

section div > ul{
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 0 0 10px 10px;
  flex-wrap: wrap;
  display: flex;
}

ul > li{
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  border: 1px solid black;
  list-style: none;
  flex-grow: 1;
}
.HTML{
  background-color: orange;
  color: black;
}

.CSS{
  background-color: rgb(17, 73, 224);
  color: white;
}

.JS{
  background-color: orangered;
  color: white;
}

.vue{
  background-color: green;
  color: white;
}

.java{
  background-color: lightcoral;
  color: black;
}

.SQL{
  background-color: darkslateblue;
  color: white;
}

.Wordpress{
  background-color: rgb(24, 161, 161);
  color: black;
}

.Firebase{
  background-color: darkorange;
  color: black;
}
</style>