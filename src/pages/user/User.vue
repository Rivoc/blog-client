<template>
  <div v-if="blogList">
    <div class="user-info">
      <header>
        <div class="avatar">
          <img :src="blogList[0].user.avatar"
               alt="">
        </div>
        <h3 class="name">{{blogList[0].user.username}}的所有博客</h3>
      </header>
      <div class="cell"
           v-for="(item,index) of blogList"
           :key="index">
        <span class="month">{{item.createdAt|getMonth}}</span>
        <span class="year">{{item.createdAt|getYear}}</span>
        <router-link :to="'/detail/'+item.id"
                     tag="div">
          <h3 class="title">{{item.title}}</h3>
          <div class="description">{{item.description}}</div>
        </router-link>
      </div>
    </div>
    <section>
      <el-pagination :page-size="10"
                     :pager-count="5"
                     layout="prev, pager, next"
                     :total="total"
                     :current-page="currentPage"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </section>
  </div>
</template>
<script>
import blog from '@/helper/blog.js'
import { mapGetters } from 'vuex'
export default {
  name: 'User',
  computed: {
    ...mapGetters(['user'])
  },
  data () {
    return {
      blogList: '',
      total: 1,
      currentPage: 1
    }
  },
  methods: {
    handleCurrentChange (page) {
      this.blogList = ''
      this.bus.$emit('changeLoading', true)
      this.currentPage = page
      blog.getBlogs({ page: page, userId: this.$route.params.userId }).then(res => {
        this.blogList = res.data
        this.total = res.total
        this.bus.$emit('changeLoading', false)
        // 向路由地址传递页码
        this.$router.push({ path: `/user/${this.$route.params.userId}`, query: { page: page } })
      })
    }
  },
  created () {
    this.bus.$emit('changeLoading', true)
    this.currentPage = parseInt(this.$route.query.page) || 1
    blog.getBlogs({ page: this.currentPage, userId: this.$route.params.userId }).then(res => {
      console.log('user页面的res')
      console.log(res)
      this.blogList = res.data
      this.total = res.total
      this.bus.$emit('changeLoading', false)
    })
  }
}
</script>
<style lang="stylus" scoped>
.cell {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 70px auto;
  grid-template-rows: auto auto auto;
  margin-bottom: 30px;

  .month {
    justify-self: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    font-size: 32px;
    color: #999;
  }

  .year {
    justify-self: center;
    align-self: center;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    font-size: 16px;
    color: #999;
  }

  .title {
    align-self: center;
    cursor: pointer;
  }

  .description {
    grid-column: 2;
    grid-row: 2;
    cursor: pointer;
  }
}

header {
  display: grid;
  grid-template-columns: 9% auto;
  grid-template-rows: auto;
  padding: 15px 0;
  border-bottom: 1px solid #ebebeb;

  .avatar {
    grid-row: 1;
    grid-column: 1 / 2;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid #282c2f;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .name {
    align-self: center;
    grid-column: 2 / 3;
    grid-row: 1;
    font-size: 24px;
  }
}
</style>
