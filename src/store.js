import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vPersonInfo: true,
    vInfoOther: false,
    vSkills: false,
    vProyectos: false
  },
  mutations: {
    selvPersonInfo(state){
      console.log("selvPersonInfo");
      
      state.vPersonInfo = true;
      state.vInfoOther = false;
      state.vSkills = false;
      state.vProyectos = false;

      console.log("vPersonInfo = " + state.vPersonInfo + "\n" +
        "vInfoOther = " + state.vInfoOther + "\n" +
        "vSkills = " + state.vSkills + "\n" +
        "vPersonInfo = " + state.vPersonInfo);
    },
    selvInfoOther(state) {
      console.log("selvInfoOther");
      state.vPersonInfo = false;
      state.vInfoOther = true;
      state.vSkills = false;
      state.vProyectos = false;

      console.log("vPersonInfo = " + state.vPersonInfo + "\n" +
        "vInfoOther = " + state.vInfoOther + "\n" +
        "vSkills = " + state.vSkills + "\n" +
        "vPersonInfo = " + state.vPersonInfo);
    },
    selvskills(state) {
      console.log("selvskills");
      state.vPersonInfo = false;
      state.vInfoOther = false;
      state.vSkills = true;
      state.vProyectos = false;

      console.log("vPersonInfo = " + state.vPersonInfo + "\n" +
        "vInfoOther = " + state.vInfoOther + "\n" +
        "vSkills = " + state.vSkills + "\n" +
        "vPersonInfo = " + state.vPersonInfo);
    },
    selvProyectos(state) {
      console.log("selvProyectos");
      state.vPersonInfo = false;
      state.vInfoOther = false;
      state.vSkills = false;
      state.vProyectos = true;
      
      console.log("vPersonInfo = " + state.vPersonInfo+"\n"+
        "vInfoOther = " + state.vInfoOther+"\n"+
        "vSkills = " + state.vSkills+"\n"+
        "vPersonInfo = " +state.vPersonInfo);
    }
  },
  actions: {

  }
})
