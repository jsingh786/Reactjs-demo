import {hashSync, genSaltSync, compareSync} from 'bcryptjs'
import genSalt from './salt'
import {browserHistory} from 'react-router'


let users
let localStorage
let salt = genSaltSync(10)

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}

let server = {
  /**
  * Populates the users, similar to seeding a database in the real world
  */
  init () {
    if (localStorage.users === undefined || !localStorage.encrypted) {
      // Set default user
      let juan = 'juan'
      let juanSalt = genSalt(juan)
      let juanPass = hashSync('password', juanSalt)

      users = {
        [juan]: hashSync(juanPass, salt)
      }

      localStorage.users = JSON.stringify(users)
      localStorage.encrypted = true
    } else {
      users = JSON.parse(localStorage.users)
    }
  },
 /**
 * Pretends to log a user in
 *
 * @param  {string} username The username of the user
 * @param  {string} password The password of the user
 */
  login (username, password) {



     let formData = {
         email: username,
         pwd: password,
     };
     
     let requestBody = JSON.stringify(formData);
     return new Promise((resolve, reject) => {
     fetch('http://ec2-54-221-197-248.compute-1.amazonaws.com/fcalclient/clientapi/clientlogin', {
         method: 'post',

         headers: {
             Accept: 'application/json',
         },
         body:requestBody,
         redirect: 'follow'
     }).then(
         function(response) {
                 response.json().then(function (res) {

                         if(res.Status == '200'){
                             $("#myModal").modal("hide");
                             resolve({
                                 authenticated: true,
                                 token: Math.random().toString(36).substring(7)
                             })
                         } else {

                             $.gritter.add({
                                 title: 'Failure!',
                                 text: res.errormessage,
                                 image: 'app/styles/images/screen.png',
                                 time: 3000,
                                 position: 'center',
                                 class_name: 'growl-danger'
                             });
                             let error
                             error = new Error('User doesn\'t exist')
                             reject(error);

                         }


                 });
         });
     });
  },
 /**
 * Pretends to register a user
 *
 * @param  {string} username The username of the user
 * @param  {string} password The password of the user
 */
  register (name,address, phone_home, phone_work , email, pwd ,website) {

     let formData = {
         name: name,
         address: address,
         phone_home: phone_home,
         phone_work: phone_work,
         email: email,
         pwd: pwd,
         website: website,
     };
     let requestBody = JSON.stringify(formData);

         return new Promise((resolve, reject) => {
         fetch('http://ec2-54-221-197-248.compute-1.amazonaws.com/fcalclient/clientapi/signupclient', {
             method: 'post',
             body:requestBody
         } ).then(function(response) {
             response.json().then(function (res) {

                 if(res.Status == '200'){
                     $.gritter.add({
                         title: 'Success!',
                         text: 'Registered successfully.',
                         image: 'app/styles/images/screen.png',
                         time: 3000,
                         position: 'center',
                         class_name: 'growl-success'
                     });
                     browserHistory.push('/')
                     resolve();
                 } else {
                     $.gritter.add({
                         title: 'Failure',
                         text: res.errormessage,
                         image: 'app/styles/images/screen.png',
                         time: 3000,
                         position: 'center',
                         class_name: 'growl-danger'
                     });
                     reject(new Error('User doesn\'t exist'));
                 }


             });
         });
     });


  },
 /**
 * Pretends to log a user out and resolves
 */
  logout () {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      resolve(true)
    })
  },
 /**
 * Checks if a username exists in the db
 * @param  {string} username The username that should be checked
 */
  doesUserExist (username) {
    return !(users[username] === undefined)
  }
}

server.init()

export default server
