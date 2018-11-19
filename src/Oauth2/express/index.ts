import fetch from 'node-fetch';

const basePathOauth2 = 'https://id.getharvest.com/oauth2/authorize';
const getTokenUri = 'https://id.getharvest.com/api/v2/oauth2/token';

export default (CLIENT_ID: string) => (CLIENT_SECRET: string) => (
  userAgent: string
) => ({
  redirectMiddleware: (req, res, next) => {
    res.redirect(`${basePathOauth2}?client_id=${CLIENT_ID}&response_type=code`);
  },
  acceptMiddleware: (req, res, next) => {
    const { code, scope } = req.query;
    fetch(getTokenUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': userAgent
      },
      body: JSON.stringify({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code'
      })
    })
      .then(re => re.json())
      .then(result => {
        req.Oauth2Harvest = { ...result, account_id: scope.split(':')[1] };
        return next();
      })
      .catch(e => next(e));
  }
});
