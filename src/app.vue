<template>
  <div class="app-container">
    <!-- header头部区域 -->
    <mt-header fixed title="Vue.商城"></mt-header>
    <!-- 中间路由区域 -->
    <transition>
       <router-view></router-view>
    </transition>
   
    <!-- 底部区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/vip">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
.v-enter-active,
.v-leate-active{
  transition: all 0.5s ease;
}
</style>