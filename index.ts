import express from 'express'

const app: express.Express = express()

// CROS対策
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ルーティング
const router: express.Router = express.Router()
// Get
router.get("/api/getTest", (req:express.Request, res:express.Response) => {
  res.send(req.query)
})
// Post
router.post("/api/postTest", (req:express.Request, res:express.Response) => {
  res.send(req.body)
})

app.use(router)
// 3000ポートでListening
app.listen(3000, () => {
  console.log("Example app linsening on port 3000")
})
