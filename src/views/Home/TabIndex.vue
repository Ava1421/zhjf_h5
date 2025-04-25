<template>
  <div class="tabbar-wrp">
    <div class="tabbar-content"><router-view></router-view></div>

    <van-tabbar v-model="active" active-color="#0086CE">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :to="item.path"
        :name="item.path"
        :key="index"
        :disabled="true"
        ><div class="flex-column flex-center">
          <img
            :src="require(`../../assets/image/tab/${item.icon}.png`)"
            class="tab-icon"
          />
          <span class="tab-title">{{ item.title }}</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
/* eslint-disable */
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "TabIndex",
  components: { [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem },
  // watch: {
  //   $route: {
  //     handler(route) {
  //       this.active = route.path;
  //     },
  //     immediate: true
  //   }
  // },
  data() {
    return {
      active: "/tab/home",
      tabbars: [
        { title: "首页", icon: "home", path: "/tab/home" },
        { title: "客户预警", icon: "page2", path: "/tab/page2" },
        { title: "预警地图", icon: "page3", path: "/tab/page3" },
        { title: "过程管理", icon: "page4", path: "/tab/page4" },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.tabbar-wrp {
  height: calc(100vh - env(safe-area-inset-bottom) - env(safe-area-inset-top));
}
.tabbar-content {
  height: calc(
    100vh - 50px - env(safe-area-inset-bottom) - env(safe-area-inset-top)
  );
  overflow-y: auto; /* 改为 auto 避免内容截断 */
  position: relative; /* 移除 fixed 定位 */
  padding-bottom: 50px; /* 为 Tabbar 预留空间 */
}
.tab-icon {
  width: 19px;
  margin-bottom: 6px;
}
.tab-title {
  font-size: 10px;
}
/deep/.van-tabbar-item[disabled] {
  pointer-events: none; /* 禁止鼠标事件 */
}
</style>
