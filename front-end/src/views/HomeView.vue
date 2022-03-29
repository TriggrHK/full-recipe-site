<template>
<div class="home">
  <div class="containImage">
    <img src="../images/table.jpg" alt="Table" style="width:100%;">
    <div class="centered">
      <h1>Welcome to Triggr Recipes</h1>
      <hr />
      <h2>"No one is born a great cook, one learns by doing it."-Julia Child</h2>
    </div>
  </div>
  <RecBar/>
  <Footer/>
</div>
</template>

<script>
import Footer from "../components/Footer.vue"
import RecBar from "../components/RecommendationBar.vue"
export default {
  name: 'HomeView',
  components: {
    Footer,
    RecBar,
  }
}
</script>
