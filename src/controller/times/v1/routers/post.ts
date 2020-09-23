import timesPostRoutes = require('express');
import { validateRequestProperty } from '../../../../middleware/validateRequestProperty'

import {
    timeRegister,
} from '../../../../parametersSchemas'

import { registerTime } from '../create';

timesPostRoutes.Router().post('/', validateRequestProperty(-103, timeRegister, 'body'), registerTime)


export { timesPostRoutes } 
