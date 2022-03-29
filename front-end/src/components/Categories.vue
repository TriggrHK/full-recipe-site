<template>
<div class="wrapper">
  <div class="box small_box" @click="changeCat('Chinese')">
    <div class="image">
      <img src="../images/chfood.jpg" alt="Chinese Food" />
    </div>
    <div class="info" style="height:50px;">
      <p>Chinese Food</p>
    </div>
  </div>
  <div class="box small_box" @click="changeCat('Bread')">
    <div class="image">
      <img src="../images/bread.jpg" alt="Bread" />
    </div>
    <div class="info" style="height:50px;">
      <p>Bread</p>
    </div>
  </div>
  <div class="box small_box" @click="changeCat('Dessert')">
    <div class="image">
      <img src="../images/dessert.jpg" alt="Dessert" />
    </div>
    <div class="info" style="height:50px;">
      <p>Dessert</p>
    </div>
  </div>
  <div class="box small_box" @click="changeCat('All Foods')">
    <div class="image">
      <img src="../images/recipes/mapo-tofu.jpg" alt="Mapo Tofu" />
    </div>
    <div class="info" style="height:50px;">
      <p>All Foods</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "RecipeCategories",
  methods: {
    changeCat(newCat) {
      this.$root.$data.currentCat = newCat
    }
  }
}
</script>
