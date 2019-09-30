<template>
  <div>
    <section>
      <div class="personInfo">
        <h2>personInfo</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus incidunt ex commodi, laudantium accusantium consequuntur! Nihil esse, labore, incidunt repellat veniam a harum cum aliquam consectetur mollitia accusamus saepe! Necessitatibus nostrum eaque cupiditate asperiores ab blanditiis. Magnam ea quibusdam quia officiis, illum, expedita sit deserunt reiciendis dicta amet dolores labore! Eveniet velit, ea, facere deserunt tempore sapiente beatae sint autem esse id quaerat qui porro nostrum. Consequatur illum deleniti eligendi nisi ipsa animi nulla, vero esse. Aut harum accusantium placeat optio eveniet quidem, ad ex facere id delectus enim totam odit quo, numquam non eum provident, porro officia architecto iusto.</p>
      </div>

      <div class="infoOther">
        <h2>infoOther</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus incidunt ex commodi, laudantium accusantium consequuntur! Nihil esse, labore, incidunt repellat veniam a harum cum aliquam consectetur mollitia accusamus saepe! Necessitatibus nostrum eaque cupiditate asperiores ab blanditiis. Magnam ea quibusdam quia officiis, illum, expedita sit deserunt reiciendis dicta amet dolores labore! Eveniet velit, ea, facere deserunt tempore sapiente beatae sint autem esse id quaerat qui porro nostrum. Consequatur illum deleniti eligendi nisi ipsa animi nulla, vero esse. Aut harum accusantium placeat optio eveniet quidem, ad ex facere id delectus enim totam odit quo, numquam non eum provident, porro officia architecto iusto.</p>
      </div>

      <div class="skins">
        <h2>skins</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>vue cli-3</li>
          <li>java</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="Proyectos">
        <h2>Proyectos</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus incidunt ex commodi, laudantium accusantium consequuntur! Nihil esse, labore, incidunt repellat veniam a harum cum aliquam consectetur mollitia accusamus saepe! Necessitatibus nostrum eaque cupiditate asperiores ab blanditiis. Magnam ea quibusdam quia officiis, illum, expedita sit deserunt reiciendis dicta amet dolores labore! Eveniet velit, ea, facere deserunt tempore sapiente beatae sint autem esse id quaerat qui porro nostrum. Consequatur illum deleniti eligendi nisi ipsa animi nulla, vero esse. Aut harum accusantium placeat optio eveniet quidem, ad ex facere id delectus enim totam odit quo, numquam non eum provident, porro officia architecto iusto.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  
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

section div > h2{
  border: 3px solid rgb(136, 101, 50);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

section div > p{
  padding: 10px;
  border: 3px solid rgb(136, 101, 50);
  border-radius: 5px;
}

section div > ul{
  padding: 10px;
  border: 3px solid rgb(136, 101, 50);
  border-radius: 5px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}

ul > li{
  font-size: 1.5em;
  padding: 10px;
  border: 3px solid rgb(136, 101, 50);
  list-style: none;
  flex-grow: 1;
}

</style>