<template>
<div class="border">
  <div class="alert " :class="heatcolr" role="alert">
     Heat componant use ref 
  </div>

  <input type="text" class="form-control" v-model="heatval">
  <button class="btn btn-danger my-2" @click.prevent="chechheat" >Save </button>
</div>






<div class="border my-3">
  <div class="alert " :class="chechheatc" role="alert">
     Heat componant use ref and computed  
  </div>

  <input type="text" class="form-control" v-model="heatvalc">

  
</div>




<div class="border my-3">
  <div class="alert " :class="alertwatch" role="alert">
     Heat componant use ref and watch  
  </div>

  <input type="text" class="form-control" v-model="valwatch">

  
</div>




</template>

<script>
import { computed, ref ,watch } from 'vue';

export default {

    setup(){
        const heatval = ref(20) ;
        const heatvalc = ref(20) ;
        const heatcolr =ref("");
        const heatcolrc =ref("");
        const heatvalcvalue =ref("");
        const alertwatch =ref("");
        const valwatch =ref(0);

      

      


        const chechheat = ()=>{ 
         
           if( heatval.value <= 20   ){
               heatcolr.value = "alert-success";
           }else  if( heatval.value > 20 && heatval.value < 50){
               heatcolr.value = "alert-warning";
           }else if ( heatval.value > 50){
               heatcolr.value = "alert-danger";
           }


        };


        const chechheatc =  computed(()=>{
       
           if( heatvalc.value <= 20   ){
               heatcolrc.value = "alert-success";
           }else  if( heatvalc.value > 20 && heatvalc.value < 50){
               heatcolrc.value = "alert-warning";
           }else if ( heatvalc.value > 50){
               heatcolrc.value = "alert-danger";
           } 
           return heatcolrc.value ; 
        });



        watch (valwatch , (newval,oldval)=>{
         if( newval <= 20   ){
               alertwatch.value = "alert-success";
           }else  if(newval > 20 && newval < 50){
               alertwatch.value = "alert-warning";
           }else if ( newval > 50){
               alertwatch.value = "alert-danger";
           } 
           return alertwatch.value ; 
        });


      


        return {heatval ,heatvalc, heatcolr ,heatcolrc,chechheat,chechheatc ,heatvalcvalue,valwatch,alertwatch};

        
    },

};
</script>

<style>

</style>