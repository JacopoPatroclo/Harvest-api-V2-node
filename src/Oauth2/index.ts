import initExpressMiddleware from './express/index';
import { OptionsMiddleware, Oauth2Data } from '../lib/interfaces';
import initUtils from './utils/token';

export default ({
  CLIENT_ID,
  CLIENT_SECRET,
  USER_AGENT
}: OptionsMiddleware): Oauth2Data => ({
  ...initExpressMiddleware(CLIENT_ID)(CLIENT_SECRET)(USER_AGENT),
  utils: initUtils({
    CLIENT_ID,
    CLIENT_SECRET
  })
});
