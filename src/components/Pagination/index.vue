<template>
  <div class="pagination">
    <button :disabled="numberArr[0] === 1" @click="$emit('getPageNo', pageNo-1)">上一页</button>
    <button v-if="numberArr[0] > 1" @click="$emit('getPageNo', 1)">1</button>
    <button v-if="numberArr[0] > 2">···</button>

    <button v-for="(num, index) in numberArr" :key="index" @click="$emit('getPageNo', num)" :class="{active: pageNo===num}">{{num}}</button>

    <button v-if="numberArr.at(-1) < totalPage - 1">···</button>
    <button v-if="numberArr.at(-1) < totalPage" @click="$emit('getPageNo', totalPage)">{{totalPage}}</button>
    <button :disabled="numberArr.at(-1) === totalPage" @click="$emit('getPageNo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">{{ total }} 条---{{totalPage}} 页</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    numberArr() {
      let tmp = this.pageNo - Math.floor(this.continues/2)
      const start = tmp > 0 ? tmp : 1
      tmp = this.pageNo + Math.floor(this.continues/2)
      const end = tmp <= this.totalPage ? tmp : this.totalPage
      let ans = []
      for(let i = start;i <= end;i++){
        ans.push(i)
      }
      return ans
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
