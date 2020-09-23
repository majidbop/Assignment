import versionOneRoutes = require('express');
import { timesPostRoutes } from './routers/post';
versionOneRoutes.Router().use(timesPostRoutes)
export { versionOneRoutes }
