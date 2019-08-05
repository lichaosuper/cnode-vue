import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// 不启用懒加载
// import About from "./views/About.vue";
// import User from "./views/User.vue";
// import ThemeDetail from "./views/ThemeDetail.vue";
// import Book from "./views/Book.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/index/:id",
      name: "home",
      component: Home
    },
    // 不启用懒加载
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About
    // },
    // {
    //   path: "/user/:id",
    //   name: "user",
    //   component: User
    // },
    // {
    //   path: "/themedetail/:id",
    //   name: "themedetail",
    //   component: ThemeDetail
    // },
    // {
    //   path: "/book",
    //   name: "book",
    //   component: Book
    // },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import(/* webpackChunkName: "user" */ "./views/User.vue")
    },
    {
      path: "/themedetail/:id",
      name: "themedetail",
      component: () =>
        import(/* webpackChunkName: "themedetail" */ "./views/ThemeDetail.vue")
    },
    {
      path: "/book",
      name: "book",
      component: () => import(/* webpackChunkName: "book" */ "./views/Book.vue")
    },
    {
      // 会匹配所有路径
      path: "*",
      name: "all",
      component: Home
    }
  ]
});
