import { resolve } from 'path';
import db from './db/models/index.mjs';
import initDashboardController from './controllers/dashboards.mjs';
import initSkillController from './controllers/skills.mjs';
// import initUserController from './controllers/users.mjs';

export default function bindRoutes(app) {
  const DashboardController = initDashboardController(db);

  app.get('/home', (request, response) => {
    // If user is logged in, send to dashboard
    const { userId } = request.cookies;

    if (userId) {
      response.sendFile(resolve('dist', 'main.html'));
    }

    else {
    // If user is not logged in, send to homepage
      response.sendFile(resolve('dist', 'homepage.html'));
    }
  });

  const SkillController = initSkillController(db);
  // const UserController = initUserController(db);
  // const ContributeController = initContributeCountroller();

  app.get('/data', DashboardController.index);
  app.get('/category-id/:id', DashboardController.categories);
  app.get('/resources', DashboardController.resources);
  app.put('/skill', SkillController.index);
  // app.put('/complete-skill/:id', SkillController.index);
  // app.put('/uncomplete-skill/:id', SkillController.remove);

  // app.post('/signup', UserController.signup);
  // app.post('/login', UserController.login);
  // app.get('/logout', UserController.logout);

  // app.get('about', ContributeController.index);
  // app.get('/contribute', ContributeController.form);
}
