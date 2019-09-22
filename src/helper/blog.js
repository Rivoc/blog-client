import request from './request.js'
const URL = {
  get_blogs: '/blog',
  get_detail: '/blog/:blogId',
  create_blog: '/blog',
  update_blog: '/blog/:blogId',
  delete_blog: '/blog/:blogId'
}
export default {
  // 获取博客列表，不传userId默认全部，传userId显示id对应的用户的博客列表
  getBlogs ({ page = 1, userId, atIndex }) {
    return request(URL.get_blogs, 'GET', { page, userId, atIndex })
  },
  // 获取某一博客的详情
  getDetail ({ blogId }) {
    return request(URL.get_detail.replace(':blogId', blogId))
  },
  createBlog ({ title, content, description, atIndex }) {
    return request(URL.create_blog, 'POST', { title, content, description, atIndex })
  },
  updateBlog ({ blogId }, { title, content, description, atIndex }) {
    return request(URL.update_blog.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },
  deleteBlog ({ blogId }) {
    return request(URL.delete_blog.replace(':blogId', blogId), 'DELETE')
  }
}
