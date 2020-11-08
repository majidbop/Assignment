import express from 'express';
import { userPostRoutes } from './routers/post';
const versionOneRoutes = express.Router().use(userPostRoutes)
export { versionOneRoutes }
