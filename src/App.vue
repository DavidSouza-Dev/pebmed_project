<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    name: 'app',
};
</script>

<style lang="scss">
*, :before, :after {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box
}

body {
    overflow-x: hidden;
    text-size-adjust: none
}

#app {
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #181a44;
 /*  margin-top: 30px; */
  @media (max-width: 600px) {
      width: 100%;
    }
  .main {
  @media (max-width: 600px) {
      width: 100%;
    }
}
}

h1, h2 {
  font-weight: normal;
  font-family: 'DM Sans', sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  font-family: 'DM Sans', sans-serif;
}

input, .form-control{
    font-family: 'DM Sans', sans-serif;
    height: 30px;
    /* width: 320px; */
    background-color: #ffffff;
    border: 1px solid transparent;
    border-bottom: 1px solid #F5F5F5;
    color: #2E2E2E;
    padding:0;
    transition: all .4s;
    border-radius: 0;
    margin-top: -5px;
    outline: none;
    &::placeholder{
        color: #E0E0E0;
    }
    &:focus, &:active, &:hover{
        box-shadow:unset;
        border: 1px solid transparent;
        border-bottom: 1px solid #999999;
        transition: all .4s;
    }
}

button{
  &:focus, &:active{
    outline: none;
  }
}

label {
  margin-bottom: 3px;
  font-family: 'DM Sans', sans-serif;
}

p, span{
  font-family: 'DM Sans', sans-serif;
}

input[type="radio"]{
  height: 13px;
}
</style>
