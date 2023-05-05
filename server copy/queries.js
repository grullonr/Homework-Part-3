// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
  user: 'me',
  host: 'localhost',
  database: 'favlinks',
  password: 'password',
  port: 5432,
})

// Create a new link in the db

const createLink = (request, response) => {
  const name = request.body.name
  const URL = request.body.URL

  pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', [name, URL], (error, results) => {
    if (error){
      throw error
    }

    response.status(201).send(`Link added with ID: ${results.insertId}`)
  })
}

// Read all the data from db

const getLinks = (req, res) => {
  pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

// Update link in the db

const updateLink = (request, response) => {
  const name = request.body.name
  const URL = request.body.URL
  const changeId = request.id

  pool.query('INSERT INTO links (name, URL) VALUES ($1, $2) WHERE id = changeId', [name, URL], (error, results) => {
    if (error){
      throw error
    }

    response.status(200).json(result.rows)
  })
  
}

// Delete link in the db

const deleteLink = (req, res) => {
  const name = request.body.name
  const URL = request.body.URL
  const changeId = request.id

  pool.query('DELETE * FROM links WHERE id = changeId', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

module.exports = {
  getLinks, deleteLink, updateLink, createLink,
}
