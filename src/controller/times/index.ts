import express from 'express'

import { versionOneRoutes } from './v1'

const timeRoutes = express.Router().use('/v1/times/', versionOneRoutes)

export { timeRoutes }
