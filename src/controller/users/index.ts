import userRoutes = require('express')

import { versionOneRoutes } from './v1'

userRoutes.Router().use('/v1/users/', versionOneRoutes)

export { userRoutes }
