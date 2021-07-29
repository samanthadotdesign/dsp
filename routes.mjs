import { resolve } from 'path';
import db from './db/models/index.mjs';
import initDashboardController from './controllers/dashboards.mjs';
import initSkillController from './controllers/skills.mjs';
import initUserController from './controllers/users.mjs';

export default function bindRoutes(app) {
  const DashboardController = initDashboardController(db);

  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  const SkillController = initSkillController(db);
  const UserController = initUserController(db);
  // const ContributeController = initContributeCountroller();

  app.get('/data', DashboardController.index);
  app.get('/category-id/:id', DashboardController.categories);
  app.get('/resources', DashboardController.resources);
  app.put('/skill', SkillController.index);

  app.post('/signup', UserController.signup);
  app.post('/login', UserController.login);
  app.post('/logout', UserController.logout);

  // app.get('about', ContributeController.index);
  // app.get('/contribute', ContributeController.form);
}
