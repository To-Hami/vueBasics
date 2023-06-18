<template>
<!-- use var in html tag -->
    <h2>  Hello {{name}}  </h2>

<!-- v-=text -->
    <p v-text="newtext"></p>

    <div v-html="html"></div>
<!-- v-html -->
    <div v-html="`<h1>Hllo in html ${name}</h1>`"></div>

    <div v-if="name.length > 3"> Yes Your Name Is {{name}}</div>
<!-- v-if -->
    <div v-if="players.length > 5">{{players}}</div>
    <div v-else>No Playes Found </div>

<!-- v-show -->
    <div v-show="skills.length > 1">Yes Your skills Is {{skills}}</div>

<!-- v-for -->
    <ul >
        <li v-for="(skill , index) in skills" :key="index">
            {{skill + " " + index}}</li>
    </ul>


<!-- one model binding -->
    <input type="text" v-bind:value="name">
    <input type="text" :value="name">

    <img :src="img1">
    <img :src="img2">



    <!-- use bootstrp -->

    <ul class="list-group">
        <li  
           v-for="(palyer , index) in players" :key="index"
           class="list-group-item" >
            {{palyer}}
        </li>

    </ul>

<!-- v-on  inline function -->
<button class="btn btn-primary my-2" v-on:click="players.push('sami')">Click</button>


  <!-- tow model binding   -->

  <hr>
  {{name}}
  <input class="form-control" type="text" v-model="name" @keydown.enter="players.push('alnoor')" >
 <hr>
 <p>use Methods : </p>


    <ul class="list-group">
        <li  
           v-for="(palyer , index) in players" :key="index"
           class="list-group-item" >
            <div class="d-flex justify-content-between">
                <p>{{palyer}}</p>
                <span class="btn btn-danger" v-on:click="remove(index)">X</span>
            </div>
        </li>

    </ul>

    <input class="form-control my-2"  type="text" v-model="newPlayer" >

    <button class="btn btn-primary my-2" v-on:click="addPlayer">Add Player</button>

<hr>
<p> class and style pinding : </p>
<p :class="[TWhite , BPrimary]"> Hello blue</p>
<p :class="[TRed , BBlack]"> Hello black</p>

<p :class="active ? ['bg-primary' ,'text-dark'] : ['bg-danger' , 'text-primary'] ">  Use Active </p>

<!-- use component -->
    <first />


      <format />

</template>
<script >
import first from './views/first.vue'

import format from './views/format.vue'

  export default {
    /* 

      ***  helpfull tools 
          //to vue  in vscode is vuter
      *** how to use compoanant in other componant 
         1/ import componant file 
         2/call componant in js 
         3/ call componant in template 

      ***  how to use data
            // evrythings in vue in function 
            data(){
                return{
                    name:"tohami",
                    }
            }


      *** vue durectives
      1/v-text
      2/v-html
      2/v-if
      2/v-for
     
     *** one model binding to get value from prams using :value
        <input type="text" v-bind:value="name">
        or use shorthand
        <input type="text" :value="name">

    *** v-on
        v-on:click

    *** to model binding using v-model
       {{name}}
      <input class="form-control" type="text" v-model="name" >

    *** use methods with prams
     <button  v-on:click="addPlayer">Add Player</button>
     <span  v-on:click="remove(index)">X</span>


    *** class and style pinding : 
     <p :class="[TWhite , BPrimary]"> Hello</p>








     
     
     

    */
    components: { first  ,format },
    data(){
        return{
            html:"<p>pargraph from html</p>",
            name:"tohami",
            newtext:"This is your new text Data",
            img1:"/src/assets/images/img1.jpg",
            img2:"/src/assets/images/img2.jpg",
            skills:[
                'html','css','js'
            ],
            players:[
                'nymar','empapy','ronaldo'
            ],
            newPlayer:"",
            TWhite:'text-white',
            BPrimary:'bg-primary',
            TRed:'text-danger',
            BBlack:'bg-dark',

            active:false
         

        }
    },
    methods:{
        addPlayer(){
            this.players.push(this.newPlayer)
            this.newPlayer=""
        },
        remove(index){
            this.players.splice(index,1)
        }
    }
  
  }
</script>
