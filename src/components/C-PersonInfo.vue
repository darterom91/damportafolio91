<template>
  <div>
    <h2>Información personal</h2>
    <div class="contenido-texto">
      <p>Comencé hace unos años en el mundo de la programación gracias a mis hermanos, que me dejaron algunos tomos de <strong>css</strong>  y <strong>html</strong>  por el 2009. En estos años no me tomé enserio esto ya que mi idea en aquellos días era aprender de mecánica es más estuve en un <strong> FP de grado medio de electromecánica de vehículos</strong>  el cual finalice en 2012 en el IES Esteve Terrades i Illa.</p>

      <div class="contenido-img">
        <img class="img1" src="../assets/img/iesEst.jpg" alt="">
        <img class="img2" src="../assets/img/motor.jpg" alt="">
      </div>
    </div>

    <div class="contenido-texto">
      <p>Cuando finalice, estuve sacándome el <strong>examen de acceso a grado superior</strong> y en el proceso empece a usar <strong>Unity 3d</strong> , el cual me fue bien para empezar en la programación más que nada buscaba diferentes códigos de gente y intentaba modificarlos para que los objetos se movieran, disparar, saltar y incluso aprendí un poco a usar físicas también.</p>

      <div class="contenido-img">
        <img class="img3" src="../assets/img/unity3D.jpg" alt="">
      </div>
    </div>

    <div class="contenido-texto">
      <p>Después me apunte <strong>FP de grado superior de Desarrollo de Aplicaciones multiplataforma</strong> , el cual comencé en 2015 y lo deje en 2018, el cual no tengo terminado hoy día pero finalicé los módulos <strong>M1</strong> , <strong>M2</strong> , <strong>M4</strong> ,<strong>M5</strong>  y <strong>M7</strong> . También de <strong>M3</strong>  tengo aprobado de M3 las <strong>UF1</strong> ,<strong>UF3</strong> ,<strong>UF4</strong> y <strong>UF5</strong> . Durante el curso aprendi <strong>Sistemas, bbdd con mongo, sql y pl/sql, de maquetación html, css y bootstrap 3, también aprendi a usar Java, toque un poco C++ y por ultimo visual basic.</strong></p>

      <div class="contenido-img">
        <img class="img1" src="../assets/img/iesEst.jpg" alt="">
        <img class="img2" src="../assets/img/fonfo-informatica.jpg" alt="">
      </div>
    </div>

    <div class="contenido-texto">
      <p>Durante esté año estuve ayudando a mi hermano durante 2 años con <strong>Wordpress</strong> maquetando y haciendo el mantenimientos de la web de pintyplus y el mantenimientos de gráficas de Barcelona donde aprendí a usar <strong>docker, git Bitbucket y a usar Trello.</strong></p>

      <div class="contenido-img">
        <img class="img3" src="../assets/img/fondo-wordpress.jpeg" alt="">
      </div>
    </div>

    <div class="contenido-texto">
      <p>Este ultimo año hice un curso de <strong>Pimec y Ubiqum de 490h de Front-end Developer</strong> en el cual a sido lo que me ha devuelto la pasión por el mundo de la programación <strong>front-end</strong> en lo cual hoy dia es el lado de la programación en la que quiero dedicarme y aprender para mejorar cada día más. En este curso mejoré en <strong>HTML 5 y CSS 3, he aprendido Java Script, aprendi a hacer consultas a api's, aprendí a usar framework vue.js y me centré en vue.js cli-5, bootstrap-vue, vuex y vue-rooter.</strong></p>

      <div class="contenido-img">
        <img class="img4" src="../assets/img/pimec.png" alt="">
        <img class="img4" src="../assets/img/ubiqum.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

div{
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

section div > p{
  margin-top: 10px;
  padding: 20px;
}

.contenido-texto {
  border: 0 solid black;
}

.contenido-img {
  border: 0 solid black;
  display: flex;
  justify-content: center;
}

.contenido-img > .img1 {
  border: 1px solid black;
  width: 200px;
  height: 200px;
}

.contenido-img > .img2 {
  border: 1px solid black;
  width: 300px;
  height: 200px;
}

.contenido-img > .img3 {
  border: 1px solid black;
  width: 500px;
  height: 250px;
}

.contenido-img > .img4 {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 10px;
}

@media(max-width: 1200px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 150px;
    height: 150px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 250px;
    height: 150px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 300px;
    height: 200px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
}

@media(max-width: 900px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 200px;
    height: 100px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 300px;
    height: 200px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
}

@media (max-width: 600px) {
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 200px;
    height: 100px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 300px;
    height: 200px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
    margin: 10px;
  }
}

@media(max-width: 500px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 125px;
    height: 125px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 175px;
    height: 125px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 250px;
    height: 150px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 75px;
    height: 75px;
    margin: 10px;
  }
}

@media(max-width: 415px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 150px;
    height: 100px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 250px;
    height: 155px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 75px;
    height: 75px;
    margin: 10px;
  }
}

@media(max-width: 400px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 150px;
    height: 100px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 225px;
    height: 125px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 75px;
    height: 75px;
    margin: 10px;
  }
}

@media(max-width: 300px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 90px;
    height: 90px;
  }

  .contenido-img > .img2 {
    border: 1px solid black;
    width: 125px;
    height: 90px;
  }

  .contenido-img > .img3 {
    border: 1px solid black;
    width: 225px;
    height: 125px;
  }

  .contenido-img > .img4 {
    border: 1px solid black;
    width: 75px;
    height: 75px;
    margin: 10px;
  }
}
</style>