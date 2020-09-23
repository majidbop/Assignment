import timeRoutes = require('express')

import { versionOneRoutes } from './v1'

timeRoutes.Router().use('/v1/times/', versionOneRoutes)

export { timeRoutes }
