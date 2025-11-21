import express from 'express' 
import { tervitusCntrl, indexCntrl } from './controllers/viewControllers.js'
import { apiHelloCntrl } from './controllers/apiControllers.js'

const app = express()
app.use('/', express.static('public'))

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', indexCntrl)
app.get('/tervitus', tervitusCntrl)
app.get('/api/hello', apiHelloCntrl)

const port = process.env.PORT || 8085

app.listen(port, () => console.log('Rakendus töötab ja kuulab pordil: '+port))