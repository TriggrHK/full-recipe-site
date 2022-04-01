<template>
<div class="recipes">

  <div class="page section">
    <h1>Welcome to Chef Heath's Cook-Book</h1>
    <RecBar />

    <h2>Categories of Recipies</h2>
    <Categories/>

    <h2>Here is {{CurrentCat}}</h2>
    <RecipeList :items="sortedRecipes"/>

    <Footer/>
  </div>
</div>
</template>


<script>
import axios from 'axios'
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
  data() {
    return {
      recipes: [],
    }
  },
  created() {
    this.getRecipes();
  },
  computed: {
    CurrentCat() {
      return this.$root.$data.currentCat
    },
    sortedRecipes() {
      if(this.$root.$data.currentCat == "All Foods"){
        return this.recipes
      } else {
        return this.recipes.filter(item => item.category == this.$root.$data.currentCat)
      }
    },
  },
  methods: {
    async getRecipes() {
      try {
        let response = await axios.get('/api/recipes');
	this.recipes = response.data;
	return true;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
