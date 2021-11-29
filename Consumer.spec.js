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
    // request 
    it('get counter is ok', async () => {
      axios.defaults.baseURL = provider.mockService.baseUrl
      await getCounter()
    })
  })

  

})