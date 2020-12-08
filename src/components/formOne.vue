<template >
  <div >
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in the form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="" value="" placeholder="name" required>
        <label>Your Message:</label>
        <textarea ></textarea>
      </div>
      <div slot="form-controls">
        <button type="button" name="button" v-on:click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>

</template>

<script>
import formHelper from './formHelper'

export default{
  component:{
    'form-helper':formHelper
  }
}

</script>

<style scoped>

</style>
