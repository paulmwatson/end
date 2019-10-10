@app
rain-xog

@static
folder build

@http
get /api
get /babayaga/:hex

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
