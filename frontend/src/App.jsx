import m from "mithril";
import { Layout } from "./views/Layout";
import "./App.css";

export const App = {
    view: () => (
        <Layout>
            <h1>Mithril App</h1>
            <p>Welcome to the Mithril App!</p>
        </Layout>
    )
};
