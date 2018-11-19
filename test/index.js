const { Oauth2, initApi } = require('../index');
const { buildParamStringFromObj } = require('../dist/lib/param');
const { expect } = require('chai');

describe('Testo la libreira', () => {
  it('Dovrebbe inizializzare correttamente i metodi', () => {
    const { redirectMiddleware, acceptMiddleware } = Oauth2({
      CLIENT_ID: 'csdssdVyP3OOhp',
      CLIENT_SECRET: 'asdasdasd',
      USER_AGENT: 'Mamma'
    });
    const api = initApi({
      USER_AGENT: 'Mamma',
      ACCESS_TOKEN: 'adsfaf',
      ACCOUNT_ID: 'asds'
    });
    expect(redirectMiddleware).to.be.a.instanceOf(Function);
    expect(acceptMiddleware).to.be.a.instanceOf(Function);
    expect(api).to.has.property('users');
    expect(api).to.has.property('roles');
    expect(api).to.has.property('time_entries');
    expect(api).to.has.property('tasks');
    expect(api).to.has.property('expanses');
    expect(api).to.has.property('projects');
  });

  it('Dovrebbe generare dei parametri da un oggetto', () => {
    expect(
      buildParamStringFromObj({
        gino: 'pino',
        asso: 'masso'
      })
    ).to.be.eq('gino=pino&asso=masso');
  });

  it('Dovrebbe generare una stringa vuota da un oggetto vuoto', () => {
    expect(buildParamStringFromObj({})).to.be.eq('');
  });
});
