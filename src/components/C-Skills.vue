<template>
  <div>
    <h2>skins</h2>
      <ul>
        <li class="HTML">HTML</li>
        <li class="CSS">CSS</li>
        <li class="JS">JS</li>
        <li class="vue">vue cli-3</li>
        <li class="java">java</li>
        <li class="SQL">SQL</li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

section div > h2{
  border-top: 1px solid white;
  border-bottom: 1px solid rgb(0, 166, 41);
  color: white;
  background-color: black;
  padding-top: 10px;
  padding-left: 20px;
}

section div > ul{
  padding: 10px;
  background-color: white;
  border: 10px solid black;
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

</style>