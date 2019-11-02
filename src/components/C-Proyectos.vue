<template>
  <div class="contenido">
    <h2>Proyectos</h2>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>NYSL-mobile</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto" max-width="600">
            <v-img
              class="white--text align-center"
              height="350px"
              src="@/assets/img/nysl.jpg">
              <v-card-title class="title">NYSL-mobile</v-card-title>
            </v-img>

            <v-card-subtitle class="pa-md-4 font-weight-black">Proyecto final del curso de front-end developer con Pimec y Ubiqum</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Esta pagina esta montada con vue.js cli-3, Vuex, Vue-rooter, con api eterna para llamar a los contenidos de la web, también usa firebase para usarla de hosting y para las autenticaciones. Para el diseño se usa Bootstrap-vue y Css 3.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text href="https://nysldata.firebaseapp.com">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>InBoundCycle test de maquetación</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto" max-width="600">
            <v-img
              class="white--text align-center"
              height="350px"
              src="@/assets/img/iboundC.jpg">
              <v-card-title class="title">NYSL-mobile</v-card-title>
            </v-img>

            <v-card-subtitle class="pa-md-4 font-weight-black">Esto es un prueba de maquetación para InBoundCycle.</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Es una pagina simple con html, css y algo de JavaScript, para la zona del formulario y detectar que ponías user y password.</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
     <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>App-recetas</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto" max-width="600">
            <v-img
              class="white--text align-center"
              height="350px"
              src="@/assets/img/app-recetas.png">
              <v-card-title class="title">App-recetas</v-card-title>
            </v-img>

            <v-card-subtitle class="pa-md-4 font-weight-black">Es una app web en la que mediante a una api nutricionista</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Se calculan las propiedades de los elementos que introducen en la que se van introduciendo en el texto-ares y puedes ir introduciendo ingredientes tantos como quieras calcular además que algunos platos.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text href="https://app-recetas-dam.firebaseapp.com/#/">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.contenido{
  border: 10px solid black;
  border-radius: 0 0 10px 10px;
  background-color: white;
}

div > h2{
  border-bottom: 5px solid rgb(0, 166, 41);
  color: white;
  background-color: black;
  padding-left: 20px;
}

div > p{
  margin-top: 10px;
  padding: 20px;
}
</style>