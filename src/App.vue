<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
//register a component locally
// import Ninjas from './Ninjas'
import Header from './components/Header'
import Footer from './components/Footer'
import Ninjas from './components/Ninjas'

export default {
  components:{
    // 'ninjas': Ninjas,
    'app-header':Header,
    'app-footer':Footer,
    'ninjas': Ninjas
  },
  data(){
    return {
      ninjas:[
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
      title:'Vue Ninjas'
    }
  },
  methods:{
    updateTitle:function(updatedTitle){
      this.title = updatedTitle
    }
  },
  //lifecycle hooks
  beforeCreate(){
    alert('before create')
  },
  //this is the good time to grab data from DB
  created(){
    alert('created')
  },
  beforeMount(){
    alert('before mount')
  },
  //good time to manipulate the dom
  mounted(){
    alert('mounted')
  },
  beforeUpdate(){
    alert('before update')
  },
  //good time to manipulate the dom
  updated(){
    alert('updated')
  }

}
</script>

<!-- when scope styles, vuejs gives component unique identifiers/attributes to identify them  -->
<style scoped>
h1{
  color:purple
}
</style>
