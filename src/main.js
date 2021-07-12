import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import App from "./App.vue"
/* import OnePageOfAlbumsListComponent from "./components/OnePageOfAlbumsListComponent.vue";
 */
import AlbumComponent from "./components/AlbumComponent.vue";
import PhotoComponent from "./components/PhotoComponent.vue";
 // eslint-disable-next-line no-unused-vars
import ApiService from "./services/ApiService.js" 

//ApiService.getAlbums();


const routes = [
/*   {path: '/', component: OnePageOfAlbumsListComponent},
 */  {
    path: '/album/:albumNum', component: AlbumComponent, props:true, 
    children: [
      {
        path: 'photo/:photoNum',
        component: PhotoComponent, props:true,
      },
    ]
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  base: __dirname,
  routes,
});

Vue.createApp(App).use(router).mount('#app')