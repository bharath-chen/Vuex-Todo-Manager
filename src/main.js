import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import "font-awesome/css/font-awesome.min.css";

const app = createApp(App);

app.use(store);

app.mount("#app");
