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
  it('should all users.', function(done){
    var request =  sinon.spy();
    var response = sinon.spy();
        response = {json: sinon.spy(), send: sinon.spy()};

    userOperations.getAllUserDetails(request, response).then(function(userList){
        expect(userList).to.have.length.above(0);
        done();
    });
  });
});

