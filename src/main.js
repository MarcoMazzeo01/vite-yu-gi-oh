import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";

library.add(faSpinner);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
