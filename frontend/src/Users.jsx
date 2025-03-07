import m from "mithril";
import { Layout } from "./views/Layout";
import { UserService } from "./services/api";

const UsersView = {
    view: ({ attrs: { data, error } }) => (
        <Layout>
            <div class="card">
                <h1>Users</h1>

                {error ? (
                    <div class="error-message">
                        Error: {error}
                    </div>
                ) : !data ? (
                    <div class="loading">
                        Loading user data...
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.message}</td>
                                <td>
                                    <span class={`status ${data.status === 200 ? 'status-success' : 'status-error'}`}>
                                        {data.status}
                                    </span>
                                </td>
                                <td>{data.method}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
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