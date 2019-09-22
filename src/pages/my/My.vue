<template>
  <div v-if="blogList">
    <section class="my-blogs">
      <header>
        <div class="avatar">
          <img :src="user.avatar"
               alt="">
        </div>
        <h3 class="name">{{user.username}} <span class="sub">的博客足迹</span></h3>
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
        <div class="edit-delete">
          <router-link tag="span"
                       class="edit"
                       :to="{name:'Edit',
                       params:{
                        blogId:item.id
                       }}">编辑</router-link>
          <span class="delete"
                @click="onDelete(item.id)">删除</span>
        </div>
      </div>
    </section>
    <el-pagination :page-size="10"
                   :pager-count="5"
                   layout="prev, pager, next"
                   :total="total"
                   :current-page="currentPage"
                   @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import blog from '@/helper/blog.js'
export default {
  name: 'My',
  data () {
    return {
      blogList: '',
      total: 1,
      currentPage: 1

    }
  },
  methods: {
    onDelete (blogId) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        blog.deleteBlog({ blogId }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          // 删除之后通过改变blogList使页面发生变化
          // filter不改变原数组，要重新赋值
          this.blogList = this.blogList.filter(blogList => blogList.id !== blogId)
          console.log(this.blogList)
        })
      })
    },
    handleCurrentChange (page) {
      console.log('aa')
      console.log(this.user.id)
      blog.getBlogs({ page: page, userId: this.user.id }).then(res => {
        this.blogList = res.data
        this.total = res.total
        // 向路由地址传递页码
        this.$router.push({ path: '/my', query: { page: page } })
      })
    }

  },
  created () {
    this.currentPage = parseInt(this.$route.query.page) || 1
    blog.getBlogs({ page: this.currentPage, userId: this.user.id }).then(res => {
      console.log('My页面的res.data')
      console.log(res.data)
      this.blogList = res.data
      this.total = res.total
    })
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
<style lang="stylus" scoped>
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
    color: #00afc4;
    font-size: 28px;

    .sub {
      color: #c1c1c1;
      font-size: 16px;
    }
  }
}

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

  .edit-delete {
    grid-column: 2;
    grid-row: 3;
    margin-top: 5px;
    color: #00afc4;

    .delete, .edit {
      margin-right: 10px;
      cursor: pointer;
    }

    .delete:hover, .edit:hover {
      color: #3f72bd;
    }
  }
}
</style>
