import app from './app';
import router from './router'
import './css/sass/custom.scss'


require('./bootstrap');


app.use(router)
    .mount('#app')
