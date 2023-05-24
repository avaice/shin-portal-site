import express from 'express'
const app = express()
const port = 3001

app.get('/', (_req, res) => {
    res.send('シン・ポータルサイトのAPIサーバー Top')
})

app.listen(port, () => {
    console.log(`シン・ポータルサイト APIサーバー 起動 PORT: ${port}`)
})