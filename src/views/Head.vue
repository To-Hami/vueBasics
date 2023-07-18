<template>
  <div class="alert " :class="heatcolr" role="alert">
     A simple primary alert—check it out!
  </div>

  <input type="text" class="form-control" v-model="temp">
  <button class="btn btn-danger my-2" >Save </button>

</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
      const heatcolr = ref('alert-primary');
      const temp = ref(40);
      const temp222 =200;

       return { heatcolr,temp ,tr }
    }
    

}
</script>

<style>

</style>