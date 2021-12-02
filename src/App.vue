<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

$roboto:'Roboto', sans-serif;


#app{
  font-family: $roboto;
}
.container{
  max-width: 530px;
  padding: 0px 15px;
  margin: 0 auto;
}

</style>
