<template>
    <h2>  Hello {{name}}  </h2>
    <p v-text="newtext"></p>
    <div v-html="`<h1>Hllo in html ${name}</h1>`"></div>
    <div v-if="name.length > 3">Yes Your Name Is {{name}}</div>
    <div v-show="skills.length > 1">Yes Your skills Is {{skills}}</div>
    <ul >
        <li v-for="skill in skills">{{skill}}</li>
    </ul>
    <first />
    
</template>
<script >
import first from './views/first.vue'

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
     
     *** 
     
     
     

    */
    components: { first },
    data(){
        return{
            name:"tohami",
            newtext:"This is your new text",
            skills:[
                'html','css','js'
            ],
         

        }
    }
  
  }
</script>
