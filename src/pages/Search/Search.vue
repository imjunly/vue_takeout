<template>
  <section class="search">
    <HeaderTop title="搜索"/>
    <header class="header">
      <a class="header_title">
      <span class="header_title_text ellipsis">搜索</span>
      </a>
    </header>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
<!--        tag='li' 意味着当前路由便签由默认的a标签变为li标签-->
<!--        query: -->
<!--        to里面的内容等同于 "{path:'/shop?id=' + item.id}"-->
        <!--        <router-link :to="{path:'/shop?id=' + item.id}" tag="li"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>

    </section>
    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {mapState} from 'vuex'
  export default {
    name: "Search",
    components: {HeaderTop},
    data() {
      return {
        keyword: '',
        imgBaseUrl: 'http://cangdu.org:8001/img/',
        noSearchShops: false
      }
    },
    computed: {
      ...mapState(['searchShops'])
    },
    watch: {
      searchShops(value) {
        //如果没有结果，则设置为没有结果，此时"抱歉，没有搜索结果"的div将显示
        if(!value.length) {
          this.noSearchShops = true

        } else {
          //如果有结果，则设置为有结果，此时"抱歉，没有搜索结果"的div将不会显示
          this.noSearchShops = false;
        }
      }
    },
    methods: {
      search() {
        //得到搜索关键字
        const keyword = this.keyword.trim();
        if(keyword) {
          this.$store.dispatch('searchShops', keyword)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774

    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>
