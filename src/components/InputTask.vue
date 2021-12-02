<template>
  <div class="input-task">
    <input type="text"
           placeholder="Добавить задачу"
           class="input-task__inp"
           @input="$emit('input',$event.target.value)"
           :value="value"
    >
    <button class="input-task__btn" @click="addTask">Добавить задачу</button>
  </div>
</template>

<script>
export default{
  name: "inputTask",
  props: {
    value: {}
  },
  methods: {
    addTask(){
      this.$emit("add-task");
    }
  }
}
</script>

<style scoped lang="scss">
$main-color: #2F4858;
  .input-task{
    background: $main-color;
    display: flex;
    flex-direction: column;
    &__inp{
      padding: 10px;
    }
    &__btn{
      background: black;
      color: white;
      border: none;
      padding: 10px 0px;
      cursor: pointer;
      transition: .4s all ease;
      &:hover,
      &:active{
        background: $main-color ;
      }
    }
  }
</style>