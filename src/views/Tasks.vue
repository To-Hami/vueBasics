<template>
  <p>Tasks Componant </p>

  <p>Players over 30 about {{gettasks[0]}} playesr and below 30 about {{gettasks[1]}} </p> 
  <ul class="list-group">
    <li class="list-group-items" v-for="task in mytasks" :key="task.id">{{task.name}}</li>
  </ul>

</template>

<script>
import { computed } from 'vue';
export default {
  props:{mytasks : Array},

  setup (props){
    
    const gettasks =computed(()=>{
     let overcount  = 0 ;
     let belowcount  = 0 ;
     props.mytasks.map((task)=>{
        
        if(task.age > 30){
            overcount++
        }else{
           belowcount++
        }

     });

     return [overcount,belowcount];

     });

   return {gettasks}
  },
}
</script>

<style>

</style>