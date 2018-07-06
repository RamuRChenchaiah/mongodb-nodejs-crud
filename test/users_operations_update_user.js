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


});

