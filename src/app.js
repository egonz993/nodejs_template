import express from 'express'
import url from 'url'
import path from 'path'
import { Route as route } from './routes/index.routes.js'


const app = express();

app.listen(3000, () => {
    console.log("servidor escuchando")
})

// STATIC FILES

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static(path.join(__dirname, '../public')))

// ROUTES
app.use(route)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/404.html'))
})
