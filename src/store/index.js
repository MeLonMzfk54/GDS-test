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
        state.tasks.push(newTask);
      }
    },
    completeTask(state,taskId){
      state.tasks.splice(taskId, 1);
      state.completedTasks.push(taskId);
    },
    clearCompleted(state){
      if(state.completedTasks.length)
        state.completedTasks.map(el => state.tasks.splice(el, 1));
    },
  },
  actions: {
  },
  modules: {
  }
})
