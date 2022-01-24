<template>
  <el-upload
      class="img-upload"
      action="http://localhost:8443/api/covers"
      ref="upload"
      with-credentials
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="handleSuccess"
      :multiple="false"
      :limit="1"
      :on-exceed="handleExceed"
      :file-list="fileList">
    <el-button size="small" type="primary" style="position: absolute; left: 0">点击上传</el-button>
    <div slot="tip" class="el-upload__tip" style="width: 210px">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
export default {
  name: "ImgUpload",
  data() {
    return {
      fileList: [],
      url: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleSuccess(response) {
      this.url = response
      this.$emit("onUpload")
      this.$message.info('上传成功')
    },
    clear() {
      // 清除上传文件列表
      this.$refs.upload.clearFiles()
    }
  },
}
</script>

<style scoped>

</style>