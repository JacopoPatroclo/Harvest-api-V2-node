import fetch from 'node-fetch';

export default (options: { CLIENT_ID: string; CLIENT_SECRET: string }) => ({
  refreshToken: (refresh_token: string) =>
    fetch('https://id.getharvest.com/api/v2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refresh_token,
        client_id: options.CLIENT_ID,
        client_secret: options.CLIENT_SECRET,
        grant_type: 'refresh_token'
      })
    })
});
