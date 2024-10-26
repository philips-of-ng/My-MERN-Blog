import express from 'express'

const app = express()

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST, () => {
  console.log(`Your server is running on Port ${PORT}, Host ${HOST}.`);
})