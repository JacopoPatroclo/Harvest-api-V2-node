# Harvest-api-V2-node

A client for NodeJs that helps interact with the Harvest V2 Api

## How to setup

Just run

`npm install harvest_api_v2 --save`

Now you can import two methods, `Oauth2` and `initApi`: the first is used to create the two express middleware that implement the Oauth2 authentication. According to the [Harvest API](https://id.getharvest.com/developers) documentation you must gather from the Harvest developer console.

```javascript
var api;

// Require the library
const { Oauth2, initApi } = require("harvest_api_v2");

// The express app
const app = express();

// Inizialize the Oauth2 parts to create the two middleware
const { redirectMiddleware, acceptMiddleware } = Oauth2({
  CLIENT_ID: "Your clinet id",
  CLIENT_SECRET: "Your client secret",
  USER_AGENT: "Some use agent"
});

// Use the middleware to redirect the user to the Harvest Oauth2 authentication flow
app.get("/login", redirectMiddleware);

// Set your callback uri from the Harvest developer panel and collect the tokens used for the authentication
app.get("/your_callback_uri", redirectMiddleware, (req, res, next) => {
  // this is the Oauth2Harvest object attached to the req object
  const { access_token, account_id, refresh_token } = req.Oauth2Harvest;

  // inizialize the api object that will automaticly authenticate your calls
  api = initApi({
    ACCESS_TOKEN: access_token,
    ACCOUNT_ID: account_id,
    USER_AGENT: "User agent"
  });

  // or send the access_token and the refresh_token to the client
  res.json(req.Oauth2Harvest);
});

// Use the global api object in order to query the api
app.get("/me", async (req, res, next) => {
  const userInfo = await api.users.me();
  res.json(userInfo);
});

// Create a middleware that uses the client data to authenticate the request
app.get("secure/me", (req, res, next) => {
  const { access_token, account_id } = req.body;
  req.api = initApi({
    ACCESS_TOKEN: access_token,
    ACCOUNT_ID: account_id,
    USER_AGENT: "Some use agent"
  });
});
```

The example above describes the authentication of multiple users via the Harvest Oauth2 Api. If you want a specific account you can create ,via developer console, the ACCESS_TOKEN and the ACCOUNT_ID needed for authenticating the requests. In this case:

```javascript
const ACCESS_TOKEN = "Your access token";
const ACCOUNT_ID = "Your account id";

// require the library
const { initApi } = require("harvest_api_v2");

// inizialize the api
const api = initApi({
  ACCESS_TOKEN,
  ACCOUNT_ID,
  USER_AGENT: "Some use agent"
});

(async () => {
  // Now you can use the api
  const userInfo = await api.users.me();
  console.log(userInfo);
})();
```

## API

Coming soon....

## Wanna help

Write :)

## About me

[Jacopo Patroclo Martinelli](https://jacopopatroclo.github.io/)
