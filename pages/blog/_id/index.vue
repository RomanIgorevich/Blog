<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from "axios";

import post from "@/components/Blog/Post.vue";
import comments from "@/components/Comments/Comments.vue";
import newComment from "@/components/Comments/NewComment.vue";

export default {
  components: {
    post,
    comments,
    newComment,
  },
  // data(){
  //   return {
  //     post: {
  //       id:1,
  //       title:'test1',
  //       descr:'test1',
  //       img:''
  //     },
  //     comments:[
  //       {name:'test1', text:'test1'}
  //     ]
  //   }
  // }
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-1449d-default-rtdb.firebaseio.com/posts/${context.params.id}.json`
      ),
      axios.get(
        `https://blog-nuxt-1449d-default-rtdb.firebaseio.com/comments.json`
      ),
    ]);
    // let commentsArray = [],
    //   commentsArrayRes = [];
    // console.log(commentsArray);
    // Object.keys(comments.data).forEach((key) => {
    //   commentsArray.push(comments.data[key]);
    // });
    // console.log(commentsArray);
    // for (let i = 0; i < commentsArray.length; i++) {
    //   if (
    //     commentsArray[i].postId === context.params.id &&
    //     commentsArray[i].publish === true
    //   ) {
    //     console.log(commentsArray[i]);
    //     commentsArrayRes.push(commentsArray[i]);
    //   }
    // }
    let commentsArrayRes = Object.values(comments.data).filter(
      (comment) => comment.postId === context.params.id && comment.publish
    );
    return {
      post: post.data,
      comments: commentsArrayRes,
    };
  },
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 400px;
    margin-bottom: 16px;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: left;
}
</style>
