<template>
  <div>
    <footer>
      <div class="part1">
        <div class="copyh">© dam91 page created in 2019</div>
          <div class="socialPages">
            <ul>
              <li><a href="https://github.com/darterom91"><img src="@/assets/img/gitHub.svg" alt=""></a></li>
              <li><a href="#"><img src="@/assets/img/youtube.png" alt=""></a></li>
              <li><a href="https://www.linkedin.com/in/darteromartin91/"><img src="@/assets/img/linkedin.png" alt=""></a></li>
            </ul>
          </div>
      </div>
      <!-- <div class="part2">
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
        <div>Lorem ipsum dolor sit.</div>
      </div> -->
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
 
 footer {
  height: 200px;
  margin-top: 1px;
  background-color: black;
}

footer > .part1 {
  color: rgb(75, 64, 61);
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
}

footer > .part2 {
  color: rgb(75, 64, 61);
  display: flex;
}

.part1 > div{
  flex: 2;
  padding: 2%;
  text-align: start;
}

.part1 > .copyh{
  height: 100px;
  margin: 20px;
  flex: 2;
  padding: 2%;
  color: rgb(176, 175, 178);
}

.part2 > div{
  border: 3px solid rgb(40, 44,52);
  
  flex: 1;
  padding: 2%;
  text-align: center;
}

.socialPages > ul {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

ul > li {
  margin: 2%;
  list-style: none;
}
li > a {
  text-align: center;
}

li a > img {
  background-color: white;
  border: 2px solid white;
  border-radius: 100%;
  width: 50px;
}

@media (max-width: 600px){
  footer > .part1 {
    font-size: 1.1em;
  }

  li a > img {
    width: 40px;
  }
}

@media (max-width: 500px){
  footer > .part1 {
    font-size: 1em;
  }

  li a > img {
    width: 30px;
  }
}

@media (max-width: 400px){
  footer > .part1 {
    font-size: 0.8em;
  }

  .part1 > div{
    padding: 2%;
  }

  li a > img {
    width: 25px;
  }
}
</style>