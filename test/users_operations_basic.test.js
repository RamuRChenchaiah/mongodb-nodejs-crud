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

describe('Create an user', function() {
  it('Create user should return successfully.', function(done) {
    var request =  sinon.spy();
    var response = sinon.spy();
    	response = {json: sinon.spy(), send: sinon.spy()};
    	request =  {
    				"body": userDetailsFixture
					}
    userOperations.createUserDetails(request, response).then(function(userDetails){
        expect(request.body.firstName, userDetails.firstName);
        expect(request.body.lastName, userDetails.lastName);
        expect(request.body.emailId, userDetails.emailId);
        expect(request.body.loginId, userDetails.loginId);
        global.testId = userDetails._id;
        done();
    });
  });

  it('should get details of an user.', function(done){
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};
        request =  {
                    "params":{
                            "userId": global.testId
                        }
                    }
    userOperations.getOneUserDetails(request, response).then(function(userDetails){
        expect(userDetailsFixture.firstName, userDetails.firstName);
        expect(userDetailsFixture.lastName, userDetails.lastName);
        expect(userDetailsFixture.emailId, userDetails.emailId);
        expect(userDetailsFixture.loginId, userDetails.loginId);
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
                            "userId": global.testId
                        }
                    }
    userOperations.updateUserDetails(request, response).then(function(userDetails){
        expect(request.body.firstName, userDetails.firstName);
        expect(userDetailsFixture.lastName, userDetails.lastName);
        expect(userDetailsFixture.emailId, userDetails.emailId);
        expect(userDetailsFixture.loginId, userDetails.loginId);
        global.testId = userDetails._id;
        done();
    });
  });

  it('should remove details of an user.', function(done){
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};
        request =  {
                    "params":{
                            "userId": global.testId
                        }
                    }
    userOperations.removeUserDetails(request, response).then(function(data){
        expect(data.status, 200);
        done();
    });
  });

});

