<template>
  <div>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="50">
      <div class="work_panel">
        <div class="work_list">
          <div v-for="(list_item,list_index) in list"
               :key="list_index"
               class="work_item mb25">
            <div class="work_avatar">
              <img :src="list_item.logo?list_item.logo: ''"
                   class="w116h116">
            </div>
            <div class="item_r ml30">
              <div class="work_info">
                <h3 class="info_type">{{list_item.job.name}}</h3>
                <p class="info_describe mb10"
                   v-if="list_item.status === 1">入职时间：{{list_item.worked_at}}</p>
                <p class="info_describe">{{list_item.company}}</p>
              </div>
              <img v-if="list_item.status === 1"
                   src="./image/register@2x.png"
                   class="work_status">
              <img v-else
                   src="./image/join@2x.png"
                   class="work_status">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myWork',
  data () {
    return {
      page: 1, //分页
      last_page: 1, //最后一页
      loading: false,
      list: [] //数据对象
    }
  },
  created () { },
  mounted () {
    this.pageGet()
  },
  methods: {
    // 获取
    pageGet () {
      let _this = this
      let options = {
        method: 'get',
        url: $utill.api.url + 'api/users/work',
        headers: {
          'Authorization': Lockr.get('token_type') + ' ' + Lockr.get('token'),
        },
        data: {
          page: _this.page
        }
      }
      $http.request(options).then(res => {
        if (this.page == 1) {
          this.list = res.data.data.data
        } else {
          for (let i in res.data.data.data) {
            this.list.push(res.data.data.data[i])
          }
        }
        // 设置最后一页
        this.last_page = res.data.data.last_page
        // 设置加载动画
        this.loading = false
      }).catch(res => {
        Toast({
          message: res.response.data.msg,
          position: 'bottom',
          duration: 5000
        })
      })
    },
    loadMore () {
      if (this.list.length == 0) {
        return false
      }
      this.page += 1
      if (this.page > this.last_page) {
        return false
      }
      // 显示
      this.loading = true
      this.pageGet()
    }
  },
  computed: {},
  destroyed () { }
}
</script>
<style scoped>
@import './index.css';
</style>