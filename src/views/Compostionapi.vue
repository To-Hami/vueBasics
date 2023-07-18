<template>
  <p ref="title">  compostion api </p> 
  <button class="btn btn-danger mx-2" @click="changeColorred">Change To Red</button>
  <button class="btn btn-primary" @click="changeColorblue">Change To Blue</button>
  

</template>

<script>
import { ref } from 'vue';
export default {

  setup(){
    const myName="Tohami";
    const title = ref(null);
    const changeColorred = () => {
      title.value.classList.remove("text-primary")
      title.value.classList.add("text-danger","bg-warning")

    }

   const changeColorblue = () => {
      title.value.classList.remove("text-danger")
      title.value.classList.add("text-primary","bg-warning")
    }

    return {myName,changeColorred,changeColorblue,title}
  }
  
}
</script>

<style>

</style>