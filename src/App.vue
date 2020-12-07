<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
//register a component locally
import Ninjas from './Ninjas'

export default {
  components:{
    'ninjas': Ninjas
  },
  data(){
    return {
      title:"Ninjas App"
    }
  }
}
</script>

<!-- when scope styles, vuejs gives component unique identifiers/attributes to identify them  -->
<style scoped>
h1{
  color:purple
}
</style>
