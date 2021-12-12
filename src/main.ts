import {createApp} from "vue";
import App from "./App.vue";

/*antd*/
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

/*router*/
import router from "./router";

/*store*/
import {store, key} from "./store";
import './store/subscriber'

const app = createApp(App)
    .use(Antd)
    .use(router)
    .use(store, key);

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    app.mount('#app')
});
