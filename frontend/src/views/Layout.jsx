import m from "mithril";

export const Layout = {
    view: ({ children }) => (
        <div class="layout">
            <nav>
                <a href="/#/">Home</a>
                <a href="/#/about">About</a>
                <a href="/#/users">Users</a>
            </nav>
            <main>
                {children}
            </main>
        </div>
    )
};
