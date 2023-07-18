<template >
<div class="border border-primary ">
    <h2 class="border border-primary"> Childe Format componant my parent is : {{myDadIs}} </h2>
    <h5 class="">This data from parent app using props  ===  My name is  : {{name}} </h5>
    <button class="btn btn-warning my-2 mx-2" @click="$emit('ShowText','Tohami')">Event Direct</button>
    <button class="btn btn-primary my-2 mx-2" @click="eventfun">Event With Function</button>

</div>
</template >


<script >
export default {
    emits: ["ShowText"],
    props: ["name"],

    data(){
       return {
         myDadIs:"App",
         name:"Tohami"
       }
    },

    methods:{
        eventfun(){
         
            this.$emit('ShowTextFun',this.name)
        }
    }
}
</script >