
//const assert = require('assert')
const { Pact, Matchers } = require('@pact-foundation/pact')
const { eachLike } = Matchers 
let value = 0

describe('Pact with Counter API', () => {
  const provider = new Pact({
    port: 8080,
    consumer: 'consumer-test',
    provider: 'provider-test',
  })

  before(() => provider.setup())
  after(() => provider.finalize())

  describe('when a call to the API is made', () => {
    before(async () => {
      return provider.addInteraction({
        state: 'this is counter',
        uponReceiving: 'a request for display counter',
        withRequest: {
          path: '/display',
          method: 'GET',
        },
        willRespondWith: {
          body: eachLike({
            counter: value
          }),
          status: 200,
        },
      })
    })
  })
  /*
  it('get counter is ok', async () => {
    const result = await getCounter()
    assert.ok(result.length)
  })
  */

})