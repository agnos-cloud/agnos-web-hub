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
//   app: () => System.import("http://localhost:9001/agnos-agnos-web-designer.js"),
//   activeWhen: (location) => location.pathname.startsWith('/app2'),
//   customProps: { some: "value" },
// });
window.addEventListener("nodeclick", () => {
  console.log(">>>>>>>>got event")
  // TODO: whenever a component is clicked, register its application if not already registered
});


layoutEngine.activate();
start();
