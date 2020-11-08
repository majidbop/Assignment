import express from 'express'

import { versionOneRoutes } from './v1'

const userRoutes = express.Router().use('/v1/users/', versionOneRoutes)

export { userRoutes }
