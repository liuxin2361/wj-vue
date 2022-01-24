<template>
  <div>
    <el-row style="height: 840px">
      <!--当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。-->
      <search-bar ref="searchBar" @onSearch="searchResult"></search-bar>
      <el-tooltip effect="dark" placement="right"
                  v-for="item in books.slice((currentPage-1)*pageSize, currentPage*pageSize)" :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{ item.title }}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{ item.author }}</span> /
          <span>{{ item.date }}</span> /
          <span>{{ item.press }}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{ item.abs }}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="cover" @click="editBook(item)">
            <img :src="item.cover" alt="封面">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{ item.title }}</a>
            </div>
            <i class="el-icon-delete" @click="deleteBook(item.id)"></i>
          </div>
          <div class="author">{{ item.author }}</div>
        </el-card>
      </el-tooltip>
      <edit-form @onSubmit="loadBooks" ref="edit"></edit-form>
    </el-row>
    <el-row>
      <el-pagination :page-size="pageSize" :total="books.length" :current-page="currentPage"
                     @current-change="handleCurrentChange"></el-pagination>
    </el-row>
  </div>
</template>

<script>
import SearchBar from "./SearchBar"
import EditForm from "./EditForm"

export default {
  name: 'Books',
  components: {SearchBar, EditForm},
  // data() {
  data: function () {
    return {
      books: [],
      currentPage: 1, // 当前页数
      pageSize: 10, // 每页显示条目个数
    }
  },
  //mounted 即“已挂载” ，所谓挂载，就是我们写的Vue代码被转换为HTML并替换相应的DOM这个过程，这个过程完事儿的时候，就会执行mounted里面的代码
  mounted() {
    this.loadBooks()
  },
  methods: {
    loadBooks() {
      this.$axios.get('/books').then(resp => {
        if (resp && resp.status === 200) {
          this.books = resp.data;
        }
      })
    },
    deleteBook(id) {
      this.$confirm('此操作将永久删除该书籍, 是否继续?', {
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/delete', {id: id}).then(resp => {
          if (resp && resp.status === 200) {
            this.loadBooks()
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      })
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage)
    },
    searchResult() {
      this.$axios.get('/search?keywords=' + this.$refs.searchBar.keywords, {}).then(resp => {
        if (resp && resp.status === 200) {
          this.books = resp.data
        }
      })
    },
    editBook(item) {
      this.$refs.edit.dialogFormVisible = true
      this.$refs.edit.form = {
        id: item.id,
        title: item.title,
        author: item.author,
        date: item.date,
        press: item.press,
        cover: item.cover,
        abs: item.abs,
        category: {
          id: item.category.id.toString(),
          name: item.category.name
        }
      }
    }
  }
}
</script>

<style scoped>
.cover {
  width: 115px;
  height: 172px;
  margin-bottom: 7px;
  overflow: hidden;
  cursor: pointer;
}

img {
  width: 115px;
  height: 172px;
  /*margin: 0 auto;*/
}

.title {
  font-size: 14px;
  text-align: left;
}

.author {
  color: #333;
  width: 102px;
  font-size: 13px;
  margin-bottom: 6px;
  text-align: left;
}

.abstract {
  display: block;
  line-height: 17px;
}

a {
  text-decoration: none;
}

a:link, a:visited, a:focus {
  color: #3377aa;
}

.el-icon-delete {
  cursor: pointer; /* 鼠标移动上去后的形状*/
  float: right;
}
</style>
