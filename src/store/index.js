import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    completedTasks: JSON.parse(localStorage.getItem("completedTasks")) || [],
  },
  mutations: {
    addTask(state,newTask){
      if(newTask !== ''){
        state.tasks.push({task:newTask, status: "active"});
        if(!localStorage.getItem("tasks")){
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        } else {
          localStorage["tasks"] = JSON.stringify(state.tasks);
        }
      }
    },
    completeTask(state,taskId){
      state.completedTasks.push(state.tasks[taskId]);
      state.tasks[taskId].status = "completed";
      localStorage["tasks"] = JSON.stringify(state.tasks);
      if(!localStorage.getItem("completedTasks")){
        localStorage.setItem("completedTasks", JSON.stringify(state.completedTasks));
      } else {
        localStorage["completedTasks"] = JSON.stringify(state.completedTasks);
      }
    },
    clearCompleted(state){
        state.completedTasks.map(el => state.tasks.splice(el, 1));
        localStorage.removeItem("completedTasks");
        localStorage["tasks"] = JSON.stringify(state.tasks);
        state.completedTasks.length = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
