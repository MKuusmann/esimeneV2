import express from 'express'

const tervitusCntrl = (request, response) => {
    const tervitusHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tervitus</title>
</head>
<body>
    <h1>Tere maailm</h1>
    <p>Ja kõik teised ka</p>
    <div>
        <img src="/maed.png" alt="mäed">
    </div>
</body>
</html>
    `
    response.send(tervitusHtml)
} 

const apiHelloCntrl = (req, res) => {
    console.log(req.query)
    const hello = {
        message: 'Tere maailm, aga eriti sina, ' + req.query.nimi,
        details: 'põhjapanev sõnum kõigile: we come in pease',
    }

    res.json(hello)
}

const app = express()
app.use('/', express.static('public'))

app.get('/', tervitusCntrl)
app.get('/tervitus', tervitusCntrl)
app.get('/api/hello', apiHelloCntrl)

const port = process.env.PORT || 8085

app.listen(port, () => console.log('Rakendus töötab ja kuulab pordil: ${port}'))