Vue = require("vue")
Vue.config.debug = true
Router = require("/usr/local/lib/node_modules/vue-dev-server/node_modules/vue-router/dist/vue-router.common.js")
Vue.use(Router)
routes = [
  {path: "/components/BookDetail/BookDetailComponent", component: require("./components/BookDetail/BookDetailComponent.vue")},
  {path: "/components/Books/BooksComponent", component: require("./components/Books/BooksComponent.vue")},
  {path: "/components/Collection/CollectionComponent", component: require("./components/Collection/CollectionComponent.vue")},
  {path: "/components/Global/InfiniteLoading/InfiniteLoading", component: require("./components/Global/InfiniteLoading/InfiniteLoading.vue")},
  {path: "/components/Home/HomeComponent", component: require("./components/Home/HomeComponent.vue")},
  {path: "/components/Home_copy/HomeComponent", component: require("./components/Home_copy/HomeComponent.vue")},
  {path: "/components/Products/ProductsComponent", component: require("./components/Products/ProductsComponent.vue")},

]
router = new Router({routes:[
  {path: "/components/BookDetail/BookDetailComponent", component: require("./components/BookDetail/BookDetailComponent.vue")},
  {path: "/components/Books/BooksComponent", component: require("./components/Books/BooksComponent.vue")},
  {path: "/components/Collection/CollectionComponent", component: require("./components/Collection/CollectionComponent.vue")},
  {path: "/components/Global/InfiniteLoading/InfiniteLoading", component: require("./components/Global/InfiniteLoading/InfiniteLoading.vue")},
  {path: "/components/Home/HomeComponent", component: require("./components/Home/HomeComponent.vue")},
  {path: "/components/Home_copy/HomeComponent", component: require("./components/Home_copy/HomeComponent.vue")},
  {path: "/components/Products/ProductsComponent", component: require("./components/Products/ProductsComponent.vue")},

  {path:"/",component: require("/usr/local/lib/node_modules/vue-dev-server/app/main.js")}
]})
router.afterEach(function(to) {
  document.title = to.path + " - vue-dev-server"
})
app = new Vue({
  data: function() {return {availableRoutes: routes}},
  template: "<router-view></router-view>",
  router: router
  }).$mount("#app")