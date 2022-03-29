<template>
<div class="RecipeList">
  <div class="wrapper">
    <div class="item" v-for="item in items" :key="item.id">

        <div class="image">
          <img :src="require('../images/recipes/' +item.image)">
        </div>

        <div class="info">
          <h2>{{item.name}}</h2>
          <p>Difficulty: {{item.difficulty}}</p>
          <p>Total Time: {{item.hoursToMake}} hr</p>
        </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: "RecipeList",
  props: {
    items: Array
  },
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.item .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info h2 {
  font-size: 20px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}

.auto {
  margin-left: auto;
}
</style>
