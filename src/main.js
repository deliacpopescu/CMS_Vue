import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue';
import Header from './components/Header.vue';
import Buttons from './components/Buttons.vue';
import EmpoyeeTable from './components/Table.vue';

library.add(faEdit, faTimes);

const app = createApp(App);
app.use(VueAxios, axios)

app.component('font-awesome-icon',FontAwesomeIcon);
app.component('cms-header', Header);
app.component('cms-buttons', Buttons);
app.component('cms-table', EmpoyeeTable);

app.mount('#app');
