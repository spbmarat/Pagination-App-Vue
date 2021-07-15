import { createApp } from 'vue';
import * as VueRouter from 'vue-router'

import App from "./App.vue"
import AlbumsListComponent from "./components/AlbumsListComponent.vue";
import AlbumComponent from "./components/AlbumComponent.vue";
import PhotoComponent from "./components/PhotoComponent.vue";
import ApiService from "./services/ApiService.js"
import { BASE_URL } from './constants';

var routes = [
  {
    path: '/', name: 'OnePageWithAlbums', component: AlbumsListComponent,
  },
  {
    path: '/album/:albumNum', name: 'Album', component: AlbumComponent, props: true,
  },
  {
    path: '/album/:albumNum/photo/:photoNum', name: 'Photo', component: PhotoComponent, props: true,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: __dirname,
  routes,
});


const app = createApp(App)
app.config.globalProperties.$apiService = new ApiService(BASE_URL);
app.use(router).mount('#app')