const assert = require('assert');
const app = require('../../src/app');

describe('\'logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('create src\services\logs');

    assert.ok(service, 'Registered the service');
  });
});
