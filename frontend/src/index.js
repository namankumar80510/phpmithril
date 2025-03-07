import m from "mithril";
import { App } from "./App.jsx";
import { About } from "./About.jsx";
import { Test } from "./Test.jsx";

const mountNode = document.querySelector("#app");

m.route(mountNode, "/", {
    "/": App,
    "/about": About,
    "/test": Test,
});
