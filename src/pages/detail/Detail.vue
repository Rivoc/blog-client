<template>
  <div v-if="blogDetail">
    <section class="post-header">
      <figure>
        <router-link tag="div"
                     class="avatar"
                     :to="'/user/'+blogDetail.user.id">
          <img :src="blogDetail.user.avatar"
               alt=""
               class="author-avatar">
        </router-link>
      </figure>
      <div class="title">
        <h3>{{blogDetail.title}}</h3>
      </div>
      <div>
        <router-link :to="'/user/'+blogDetail.user.id"
                     tag="span"
                     class="author-name">{{blogDetail.user.username}}</router-link>
        <span class="create-time">发布于{{blogDetail.createdAt|formatDate}}</span>
      </div>

    </section>
    <section v-html="markDown">
    </section>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import blog from '@/helper/blog.js'
import marked from 'marked'
export default {
  name: 'Detail',
  data () {
    return {
      blogDetail: ''

    }
  },
  created () {
    this.bus.$emit('changeLoading', true)
    blog.getDetail({ blogId: this.$route.params.blogId }).then(res => {
      this.blogDetail = res.data
      this.bus.$emit('changeLoading', false)
      console.log(res.data)
    })
  },
  computed: {
    ...mapGetters(['user']),
    markDown () {
      return marked(this.blogDetail.content)
    }
  }
}
</script>
<style lang="stylus" scoped>

.post-header {
  display: grid;
  grid-template-columns: 9% auto;
  grid-template-rows: auto auto;
  padding: 20px 0;
  border-bottom: 1px solid #ebebeb;

  figure {
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-self: center;

    .avatar {
      display: grid;
      cursor: pointer;

      .author-avatar {
        width: 60px;
        border-radius: 50%;
        justify-self: center;
      }
    }
  }

  .title {
    grid-column: 2;
    grid-row: 1;
  }

  .author-name {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    font: size 12px;
    color: #00afc4;
    margin-top: 5px;
    cursor: pointer;
  }

  .create-time {
    grid-column: 2;
    grid-row: 2;
    margin-left: 5px;
    font-size: 12px;
    color: #999;
  }
}
</style>
