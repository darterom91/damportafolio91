<template>
  <div>
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
</template>

<script>
export default {

}
</script>

<style scoped>

section div > h2{
  border: 3px solid rgb(136, 101, 50);
  margin-bottom: 10px;
  padding: 10px;
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