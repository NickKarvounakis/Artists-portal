/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session')
var client_id = '319410f226a84d2bac8c11e0639670e0'; // Your client id
var client_secret = '61a49826c7a941c2b02172399743d55a'; // Your secret
var redirect_uri = 'http://localhost:3001/api/callback'; // Your redirect uri
var app = express();
let callbackx
// Deployment
const {createServer} = require('http')
const compression = require('compression')
const morgan = require('morgan')
const path = require('path')

const dev = app.get('env') !== 'production'
if(!dev){
 callbackx = 'http://localhost:3001/#'
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.join(__dirname,'../../client/build')))


  app.get('*', function(req, res, next) {
    if (req.url === '/api/login' || req.url.includes('/api/callback')) return next();
    else{
      res.sendFile(path.join(__dirname,'../../client/build','index.html'))
    }
  });


}

if(dev){
 callbackx = 'http://localhost:3000/#'
  app.use(morgan('dev'))
}

const server = createServer(app)


// Deployment

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';






   app.use(cors())
   app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())





app.get('/api/login', function(req, res) {
   //authv43
  var state = generateRandomString(16);
  res.cookie(stateKey, state);
  // your application requests authorization
  var scope = 'user-read-private  user-library-read';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/api/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };





    request.post(authOptions, function(error,response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
            refresh_token = body.refresh_token;
        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        res.cookie('access_token',access_token, {
          path:'/',
          expires: new Date(Date.now() + 90000000)
        })


        // res.send(access_token)
        // we can also pass the token to the browser to make requests from there
        res.redirect(callbackx +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/error' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }

    });

  }
});

app.get('/api/refresh_token', function(req, res, next) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});




const normalizePort = port => parseInt(port,10)
const PORT = normalizePort(process.env.PORT || 3001)
server.listen(PORT, err => {
  if(err) throw err
  console.log(`Server started`)
});
