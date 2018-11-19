import initClient from './lib/client';
import initUsers from './actions/user/index';
import initRoles from './actions/roles/index';
import initTimeEntries from './actions/time_entries/index';
import initTasks from './actions/tasks/index';
import initExpanses from './actions/expenses/index';
import initProjects from './actions/projects/index';
import initOauth2 from './Oauth2/index';
export default {
    Oauth2: initOauth2,
    initApi: function (options) {
        var client = initClient(options);
        return {
            users: initUsers(client),
            roles: initRoles(client),
            time_entries: initTimeEntries(client),
            tasks: initTasks(client),
            expanses: initExpanses(client),
            projects: initProjects(client)
        };
    }
};
//# sourceMappingURL=index.js.map