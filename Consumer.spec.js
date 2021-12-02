import axios from 'axios'
import path from 'path'
import { Publisher, Pact, Matchers } from '@pact-foundation/pact'
const { eachLike } = Matchers 
import {getCounter} from './src/Request.js'

let value = 0

describe('Pact with Counter API', () => {
  const provider = new Pact({
    port: 4040,
    consumer: 'consumer-test',
    provider: 'provider-test',
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    cors: true,
    pactfileWriteMode: 'overwrite' // Options: overwrite, update, merge
  })

  before(() => provider.setup())
  after(() => provider.finalize())

  describe('when a call to the API is made', () => {
    before(async () => {
      return provider.addInteraction({
        state: 'this is counter',
        uponReceiving: 'a request for display counter',
        withRequest: {
          headers: { Accept: "application/json" },
          path: '/display',
          method: 'GET',
        },
        willRespondWith: {
          headers: { "Content-Type": "application/json" },
          status: 200, 
          body: eachLike({
            counter: value
          }),
        },
      })
    })
    // request 
    it('get counter is ok', async () => {
      axios.defaults.baseURL = provider.mockService.baseUrl
      await getCounter()
    })
  })

  

})