import Joi from 'joi';       
  const myFunc = () => {
    Joi.objectId = require('joi-objectid')(Joi);
  }
export default myFunc;