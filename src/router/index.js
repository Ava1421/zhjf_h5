/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import TabIndex from "@/views/Home/TabIndex.vue"; // 父级组件

Vue.use(VueRouter);
// 解决编程式路由往同一地址跳转时会报错的情况
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
// replace
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalReplace.call(this, location, onResolve, onReject);
  return originalReplace.call(this, location).catch((err) => err);
};

/* eslint-disable */
const tabbar = [
  {
    path: "/tab/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/Index.vue")
        .then((module) => module.default || {})
        .catch(() => ({ default: {} })),

    meta: {
      title: "风险管理",
    },
  },
  {
    path: "/tab/page2",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/page2Index.vue")
        .then((module) => module.default || {})
        .catch(() => ({ default: {} })),

    meta: {
      title: "page2",
    },
  },
  {
    path: "/tab/page3",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/page3Index.vue")
        .then((module) => module.default || {})
        .catch(() => ({ default: {} })),

    meta: {
      title: "page3",
    },
  },
  {
    path: "/tab/page4",
    name: "page4",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/Home/page4Index.vue")
        .then((module) => module.default || {})
        .catch(() => ({ default: {} })),

    meta: {
      title: "page4",
    },
  },
];
const router = new VueRouter({
  mode: "hash", // 或 "history" 模式
  routes: [
    {
      path: "/",
      name: "index",
      redirect: "tab/home",
    },
    {
      path: "/tab",
      name: "Tab",
      component: TabIndex,
      children: tabbar, // 嵌套子路由
      meta: { title: "Tab 页面" },
    },
    {
      path: "/home/detail",
      name: "detail",
      component: () =>
        import(
          /* webpackChunkName: "home" */ "@/views/Home/components/Detail.vue"
        )
          .then((module) => module.default || {})
          .catch(() => ({
            default: {},
          })),
      meta: {
        title: "预警信息查询",
      },
    },
  ],
});

// 全局导航守卫，动态设置页面标题
router.beforeEach((to, from, next) => {
  // 先调用 next()，确保路由跳转不被阻塞
  next();

  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }

  // 处理 keep-alive（改为同步操作）
  handleKeepAlive(to);
});

/**
 * 处理 keep-alive 逻辑
 */
// 修改 handleKeepAlive 函数，避免不必要的异步等待
function handleKeepAlive(to) {
  if (!to.matched || to.matched.length < 2) return;

  for (let i = 0; i < to.matched.length; i++) {
    const element = to.matched[i];
    const component = element.components.default;

    if (!component) continue;

    const name = component.__name || component.name;
  }
}

export default router;
