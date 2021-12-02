<template>
  <div class="task">
    <h3 class="task__title">{{ title }}</h3>
    <button class="task__btn" @click="completeTask($event.target)">✅</button>
  </div>
</template>

<script>
 export default{
   props: ['title'],
   data(){
     return{

     }
   },
   methods: {
     completeTask(e){
       e.parentNode.classList.add("completed");
       this.$emit("completeTask");
     }
   }
 }
</script>

<style scoped lang="scss">
  .task{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid grey;
    &:hover{
      background: rgba(238, 238, 238, .5);
    }
    &__btn{
      cursor: pointer;
      background: none;
      border: none;
      padding: 10px;
      &:hover{
        background: #eee;
      }
    }
  }
</style>