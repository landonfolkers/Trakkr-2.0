import Vue from 'nativescript-vue';
import Buttons from './components/Buttons';
import './styles.scss';


// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  render: h => h(Buttons),

}).$start();
