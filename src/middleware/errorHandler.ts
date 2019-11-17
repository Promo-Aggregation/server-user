const errorHandler = (err: any, req: any, res: any, next: Function) => {
  let status
  let message

  switch (err.name) {
    case 'MongoError':
      if (err.code === 11000) {
        status = 400
        message = `device_token must be unique`
      } else {
        status = 500
        message = 'Something happened in the database'
      }
      break
    default:
      status = err.status || 500
      message = err.message || 'Internal Server Error'
      break
  }

  res.status(status).send({ message })
}

export default errorHandler
