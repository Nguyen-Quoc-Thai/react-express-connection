const express = require('express')
const cors = require('cors')

const PORT =  8080;

const app = express()

app.use(cors())

app.get('/api/products', function(req, res){

    const products = [
        { p_id: 1, p_name: 'Bánh mì chả cá', p_price: '15.000', },
        { p_id: 2, p_name: 'Bún mắm nêm', p_price: '25.000', },
        { p_id: 3, p_name: 'Gỏi cuốn', p_price: '20.000', },
        { p_id: 4, p_name: 'Súp cua', p_price: '18.000', },
    ]

    res.json(products)
})

app.listen(PORT, () => console.log(`Server is starting at PORT ${PORT}`))