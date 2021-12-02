<template>
  <div class="todo">
    <h3 class="todo__title">
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default{
  data(){
    return{
      title: "Активных задач - ",
    }
  },
}
</script>

<style scoped lang="scss">
$main-color: #2F4858;

.todo{
  width: 320px;
  box-shadow: 0 3px 20px #eee;
  padding: 10px;
  margin: 20px 0px 0px 20px;
  &__title{
    text-align: center;
    background: $main-color;
    margin: -10px -10px 10px -10px;
    padding: 10px;
    color: white;
    font-weight: 500;
  }
}
</style>