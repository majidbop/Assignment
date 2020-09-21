import versionOneRoutes = require('express');
import { userPostRoutes } from './routers/post';
versionOneRoutes.Router().use(userPostRoutes)
export { versionOneRoutes }
