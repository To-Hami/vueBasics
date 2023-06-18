<template >
<hr>  
<div class="border border-primary">
    <h2 class="border border-primary"> Format componant </h2>

    <ul class="list-group">
        <li  
           v-for="(lang , index) in langs" :key="index"
           class="list-group-item" >
            <div class="d-flex justify-content-between">
                <p class="badge" :class="typeClass(lang['type'])">{{lang['name']}}</p>
                <span :class="[lang['type'] == 'frontend' ? 'btn btn-success' : 'btn btn-danger']" 
                      v-on:click="deletelang(index)">X</span>
            </div>
        </li>

    </ul>

    <input class="form-control my-2"  type="text" v-model="newLang" >

    <select class="form-select" v-model="type">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="both">Both</option>
    </select>

    <button class="btn btn-primary my-2" v-on:click="addLang">Add Lang</button>
</div>
</template>

<script >


  export default {
 data(){
    return{
        langs:[
            {name:'php', type:'backend'},
            {name:'python', type:'backend'},
            {name:'laravel', type:'backend'},
            {name:'html', type:'frontend'},
            {name:'css', type:'frontend'},
            {name:'js', type:'both'},
        ],

        newLang:"",
        newClass:"bg-danger",
        type:"dsfsdf"
    }
   },

   methods:{
        addLang(){
          if(this.newLang.length > 0){
              this.langs.push({
              name:this.newLang ,
              type:this.type ,
          
              })

              this.newLang = ""
          }  
        },

        deletelang(index){
         this.langs.splice(index,1)
        },

        typeClass(type){
            if(type == 'frontend'){
                return 'bg-primary';
            }else if(type == 'backend'){
                return 'bg-success';
            }else{
                return 'bg-dark';
            }
        }



   }
  }

</script>