import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

// registerApplication({
//   name: "@agnos/app2",
//   app: () => System.import("http://localhost:8080/agnos-agnos-web-designer.js"),
//   activeWhen: (location) => location.pathname.startsWith('/app2'),
// });


layoutEngine.activate();
start();
