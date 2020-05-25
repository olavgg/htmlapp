# Implement the following API

## Rest API Documentation

List all persons
```
curl -XGET https://cvapi.ree.io/list
```

Get a single person
```
curl -XGET https://cvapi.ree.io/get/{id}
```

Update person
```
curl \
    -H "Accept:application/json" \
    -H "Content-Type: application/json" \
    -XPOST https://cvapi.ree.io/update \
    -d '{"id":1,"name":"Olav","title":"SQL developer","age":40,"departments":["Engineering"]}'
```

Delete person
```
curl -XPOST https://cvapi.ree.io/delete -d 'id=1'
```