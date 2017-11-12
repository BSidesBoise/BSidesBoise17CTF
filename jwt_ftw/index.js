var Hapi = require('hapi'),
    jwt = require('jsonwebtoken'),
    server = new Hapi.Server();

server.connection({ port: 8080 });


var accounts = {
    123: {
        id: 123,
        user: 'john',
        fullName: 'John Doe',
        scope: ['a', 'b']
    }
};


var privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

// Use this token to build your request with the 'Authorization' header.  
// Ex:
//     Authorization: Bearer <token>
var token = jwt.sign({ flag: 'bsb17_2852ff87555b2572e33c8b67db0d8806' }, privateKey, { algorithm: 'HS256'} );
var cookie_options = {
        ttl: null,
        encoding: 'none',    // we already used JWT to encode
        isSecure: false,      // warm & fuzzy feelings
        isHttpOnly: false,    // prevent client alteration
        clearInvalid: false, // remove invalid cookies
        strictHeader: true,   // don't allow violations of RFC 6265
        
    }


var validate = function (decodedToken, request, callback) {
    return callback(null, true);
};


server.register([require('inert'), require('hapi-auth-jwt2')], function (error) {

    server.auth.strategy('jwt', 'jwt', {
        key: privateKey,
        validateFunc: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
    });

    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: false
        },
        handler: function(request, reply) {
          var replyObj = {text: 'the game is afoot'};
          reply.file('home.html').unstate('token');
        }
    });

    server.route({
        method: 'GET',
        path: '/secret/token',
        config: {
            auth: 'jwt'
        },
        handler: function(request, reply) {
            reply.file('secret_token.html');
        }
    });

    // With scope requirements
    server.route({
        method: 'GET',
        path: '/robots.txt',
        config: {
            auth: false
        },
        handler: function(request, reply) {
          reply.file('robots.txt').state("token", token, cookie_options);
        }
    });

    server.route({
        method: 'GET',
        path: '/UserAgents.fuzz.txt',
        config: {
            auth: false
        },
        handler: function(request, reply) {
          reply.file('UserAgents.fuzz.txt');
        }
    });
});


server.start();