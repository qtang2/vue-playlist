<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <button  v-on:click="component='form-one'">Show Form One</button>
    <button  v-on:click="component='form-two'">Show Form Two</button>
    <!-- <form-helper>
      <div slot="form-header">
        <h3>title of form 1</h3>
        <p>Info abt form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="text" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button type="button" name="submit" v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper> -->
    <!-- <form-helper>
      <h2 slot="title">{{title}}</h2>
      <p slot='text'>I am the paragraph text</p>
    </form-helper> -->
    <!-- <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer v-bind:title="title"></app-footer> -->
  </div>
</template>

<script>
//register a component locally
// import Ninjas from './Ninjas'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Ninjas from './components/Ninjas'
// import formHelper from './components/formHelper'
import formOne from './components/formOne'
import formTwo from './components/formTwo'

export default {
  components:{
    'form-one':formOne,
    'form-two':formTwo
    // 'form-helper':formHelper
    // 'ninjas': Ninjas,
    // 'app-header':Header,
    // 'app-footer':Footer,
    // 'ninjas': Ninjas
  },
  data(){
    return {
      component:'form-two'
      // title:"Dynamic Title"
      // ninjas:[
      //         {name: 'Ryu', speciality: 'Vue Components', show: false},
      //         {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
      //         {name: 'Hitoshi', speciality: 'Click Events', show: false},
      //         {name: 'Tango', speciality: 'Conditionals', show: false},
      //         {name: 'Kami', speciality: 'Webpack', show: false},
      //         {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      //     ],
      // title:'Vue Ninjas'

    }
  },
  methods:{
    // updateTitle:function(updatedTitle){
    //   this.title = updatedTitle
    // }
  },


  //lifecycle hooks
  // beforeCreate(){
  //   alert('before create')
  // },
  // //this is the good time to grab data from DB
  // created(){
  //   alert('created')
  // },
  // beforeMount(){
  //   alert('before mount')
  // },
  // //good time to manipulate the dom
  // mounted(){
  //   alert('mounted')
  // },
  // beforeUpdate(){
  //   alert('before update')
  // },
  // //good time to manipulate the dom
  // updated(){
  //   alert('updated')
  // }

}
</script>

<!-- when scope styles, vuejs gives component unique identifiers/attributes to identify them  -->
<style scoped>
h2{
  color:purple
}
</style>
