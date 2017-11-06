//dependencies
import express from "express"
import webpack from "webpack"
import path from "path"
import webpackDevMiddleware from "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import open from "open"
import exphbs from "express-handlebars"
//webpack Configuration
import webpackConfig from "../../webpack.config.babel"

//config
import config from '../config'

//API
import libraryApi from './api/library'

// Helpers
import * as hbsHelper from "../lib/handlebars"

// Utils
import { isMobile } from "../lib/utils/device"

// Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production'

// Express app
const app = express()

//publicPath

app.use(express.static(path.join(__dirname, '../public')))

// Handlebars setup
app.engine(config.views.engine, exphbs({
  extname: config.views.extension,
  helpers: hbsHelper
}))

app.set('views', path.join(__dirname, config.views.path))
app.set('view engine', '.hbs')
// webpack compiler
const webpackCompiler = webpack(webpackConfig)

// webpack middleware
if(isDevelopment){
  app.use(webpackDevMiddleware(webpackCompiler))
  app.use(webpackHotMiddleware(webpackCompiler))
}

app.use((req, res, next)=>{
  res.locals.isMobile = isMobile(req.headers['user-agent'])
  return next()
})

app.use('/api/library', libraryApi)

// sending all traffic to react-dom
app.get('*', (req, res)=>{
  res.render("frontend/index", {
    layout: false
  })
})


//listen port
app.listen(config.serverPort, err=>{
  if(!err){
    open(`${config.baseUrl}:${config.serverPort}`)
  }
})
