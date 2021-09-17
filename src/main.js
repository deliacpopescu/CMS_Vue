import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTimes)

createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
