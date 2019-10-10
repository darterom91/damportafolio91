<template>
  <div>
    <section>

      <div id="personInfo"
      v-if="vPersonInfo == bol" class="personInfo">
        <CPersonInfo/>
      </div>

      <div id="infoOther"
      v-if="vInfoOther == bol"
      class="infoOther">
        <CInfoOther/>
      </div>

      <div id="skins"
      v-if="vSkills == bol"
      class="skins">
        <CSkills/>
      </div>

      <div id="Proyectos"
      v-if="vProyectos == bol"
      class="Proyectos">
        <CProyecto/>
      </div>

    </section>
  </div>
</template>

<script>
import CPersonInfo from '../components/C-PersonInfo.vue'
import CInfoOther from '../components/C-InfoOther.vue'
import CSkills from '../components/C-Skills.vue'
import CProyecto from '../components/C-Proyectos.vue'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      bol: true
    }
  },
  components :{
    CPersonInfo,
    CInfoOther,
    CSkills,
    CProyecto
  },
  computed: {
    ...mapState(['vPersonInfo','vInfoOther','vSkills', 'vProyectos'])
  },
}
</script>

<style scoped>

section {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid white;
  /* background-image: url("../assets/img/informatica-fondo.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover; */
  padding-left: 25%;
  padding-right: 25%;
}

section > div{
  margin: 5px;
  color: black;
  padding: 1%;
  flex-shrink: 1;
}

@media(max-width: 1200px){
  section {
    padding-left: 20%;
    padding-right: 20%;
  }
}

@media(max-width: 900px){
  section {
    padding-left: 20%;
    padding-right: 20%;
  }
}

@media (max-width: 600px) {
  section {
    padding-left: 15%;
    padding-right: 15%;
  }
}

@media(max-width: 500px){
  section {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@media(max-width: 400px){
  section {
    padding-left: 0;
    padding-right: 0;
  }
}

</style>