import 'mocha'

import chai from 'chai'
import chaiHttp from 'chai-http'
import User, { IUserModel } from '../models/user'
import app from '../app'

const expect = chai.expect

chai.use(chaiHttp)

describe('Subscription Unsubscribe Test', function() {
  const tags = ['dana', 'food']
  before((done) => {
    User.create({ device_token: '12345' })
      .then((user: IUserModel) => {
        user.subscription = tags
        return user.save()
      })
      .then(() => done())
  })
  after(() => User.deleteMany({}))

  it('success unsubscribe', function(done) {
    chai
      .request(app)
      .put('/unsubscribe')
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
          expect(subscription).to.not.contain(el)
        })
        done()
      })
  })
})
