import Koa from 'koa'
import json from 'koa-json'
import {koaBody} from 'koa-body'
import cors from '@koa/cors'

import loadFixtures from './fixtures'
import apiRounter from './api'
import appConfig from './config'

const app = new Koa()
app.use(json)
app.use(apiRounter.routes())
app.use(koaBody)

app.use(apiRounter.routes)

app.listen(8000)




