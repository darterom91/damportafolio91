<template>
  <div>
    <section>
      <div class="personInfo">
        <CPersonInfo/>
      </div>

      <div class="infoOther">
        <CInfoOther/>
      </div>

      <div class="skins">
        <CSkills/>
      </div>

      <div class="Proyectos">
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

export default {
  components :{
    CPersonInfo,
    CInfoOther,
    CSkills,
    CProyecto
  }
}
</script>

<style scoped>

@font-face{
  font-family: fontPirate;
  src: url(../assets/fonts/PirataOne-Regular.ttf);
}

section {
  font-family: fontPirate;
  border: 1px solid white;
  background-color: white;
  padding: 20px;
  background-image: url("../assets/img/marOscuro.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
}

section > div{
  margin: 10px;
  border: 1px solid rgb(241, 234, 234);
  color: rgb(136, 101, 50);
  padding: 2%;
  background-image: url("../assets/img/fondoMapa.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

</style>