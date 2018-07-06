# Operations that you shall use for prod 
A Basic workflow with node js and MongoDB using Mongoose npm

# API list: 
- API to list all users (Method:GET)
	- http://localhost:3000/users/all
![alt text](https://github.com/RamuRChenchaiah/mongodb-nodejs-crud/blob/master/userguide/get-all-users.PNG "Get All Users")
	
- API to get an user's details  (Method:GET)
	- http://localhost:3000/users/:userId
![alt text](https://github.com/RamuRChenchaiah/mongodb-nodejs-crud/blob/master/userguide/get-specific-user-detail.PNG "Get specific user detail")


- API to create an user (Method:POST)
	- http://localhost:3000/users
	- submit user details in request body
![alt text](https://github.com/RamuRChenchaiah/mongodb-nodejs-crud/blob/master/userguide/create-user.PNG "Create an user")

- API to update an user (Method:PUT)
	- http://localhost:3000/users/:userId
![alt text](https://github.com/RamuRChenchaiah/mongodb-nodejs-crud/blob/master/userguide/Update-user.PNG "Update an user detail")

- API to an user (Method:DELETE)
	- http://localhost:3000/users/:userId
![alt text](https://github.com/RamuRChenchaiah/mongodb-nodejs-crud/blob/master/userguide/delete-user.PNG  "Delete an user")

## Pre-requisites:
```
1. Install node (version > 4.4.7)
2. Install mongo DB (Version > 2.6)
```


## How to use?
- git clone https://github.com/RamuRChenchaiah/mongodb-nodejs-crud.git
- cd mongodb-nodejs-crud
- npm install
- node bin/www   (or)  npm start
- http://localhost:3000
- Invoke above APIs as needed from RestClient or your UI

---

## Running Unit Tests:
```
npm install mocha -g
npm run test
``` 