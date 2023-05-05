const express = require('express')

const app = express()

const path = require('path')

const db = require('./queries')

const PORT = 9001

// Middleware

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// Routes
app.get('/', (req, res) => {
  // we'll do some stuff here
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

//CRUD
app.get('/', db)
// CREATE - add data to db
app.post('/new', db.createLink)

// READ - get data from db
app.get('/links', db.getLinks)
// UPDATE - update data in db

app.put('/updateLink', db.updateLink)
// DELETE - remove data from db

app.delete('/deleteLink', db.deleteLink)

// Starting Express on our PORT
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`)
})
