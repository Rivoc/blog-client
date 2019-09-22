<template>
  <div id="Home">
    <div v-if="blogList">
      <section class="post-list">
        <div class="cell"
             v-for="(item,index) of blogList"
             :key="index"
             ref="cells">
          <!-- 头像昵称 -->
          <router-link :to="'/user/'+item.user.id"
                       tag="figure">
            <div class="avatar">
              <img :src="item.user.avatar"
                   :alt="item.user.username"
                   class="author-avatar">
            </div>
            <figcaption class="author-name">{{item.user.username}}</figcaption>
          </router-link>
          <!-- 博客标题、描述 -->
          <router-link :to="'/detail/'+item.id"
                       tag="div">
            <div class="title">
              <h3>{{item.title}}</h3><span class="create-time">{{item.createdAt|formatDate}}</span><span class="updated-time">最后编辑：{{item.updatedAt|format2}}</span>
            </div>

            <div class="list-detail">{{item.description}}</div>
          </router-link>
        </div>
      </section>
      <section class="pageWrap">
        <el-pagination :page-size="10"
                       :pager-count="5"
                       layout="prev, pager, next"
                       :total="total"
                       :current-page="currentPage"
                       @current-change="handleCurrentChange"
                       class="pagination">
        </el-pagination>
      </section>
    </div>
  </div>
</template>
<script>
import blog from '../../helper/blog'
export default {
  name: 'Home',
  data () {
    return {
      blogList: '',
      total: 1,
      // pageNo: 1
      currentPage: 1

    }
  },
  methods: {
    handleCurrentChange (page) {
      this.blogList = ''
      this.bus.$emit('changeLoading', true)
      this.currentPage = page
      blog.getBlogs({ page, atIndex: true }).then(res => {
        this.blogList = res.data
        console.log('Home页面的res')
        console.log('res')
        this.total = res.total
        this.bus.$emit('changeLoading', false)
        // 向路由地址传递页码
        this.$router.push({ path: '/', query: { page: page } })
        setTimeout(() => {
          let cells = this.$refs.cells
          let sum = 0
          cells.forEach((cell) => {
            cell.style.animationDelay = sum + 's'
            sum = sum + 0.05
          })
        }, 10)
        // this.pageNo = page
      })
    }
  },
  // beforeUpdate () {
  //   localStorage.setItem('pagination', this.pageNo)
  // },
  // beforeDestroy () {
  //   localStorage.setItem('pagination', '1')
  // },
  created () {
    // this.pageNo = Number(localStorage.getItem('pagination')) || 1
    // this.blogList = ''

    this.bus.$emit('changeLoading', true)
    this.currentPage = parseInt(this.$route.query.page) || 1
    blog.getBlogs({ page: this.currentPage, atIndex: true }).then(res => {
      this.bus.$emit('changeLoading', false)
      this.blogList = res.data
      this.total = res.total
      // 渲染完毕后给cell添加动画延迟
      setTimeout(() => {
        let cells = this.$refs.cells
        let sum = 0
        cells.forEach((cell) => {
          cell.style.animationDelay = sum + 's'
          sum = sum + 0.05
        })
      }, 10)
    })
  }
  // mounted () {
  //   console.log('开始加载')
  //   setTimeout(() => {
  //     console.log(this.$refs)
  //   }, 20)
  // }
}
</script>
<style lang="stylus" scoped>
.pageWrap {
  display: flex;
  justify-content: center;
}

.cell {
  display: grid;
  grid-template-columns: 9% auto;
  grid-template-rows: auto auto;
  margin: 20px 0;
  cursor: pointer;
  animation: fadeInLeft 1.2s ease-out;
  animation-fill-mode: forwards;
  transform: translate3d(-100%, 0, 0);

  figure {
    display: grid;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-self: center;

    .author-name {
      align-self: center;
      justify-self: center;
      font: size 12px;
      color: #999;
      margin-top: 5px;
    }

    .avatar {
      display: grid;

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

    h3 {
      display: inline-block;
    }

    .create-time, .updated-time {
      margin-left: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  .list-detail {
    grid-column: 2;
    grid-row: 2 / 3;
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
