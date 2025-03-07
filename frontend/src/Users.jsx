import m from "mithril";
import { Layout } from "./views/Layout";
import { UserService } from "./services/api";

const UsersView = {
    view: ({ attrs: { data, error } }) => (
        <Layout>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Method</th>
                    </tr>
                </thead>
                <tbody>
                    {error ? (
                        <tr>
                            <td colspan="2">Error: {error}</td>
                        </tr>
                    ) : !data ? (
                        <tr>
                            <td>Loading bitch...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                    ) : (
                        <tr>
                            <td>{data.message}</td>
                            <td>{data.status}</td>
                            <td>{data.method}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Layout>
    )
};

export const Users = {
    data: null,
    error: null,

    oninit: async () => {
        const result = await UserService.getUsers();
        Users.error = result.error;
        Users.data = result.error ? null : result;
        m.redraw();
    },

    view: () => (
        <UsersView data={Users.data} error={Users.error} />
    )
};