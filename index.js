const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/:route', async (req, res) => {
    console.log(req)
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${req.params.route}`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter dados da API externa' })
    }
})

app.listen(port, () => {
  console.log(`porta: ${port}`)
})
