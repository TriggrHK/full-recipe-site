<template>
<div class="recipes">

  <div class="page section">
    <h1>Welcome to Chef Heath's Cook-Book</h1>
    <RecBar></RecBar>

    <h2>Categories of Recipies</h2>
    <Categories/>

    <h2>Here is {{CurrentCat}}</h2>
    <RecipeList :items="items"/>

    <Footer/>
  </div>
</div>
</template>


<script>
import Footer from "../components/Footer.vue"
import RecBar from "../components/RecommendationBar.vue"
import Categories from "../components/Categories.vue"
import RecipeList from "../components/RecipeList.vue"
export default {
  name: 'RecipesView',
  components: {
    Footer,
    RecBar,
    Categories,
    RecipeList,
  },
  computed: {
    CurrentCat() {
      return this.$root.$data.currentCat
    },
    items() {
      if(this.$root.$data.currentCat == "All Foods"){
        return this.$root.$data.items
      } else {
        return this.$root.$data.items.filter(item => item.category == this.$root.$data.currentCat)
      }
    },
  }
}
</script>
