export function tervitusCntrl(request, response) {
    response.render('tervitus', {nimi: request.query.nimi || 'Tundmatu'})
}

export function indexCntrl(request, response) {
    response.render('index')
}