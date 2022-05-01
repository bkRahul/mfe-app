import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

//mount function to get el ref to call render APP on startup
const mount = el => {
  const app = createApp(Dashboard);
  app.mount(el);
};

//check if we are developing app in isolation

if (process.env.NODE_ENV === 'development') {
  //get the div ref
  const root = document.querySelector('#dashboard-root');
  //call mount
  if (root) {
    mount(root);
  }
}

export { mount };
