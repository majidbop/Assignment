import express from 'express'
import { searchAthletes } from '../read';

const athletesGetRoutes = express.Router().get('/', searchAthletes)


export { athletesGetRoutes }
