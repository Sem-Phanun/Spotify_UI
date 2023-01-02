import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import '@/assets/Style/tailwind.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faHouse, faLayerGroup, faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add( faHouse, faMagnifyingGlass, faLayerGroup, faPlus, faHeart)

const app = createApp(App)

app.use(createPinia())
app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
