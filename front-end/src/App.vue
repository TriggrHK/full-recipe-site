<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/recipes">Recipes</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/support">Support</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #34252F;
  text-align: right;
}

nav a {
  font-weight: bold;
  color: #a6a6a6;
}

nav a.router-link-exact-active {
  color: #828181;
}

@import 'css/styles.css';
</style>
