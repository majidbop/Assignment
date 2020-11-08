import express from 'express'
import { athletesGetRoutes } from './routers/get';
const versionOneRoutes = express.Router().use(athletesGetRoutes)
export { versionOneRoutes }
