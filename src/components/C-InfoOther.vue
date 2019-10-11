<template>
  <div>
    <h2>Otra Información</h2>
    <h3>Cuales son mis aficiones?</h3>
    <p>Lo que más me gusta el futbol tanto verlo como jugarlo aunque hace tiempo que no juego cpachangas con amigos, tambíen me gustan los videjuegos de coches, los mundo abiertos, juegos de lucha como street fighter, las aventuras graficas al estilo Monkey Island con mucho humor y bastante alocados, y tambien los juego de personajes de anime, soy aficionado al anime, al cine de superheroes y de ciencia ficcion.</p>

    <h3>Que me gustaría ser?</h3>
    <p>Para mí hoy dia mi maxima idea es poder ser un buen front-end, ya que es la parte que más me gusta de la programación web porque cuando trabajas en ello puedes ver en todo momento los cambios y el trabajar con esllo es bastante divertido, ademas te permite ver los fallos en el momento para poderlo cambiar.</p>

    <h3>Que habilidades me definen?</h3>
    <ul>
      <li>Trabajo en equipo</li>
      <li>Persistente</li>
      <li>Constante</li>
      <li>Ganas de mejorar</li>
      <li>Metodico</li>
    </ul>

    <h3>Que idiomas hablo?</h3>
    <ul>
      <li>Castellano</li>
      <li>Catalán</li>
    </ul>

    <h3>Expectativas salariales</h3>
      <p class="salary">15000 a 17000€</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div {
  border: 10px solid black;
  border-radius: 0 0 10px 10px;
  padding-bottom: 10px;
}

section div > h2 {
  border-bottom: 5px solid rgb(0, 166, 41);
  color: white;
  background-color: black;
  padding-left: 20px;
}

section div > h3 {
  margin-top: 3%;
  margin-left: 3%;
}

section div > p {
  margin-top: 10px;
  padding: 20px;
}

.salary{
  background-color: rgb(50, 72, 95);
  margin: auto;
  padding: 5px;
  width: 200px;
  color: white;
  text-align: center;
}

section div > ul{
  padding: 10px;
  background-color: white;
  flex-wrap: wrap;
  display: flex;
}

ul > li{
  font-size: 1em;
  font-weight: bold;
  padding: 10px;
  background-color: rgb(0, 166, 41);
  color: white;
  font-weight: bold;
  margin: 1px;
  text-align: center;
  list-style: none;
  flex-grow: 1;
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

@media(max-width: 1200px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 150px;
    height: 150px;
  }
}

@media(max-width: 900px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 600px) {
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }
}

@media(max-width: 500px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 125px;
    height: 125px;
  }
}

@media(max-width: 415px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }
}

@media(max-width: 400px){
  .contenido-img > .img1 {
    border: 1px solid black;
    width: 100px;
    height: 100px;
  }
}
</style>