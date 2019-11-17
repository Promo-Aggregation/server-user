import { connect } from 'mongoose'

const n = process.env.NODE_ENV

const environment = n || ''
const database = process.env.DATABASE || 'Promo-Aggregator'
const uri =
  n === 'development' || n === 'test'
    ? `mongodb://localhost:27017/${database}-${environment}`
    : 'mongodb+srv://admin:admin@tigorhutasuhut-vdnzf.mongodb.net/Promo-Aggregator?retryWrites=true&w=majority'
;(async () => {
  try {
    await connect(uri, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Connected to mongodb', uri)
  } catch (e) {
    console.log(e)
  }
})()
