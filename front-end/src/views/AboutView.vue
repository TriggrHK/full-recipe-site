<template>
<div class="about">
  <div class="page section">
    <img id="portrait" src="../images/homecoming.jpg">
    <div class="section">
      <h1>About Triggr Recipes</h1>
      <p>I am not an amazing chef who creates recipes but instead I
        <strong>LOVE</strong> to try new things. So this website is
        a collection of the favorite things I've tried
      </p>
    </div>
    <div class="section large_section">
      <h2>Background</h2>
      <ul>
        <li>My name is Trevor Heath</li>
        <li>I am 22 years old</li>
        <li>I am studying Computer Science at BYU in Utah</li>
      </ul>
      <p>The picture above is from when I returned from my mission for "The Church of Jesus Christ of Latter Day Saints".
        I volunteered two years between California and Hong Kong to serve other people. All this time I spent around people
        of Asian descent has given me a huge love for their cuisine so you'll see a big Asian influence on this website.
      </p>
      <p>Before my mission however I had already developed a love for baking desserts and baking bread. As a result you will
        also see lot's of things relating to sugar and dough haha
      </p>
    </div>
    <div class="section">
      <h2>Why the name Triggr?</h2>
      <p>This is actually my gamer-tag or the name I use when playing games</p>
    </div>

    <Footer/>
  </div>
</div>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
  name: "AboutView",
  components: {
    Footer,
  }
}
</script>
