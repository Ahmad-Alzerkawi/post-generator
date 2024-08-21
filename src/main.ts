import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "./style.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

// Import the FontAwesome library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import all solid icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { initVeeValidate } from "./plugins/vee-validate";
import { getToken } from "./services/jwt-serviece";
// Optionally, you can also import regular and brand icons
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all icons to the library
library.add(fas); // Add all solid icons
// library.add(far); // Add all regular icons
// library.add(fab); // Add all brand icons

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
axios.defaults.headers.common["Accept"] = "application/json";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.component("font-awesome-icon", FontAwesomeIcon);

initVeeValidate();
app.mount("#app");
