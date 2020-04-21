const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true})

function sendErrosOrNext(req, res, next){
  const bundle = res.locals.bundle;

  if (bundle.errors){
    var errors=parseErrors(blundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
     const errors = []
      _.forIn(nodeRestfulErrors, error => errors.push(error.message))
       return errors
}


BillingCycle.route('count', function (req, res, next) {
    BillingCycle.count(function (error, value) {
       if (error) {
          res.status(500).json({errors: [error]})
       }else {
          res.json({value})  
       }  
     })
})

module.exports = BillingCycle
