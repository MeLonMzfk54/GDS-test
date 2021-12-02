<template>
  <div class="todo">
    <div class="todo__inner">
      <div class="todo__card">
        <h3 class="todo__title">
          {{ todoTitle[0].title + " - "+ todoTitle[0].count }}
        </h3>
        <select class="todo__select" name="taskFilter" id="taskFilter" v-model="filterValue">
          <option v-for="(option, index) in todoTitles" :key="index" :value="option.title">{{ option.title }}</option>
        </select>
        <div class="todo__list" v-if="tasks.length">
          <div v-if="displayTasks.length">
            <task @completeTask="completeTask(index)" v-for="(item, index) in displayTasks" :title="item.task" :class="item.status" :key="index"></task>
          </div>
          <div v-else>
            Таких нет
          </div>
        </div>
        <div v-else class="todo__list">
          Список задач пуст :(
        </div>
      </div>
      <button class="todo__btn" v-show="completedTasks.length && todoTitle[0].title.toLowerCase() === 'все задачи'" @click="clearCompleted">
        Очистить выполненные
      </button>
      <input-task v-show="todoTitle[0].title.toLowerCase() === 'все задачи'" v-model="newTask" @add-task="addTask"></input-task>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import InputTask from "@/components/InputTask"
import Task from "@/components/Task";

export default{
  name: "ToDo",
  data(){
    return{
      newTask: "",
      filterValue: 'Все задачи',
    }
  },
  components: {
    "task": Task,
    "input-task": InputTask,
  },
  computed: {
    ...mapState({
        tasks: state => state.tasks,
        completedTasks: state => state.completedTasks,
    }),
    todoTitles(){
      return [
        {
          title: "Активные задачи",
          count: this.tasks.length - this.completedTasks.length,
          tasks: this.activeTasks,
        },
        {
          title: "Все задачи",
          count: this.tasks.length,
          tasks: this.tasks,
        },
        {
          title: "Выполненные задачи",
          count: this.completedTasks.length,
          tasks: this.completedTasks,
        },
      ]
    },
    todoTitle(){
      return this.todoTitles.filter(el => el.title === this.filterValue);
    },
    activeTasks(){
      return this.tasks.filter(el => el.status === "active");
    },
    displayTasks(){
      return this.todoTitles.filter(el => el.title === this.filterValue)[0].tasks;
    }
  },
  methods: {
    completeTask(id){
      if(!this.completedTasks.some(el => el === id)){
        this.$store.commit("completeTask",id);
      }
    },
    addTask(){
      if(this.newTask){
        this.$store.commit("addTask", this.newTask);
        this.newTask = '';
      } else{
        alert("Сначала напишите задачу");
      }
    },
    clearCompleted(){
        this.$store.commit("clearCompleted");
    }
  }
}
</script>

<style scoped lang="scss">
$main-color: #2F4858;

.todo{
  max-width: 320px;
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
  &__list{
    margin: 10px 0px;
  }
  &__select{
    border: none;
    border-bottom: 1px solid $main-color;
    width: 100%;
    padding: 5px 0px;
  }
  &__btn{
    margin-bottom: 10px;
    background: red;
    border: none;
    color: white;
    font-size: 18px;
    width: 100%;
    cursor: pointer;
    transition: .1s all ease;
    &:hover{
      background: darkred;
    }
  }
}

.completed{
  pointer-events: none;
  position: relative;
  background: grey;
  &:before{
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    height: 5px;
    background: red;
  }
}
</style>