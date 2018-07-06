var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
require('../db')
var userOperations = require('./../src/resources/users_operations');
var userDetailsFixture = {
                            firstName : "userFirstName",
                            lastName : "userLastName",
                            emailId : "user@gmail.com",
                            loginId : "user@gmail.com"
                        }
/* Setup */
before('', function(){

})

/* Teardown */
after('', function(){

})

describe('User Operations :', function() {
  it('should fail to create user due to missing email Id.', function(done) {
    var request =  sinon.spy();
    var response = sinon.spy();
    	response = {json: sinon.spy(), send: sinon.spy()};
    	request =  {
    				"body": userDetailsFixture
					}
        delete request.body.emailId;
                    
    userOperations.createUserDetails(request, response).then(function(userDetails){
    }, function(error){
        expect(error.statusCode, 400);
        expect(error.error, 'Validation error');
        done();   
    });
  });

  it('should fail to get details of an user due to missing data', function(done){
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};
        request =  {
                    "params":{
                        "userId": "ab" 
                        }
                    }
    userOperations.getOneUserDetails(request, response).then(function(userDetails){
    }, function(error){
        expect(error.statusCode, 400);
        expect(error.name, 'CastError');
        done();
    });
  });

  it('should update user information successfully.', function(done) {
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};
        request =  {
                        "body": {
                            firstName : "userFirstNameUpdated"
                        },
                        "params":{
                            "userId": "ab"
                        }
                    }
    userOperations.updateUserDetails(request, response).then(function(userDetails){
    }, function(error){
        expect(error.statusCode, 404);
        expect(error.error, 'Not found');
        done();
    });
  });

  it('should remove details of an user.', function(done){
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};
        request =  {
                    "params":{
                            "userId": "ab"
                        }
                    }
    userOperations.removeUserDetails(request, response).then(function(data){

    }, function(error){
        expect(error.status, 500);
        expect(error.name, 'CastError');
        done();
    });
  });

});

