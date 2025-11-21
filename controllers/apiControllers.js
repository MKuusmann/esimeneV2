export function apiHelloCntrl(request, response){
    if (!request.query.nimi){
        response.json({
            error: 'Parameetrit nimi ei ole antud'
        })
        return
    }
    
    console.log(request.query)
    const hello = {
        message: 'Tere maailm, aga eriti sina, ' + request.query.nimi,
        details: 'põhjapanev sõnum kõigile: we come in pease',
    }

    response.json(hello)
}