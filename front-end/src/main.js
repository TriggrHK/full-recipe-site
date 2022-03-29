import Vue from 'vue'
import App from './App.vue'
import router from './router'
import recipeData from './RecipeData.js'

Vue.config.productionTip = false

let data = {
  items: recipeData,
  currentCat: "All Foods"
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
