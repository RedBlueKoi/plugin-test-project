import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import makeServer from "./server"

// if (process.env.NODE_ENV === "development") {
makeServer()
// }

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
