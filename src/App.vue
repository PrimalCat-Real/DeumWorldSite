<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import NavTextItemVue from './components/NavTextItem.vue';

</script>

<script>
export default{
  components:{
    NavTextItemVue
  }
}

</script>


<template>
  <header class="home-header">
      <div class="home-header__text-components">
        <NavTextItemVue msg="Home"></NavTextItemVue>
        <NavTextItemVue msg="Servers"></NavTextItemVue>
        <NavTextItemVue msg="Start"></NavTextItemVue>
        <NavTextItemVue msg="News"></NavTextItemVue>
      </div>
      
  </header>
  <div class="home-screen">
    
    <div class="layers">
      <div class="layer__title">
        <!-- TODO layer__... in components-->
      </div>
    </div>
  </div>
  <div class="servers-screen">

  </div>
  
</template>

<style lang="scss">
:root {
 --primary: #30393E;
 --primary-alt: #344A57;
 --grey: #CACACA;
 --dark: #272A2C;
 --light: #FFFAE8;
 --sub-light: #fae4c6;
 --orange: #FF9437;
 --sidebar-width: 300px;
}
@font-face {
  font-family: "RadioCanada-Light";
  src: url("./assets/fonts/RadioCanada/RadioCanada-Light.ttf");
}
@font-face {
  font-family: "RadioCanada-Regular";
  src: url("./assets/fonts/RadioCanada/RadioCanada-Regular.ttf");
}
@font-face {
  font-family: "RadioCanada_Condensed-Regular";
  src: url("./assets/fonts/RadioCanada_Condensed/RadioCanada_Condensed-Regular.ttf");
}
@font-face {
  font-family: "RadioCanada_SemiCondensed-Regular";
  src: url("./assets/fonts/RadioCanada_SemiCondensed/RadioCanada_SemiCondensed-Regular.ttf");
}
#app{
  padding: 0;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-header{
  top: 0.5rem;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  &__text-components{
    display: flex;
    gap: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
  }
}
body {
 background: var(--primary);
}

.home-screen{
  position: relative;
  
  
}
.layers{
  height: 100vh;
  display: flex;
  background: #CACACA;
}

</style>