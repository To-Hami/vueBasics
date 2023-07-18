<template>

     <div class="my-3">

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

        </div>
        <!-- use component -->
        <div class="my-3">
            <first /> 
        </div>
        
        <div class="my-3">
            <format /> 
        </div>

            
        <div class="my-3">
                <childformat :name="name" @ShowText="funShowText($event)"  @ShowTextFun="eventfunhere($event)"  ></childformat>

        </div>



        <div class="my-3">
              <p> Use Router </p>
            <router-link class="btn btn-primary mx-2" to="about">About </router-link>
            <router-link class="btn btn-info" to="contact">Contact Us </router-link>
            <button class="btn btn-danger mx-2" @click="contact">Go by methods  to Contact Us </button>

            <router-link :to="{name: 'contact' , query:{name:'sami'} }" class="btn btn-danger my-2">
                send prams using router Contact Us </router-link>

          <div> 
              <router-link :to="{name: 'user'}" class="btn btn-warning my-2 mx-2">User</router-link>
              <router-link :to="{name: 'post'}" class="btn btn-primary my-2 mx-2">Post</router-link>
               <router-link :to="{name: 'compostionapi'}" class="btn btn-primary my-2 mx-2">Compostion api</router-link>
               <router-link :to="{name: 'head'}" class="btn btn-primary my-2 mx-2">Head</router-link>
               <router-link :to="{name: 'heat'}" class="btn btn-primary my-2 mx-2" >Heats</router-link>
          </div>

          
            <router-view></router-view>


            <div class="my-3">
                <Tasks :mytasks="mytasks"></Tasks>

            </div>

        </div>
</template>

<script>


    import { computed, ref} from 'vue'
    import first from './views/first.vue'
    import format from './views/format.vue'
    import Childformat from './views/Childformat.vue'
    import heat from './views/Heat.vue'
    import Tasks from './views/Tasks.vue'
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

        *** computed functions is cached and work one time and 
            not work again exept if something change
            itis good for performance  use in format.vue

        *** watch looking for prams or data if change do somthing use in format.vue
        
        *** props using when you are in son componant and you want 
            to get data or prams from parent componant 
            in parent componant use son componant and pass prams 
            <childformat :name="name"></childformat>

            in son coponant declare props 
            props:["name"],
            then use prams normaly 

        **** event and litener 
            link between child and parent componants 

            in child componant make event like 
            <button class="btn btn-warning my-2 mx-2" @click="$emit('ShowText','Tohami')">Event</button>
            declare emit in emits =>  emits: ["ShowText"],

            in parent componant listen to event and run your function  like 
            <childformat @ShowText="funShowText($event)"></childformat>

        **** how to use router 

            install roter from vue
            make router folder and index.js file in src
            in index.js import { createRouter, createWebHistory } from 'vue-router'
            in index.js all view you need
            in index.js make router links like :

            const router = createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),
            routes: [
              {
                path: '/',
                name: 'first',
                component: first
              },

            in main js use router with app:

            import router from './router'
            const app = createApp(App)
            app.use(router)

            in app.vue use router-view tag and router link :

            <router-view></router-view>


            ****  send prams using router
             <router-link :to="{name: 'contact' , query:{name:'sami'} }">
                 Contact Us </router-link>

            ***  Composition Api 
                 itis many functions like setup , created mounted , ......
                 1/ setup : itis first function will be call in your script 
                  setup(){
                        const myName="Tohami";
                        return {myName}
                    }
            *** props to pass data from parent componant to child






            



        */
        components: { first  ,format  , Childformat,heat , Tasks},

        setup(){
            const mytasks =ref( [
                 {id:1,'name': 'Tohami' , 'age':20  },
                 {id:2,'name': 'Sami' , 'age':40  },
                 {id:3,'name': 'Ali' , 'age':33  },
                 {id:4,'name': 'Mazin' , 'age':19  },
                 {id:5,'name': 'Gehad' , 'age':13 },
                 {id:6,'name': 'amier' , 'age':11 },
                ]);
                return {mytasks}
            },
    
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
            } ,

            funShowText(value){
                console.log("value")
                console.log(value)
            } ,

            eventfunhere(value){
                console.log(value)
            },
            contact(){
                this.$router.push('/contact')
            }
        } ,
    

}
</script>

