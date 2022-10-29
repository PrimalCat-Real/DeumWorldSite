<template>
    <div class="nav-item-text">{{ msg }}</div>
</template>

<script>
export default {
    name: "NavTextItem",
    props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.nav-item-text{
    cursor: pointer;
    font-family: "RadioCanada-Regular";
    color: var(--light);
    font-size: 21px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.04em;
    position: relative;
    transition: color 0.2s ease-in-out;
}
.nav-item-text:after{
    position: absolute;
    content: "";
    height: 0.1rem;
    width: 0;
    background-color: var(--orange);
    bottom: -0.5rem;
    width: 0%;
    left: 0;
    border-radius: 2px;
    transition: 0.3s ease-in-out;
    left: 15%;
    
}
.nav-item-text::after{
    transform: scale(0,1);
    width: 70%;
}
.nav-item-text:hover::after{
    transform: scale(1,1);
}
.nav-item-text:hover{
    color: var(--sub-light);
}
</style>