<template >
  <!-- the column behind the theme is the argument of the directive-->
  <div id="show-blogs" v-theme:column="'wide'">

    <h1>All Blogs Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div class="single-blog" v-for="blog in filterdBlogs">
      <router-link v-bind:to="'/blog/'+blog.id"><h2>{{blog.title | to-uppercase }}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  data(){
    return{
      blogs:[],
      search:""
    }
  },
  methods:{

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
  //lifecycle hooks
  created(){
    this.$http.get('https://vue-playlist-387bd-default-rtdb.firebaseio.com/posts.json')
                .then(function(data){
                  return data.json()
                })
                .then(function(data){
                  var blogsArray = []
                  for( let key in data){
                    data[key].id = key
                    blogsArray.push(data[key])
                  }
                  this.blogs = blogsArray
                  // console.log(blogsArray)
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
