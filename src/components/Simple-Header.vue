<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>

</template>


<script>
import {bus} from '../main'

  export default{
    props:{
      title:{
        type:String
      }
    },
    data(){
      return {

      }
    },
    methods:{
      changeTitle:function(){
        // change the title locally
        // this.title="Vue Wizzards"

        //emit event on this component
        // this.$emit('changeTitle','Vue Wizzards')

        this.title = "Vue Wizzards"
        bus.$emit('titleChanged','Vue Wizzards')
      }
    }
  }
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color:#222;
    text-align: center;
  }
</style>
