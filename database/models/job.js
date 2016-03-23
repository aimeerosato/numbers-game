'use strict';

const thinky = require('../thinkylocal');
const type = thinky.type;

let Job = thinky.createModel('Job', {
  id: type.string(),
  title: type.string(),
  company: type.string(),
  location: type.string(),
  type: type.string(),
  description: type.string(),
  url: type.string(),
  contact: {
    email: type.string(),
    phone: type.number(),
  },
  idUser: type.string(),
});

module.exports = Job;

// user require required here to avoid circular reference
const User = require('./user');
Job.belongsTo(User, 'user', 'idUser', 'id');
