<template>
  <div id="app">
    <img id="home" src="../src/assets/home.gif">
    <div id="nav">
      <router-link to="/">HOME</router-link> |
      <router-link to="/about">ABOUT</router-link> |
      <router-link to="/art_work">ART WORKS</router-link> |
      <router-link to="/experiences">EXPERIENCES</router-link>
    </div>
    <fa-icon icon="fa-facebook-f"/>
    <router-view/>
  </div>
</template>

<style>
#app {
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px 30px 40px;
}
#home {
  width: 30%;
}
#nav a {
  font-weight: normal;
  color: #6a6e72;
  font-family: 'Sunflower';
}

#nav a.router-link-exact-active {
  color: #641e8d;
}
</style>
