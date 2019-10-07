<template>
  <div>
    <section>

      <div
      v-if="vPersonInfo == bol" class="personInfo">
        <CPersonInfo/>
      </div>

      <div
      v-if="vInfoOther == bol"
      class="infoOther">
        <CInfoOther/>
      </div>

      <div
      v-if="vSkills == bol"
      class="skins">
        <CSkills/>
      </div>

      <div
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

@font-face{
  font-family: fontPirate;
  src: url(../assets/fonts/PirataOne-Regular.ttf);
}

section {
  font-family: fontPirate;
  border: 1px solid white;
  padding: 20px;
}

section > div{
  margin: 10px;
  border: 1px solid rgb(241, 234, 234);
  color: rgb(136, 101, 50);
  padding: 2%;
}

</style>