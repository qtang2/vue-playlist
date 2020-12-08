<template >
  <div id="show-blogs"  v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filterdBlogs">
      <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {

  data(){
    return {
      blogs:[],
      search:""
    }
  },
  computed:{
    // filterdBlogs:function(){
    //   return this.blogs.filter(blog =>{return blog.title.match(this.search)})
    // }
  },
  filters:{
    toUppercase:function(value){
      return value.toUpperCase()
    }
  },
  directives:{
    'rainbow':{
      bind(el,binding, vnode){
        el.style.color = "#"+ Math.random().toString(16).slice(2,8)
      }
    }
  },
  mixins:[searchMixin],

  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function(data){
                  this.blogs = data.body.slice(0,10)
                })
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
