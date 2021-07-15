import { createApp } from 'vue';
import * as VueRouter from 'vue-router'

import App from "./App.vue"
import OnePageOfAlbumsListComponent from "./components/OnePageOfAlbumsListComponent.vue";
import AlbumComponent from "./components/AlbumComponent.vue";
import PhotoComponent from "./components/PhotoComponent.vue";
import ApiService from "./services/ApiService.js"

var routes = [
  {
    path: '/', component: OnePageOfAlbumsListComponent, 
  },
  {
    path: '/album/:albumNum', name: 'Album', component: AlbumComponent, props: true,
  },
  {
    path: '/album/:albumNum/photo/:photoNum', name:'Photo', component: PhotoComponent, props: true,
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