import { createApp } from 'vue';
import * as VueRouter from 'vue-router'

import App from "./App.vue"
import OnePageOfAlbumsListComponent from "./components/OnePageOfAlbumsListComponent.vue";
import AlbumComponent from "./components/AlbumComponent.vue";
// eslint-disable-next-line no-unused-vars
import PhotoComponent from "./components/PhotoComponent.vue";
import ApiService from "./services/ApiService.js"

var routes = [
  {
  path: '/', component: OnePageOfAlbumsListComponent, name: "Alc",
},
{
  path: '/album:albumNum', component: AlbumComponent, props: true,
/*   children: [
    {
      path: 'photo:photoNum',
      component: PhotoComponent, props: true,
    },
  ] */
},
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: __dirname,
  routes,
});


const app = createApp(App)
app.config.globalProperties.$apiService = new ApiService();
app.use(router).mount('#app')