import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftsRouter from './routes/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve the built frontend files
app.use(express.static(path.join(__dirname, 'public')))

// Gift routes
app.use('/gifts', giftsRouter)

// Catch any route that does not exist
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})