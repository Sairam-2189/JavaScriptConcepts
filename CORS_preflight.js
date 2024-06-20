// * CORS

// * CORS is a mechanism which uses additional http headers to tell the
// * browser whether a specific web app can share resource with
// * another web app.

// * But, both the web-apps should have different origin.

// * Domain name - https://firstdomain.in cannot access the data in seconddomain.in
// * cannot access data from subdomain api.firstdomain.in
// * cannot access data from different ports firstdomain.in:8080
// * cannot access data from different protocol http://firstdomain.in

// * [origin 1(A)(http://firstdomain.in)] ---> [origin 2(B)(http://seconddomain.in)]
// * When A is requesting resource from B or making any API call, a CORS preflight mechanism is called.
// * a preflight options call is made before the actual call is made.
// * In preflight call, B will verify the API call made by A.
// * If it is valid, then B will set some additional http headers which will browser let know.
// * Then the actual API call is made.

// * Additional http headers :-
// * Accept-control-allow-origin is set by the server. It can have different values.
// * [Accept-control-allow-origin] : *
// * "*" indicates that any domain can access data from it.

// * if B's http header [Accept-control-allow-origin] sets to "http://firstdomain.in"
// * "http://firstdomain.in" is allowed to make API calls

// * Access-control-allow-methods : There might be some methods(Get,Post...) restricted.
