import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    completedTasks: [],
  },
  mutations: {
    addTask(state,newTask){
      if(newTask !== ''){
        state.tasks.push({task:newTask, status: "active"});
      }
    },
    completeTask(state,taskId){
      state.completedTasks.push(state.tasks[taskId]);
      state.tasks[taskId].status = "completed";
    },
    clearCompleted(state){
        state.completedTasks.map(el => state.tasks.splice(el, 1));
        state.completedTasks.length = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
