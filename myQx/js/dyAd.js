// dyAd

let body = $response.body
let obj = JSON.parse(body)

obj['error'] = 1000
obj['data'] = []
obj['msg'] = 'fkdy'
body = JSON.stringify(obj)
$done(body)
