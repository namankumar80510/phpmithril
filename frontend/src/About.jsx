import m from "mithril";
import { Layout } from "./views/Layout";
import "./App.css";

export const About = {
    view: () => (
        <Layout>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Layout>
    )
};

