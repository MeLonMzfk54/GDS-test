<template>
  <div class="todo">
    <div class="todo__inner">
      <div class="todo__card">
        <h3 class="todo__title">
          {{ todoTitles[0] }}
        </h3>
        <filter></filter>
        <div class="todo__list" v-if="tasks.length">
          <task @complete-task="completeTask(index)"></task>
        </div>
        <div v-else>
          Пока что вы не добавили ни одной задачи :(
        </div>
      </div>
      <input-task></input-task>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Task from "@/components/Task";
import InputTask from "@/components/InputTask"
// import Filter from "@/components/Filter"

export default{
  data(){
    return{
      todoTitles: ["Активные задачи", "Все задачи", "Выполненные задачи"],
    }
  },
  components: {
    // "filter": Filter,
    "task": Task,
    "input-task": InputTask,

  },
  computed: {
    ...mapState({
        tasks: state => state.tasks
    })
  },
  methods: {
    completeTask(id){
      this.$store.commit("completeTask",id);
    },
  }
}
</script>

<style scoped lang="scss">
$main-color: #2F4858;

.todo{
  width: 320px;
  &__inner{}
  &__card{
    box-shadow: 0 3px 20px #eee;
    padding: 10px;
  }
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