<template >
  <div >
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="" value="" placeholder="name" required>
        <input type="text" name="" value="" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button type="button" name="button" v-on:click="handleSubmit">Login</button>
      </div>
    </form-helper>
  </div>

</template>

<script>
import formHelper from './formHelper'


export default{
  component:{
    'form-helper': formHelper
  }
}


</script>

<style scoped>

</style>
