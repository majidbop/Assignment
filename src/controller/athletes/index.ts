import express from 'express'

import { versionOneRoutes } from './v1'

const athletesRoutes = express.Router().use('/v1/athletes/', versionOneRoutes)

export { athletesRoutes }
