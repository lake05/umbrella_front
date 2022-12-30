/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path')
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(join(__dirname, './db.json'))
const middleware = jsonServer.defaults()

server.use(middleware)
server.use(router)

server.listen(3000, () => {
  console.log('Json server is running')
})
