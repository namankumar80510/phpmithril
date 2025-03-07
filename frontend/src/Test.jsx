import m from "mithril";
import { Layout } from "./views/Layout";
import { TestService } from "./services/api";

const TestViews = {
    view: ({ attrs: { data, error } }) => (
        <Layout>
            <div class="card">
                <h1>Test</h1>

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
                                <td>{data.data.method}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </Layout>
    )
};

export const Test = {
    data: null,
    error: null,

    oninit: async () => {
        const result = await TestService.getTest();
        Test.error = result.error;
        Test.data = result.error ? null : result;
        m.redraw();
    },

    view: () => (
        <TestViews data={Test.data} error={Test.error} />
    )
};