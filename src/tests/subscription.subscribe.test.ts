import 'mocha'

import chai from 'chai'
import chaiHttp from 'chai-http'
import User from '../models/user'
import app from '../app'

const expect = chai.expect

chai.use(chaiHttp)

describe('Subscription Subscribe Test', function() {
  before(() => User.create({ device_token: '12345' }))
  after(() => User.deleteMany({}))

  const tags = ['dana', 'food']
  it('success add subscription', function(done) {
    chai
      .request(app)
      .put('/subscribe')
      .send({ tags })
      .set({ device_token: '12345' })
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        const { body } = res
        expect(body).to.be.an('object')
        expect(body).to.have.property('subscription')
        const { subscription } = body
        expect(subscription).to.be.an('array')
        tags.forEach((el) => {
          expect(subscription).to.contain(el)
        })
        done()
      })
  })
})
