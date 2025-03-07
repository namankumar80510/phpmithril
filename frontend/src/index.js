import m from "mithril";
import { App } from "./App.jsx";
import { About } from "./About.jsx";
import { Users } from "./Users.jsx";

const mountNode = document.querySelector("#app");
// m.mount(mountNode, App);
//m.route.prefix = ""; // remove the hash from the URL
m.route(mountNode, "/", {
    "/": App,
    "/about": About,
    "/users": Users,
});