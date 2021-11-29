
//const assert = require('assert')
const { Publisher, Pact, Matchers } = require('@pact-foundation/pact')
const { eachLike } = Matchers 
let value = 0

/*
const options = {
  pactFilesOrDirs: "./pacts",
  pactBroker: "https://zumber.pactflow.io/",
  pactBrokerToken: "IEd_kFIFjFD1o3vOoxX3PA",
  pactBrokerUsername: "zumber",
  pactBrokerPassword: "asd123",
  consumerVersion: "1.0.0",
  publishVerificationResult: true
}
*/

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