<template>
  <div>
    <div class="work_panel">
      <div class="work_list">
        <div v-for="(work_item,work_index) in myWork"
             :key="work_index"
             class="work_item mb25">
          <div class="work_avatar">
            <img src="//cdn2.jianshu.io/assets/default_avatar/11-4d7c6ca89f439111aff57b23be1c73ba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
                 class="w116h116">
          </div>
          <div class="item_r ml30">
            <div class="work_info">
              <h3 class="info_type">{{work_item.type === 1? '普工': 'CEO'}}</h3>
              <p class="info_describe mb10"
                 v-if="work_item.status === 1">入职时间：2018.10.31</p>
              <p class="info_describe">{{company_name}}</p>
            </div>
            <img v-if="work_item.status === 1"
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
</template>
<script>
export default {
  name: 'myWork',
  data () {
    return {
      myWork: [
        {
          id: '1',
          type: 1,
          name: '富士康',
          logo: '//cdn2.jianshu.io/assets/default_avatar/11-4d7c6ca89f439111aff57b23be1c73ba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
          time: '2018.10.31',
          status: 1
        }, {
          id: '2',
          type: 2,
          name: '华强北',
          logo: '//cdn2.jianshu.io/assets/default_avatar/11-4d7c6ca89f439111aff57b23be1c73ba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
          time: '2018.10.31',
          status: 2
        }
      ]
    }
  },
  created () { },
  mounted () { },
  methods: {
    pageGet(){
      let data = {}
      data.page = this.page
       $http.get($utill.api.url + '').then( res => {
        if (this.page == 1) {
          this.list = res.data.data.data
        } else {
          for (let i in res.data.data.data) {
            this.list.push(res.data.data.data[i])
          }
        }
        this.last_page = res.data.data.last_page
        this.loading = false
       }).catch(res => {
        console.log(res)
       })
    },
    loadMore() {
      if (this.list.length==0) {
        return false
      }
      this.page+=1
      if (this.page > this.last_page) {
        return false
      }
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