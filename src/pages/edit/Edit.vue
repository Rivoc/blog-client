<template>
  <div id="create">
    <h1>编辑文章</h1>
    <section class="edit">
      <h3>文章标题</h3>
      <el-input type="text"
                placeholder="请输入标题"
                v-model=" title"
                maxlength="15"
                show-word-limit>
      </el-input>
      <h3>内容简介</h3>
      <el-input type="textarea"
                placeholder="请输入简介"
                v-model="description"
                maxlength="60"
                show-word-limit>
      </el-input>
      <h3>文章内容</h3>
      <el-input type="textarea"
                :autosize="{ minRows: 5, maxRows: 10}"
                placeholder="请输入内容"
                v-model="content">
      </el-input>
      <span>是否展示到首页</span>
      <el-switch v-model="atIndex"
                 active-color="#13ce66"
                 inactive-color="#ff4949">
      </el-switch>
      <div>
        <el-button @click="onPatch">确定</el-button>
      </div>
    </section>

  </div>
</template>
<script>
import blog from '../../helper/blog'
export default {
  name: 'Edit',
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: true
    }
  },
  // 获取要编辑的博客的详情，填充到文本框内供用户修改
  created () {
    blog.getDetail({ blogId: this.$route.params.blogId }).then(res => {
      console.log('Edit页面的res')
      console.log(res)
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
    })
  },
  methods: {
    onPatch () {
      blog.updateBlog({ blogId: this.$route.params.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex }).then(res => {
        this.$message({
          message: '修改成功！',
          type: 'success'
        })
        this.$router.push({ name: 'My' })
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
h1 {
  text-align: center;
  padding: 20px 0;
}

h3 {
  margin-bottom: 10px;
}

.el-input, .el-textarea {
  margin-bottom: 30px;
}

.el-button {
  margin: 20px 0;
  padding: 10px 15px;
}
</style>
