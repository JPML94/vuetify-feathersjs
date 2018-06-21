// Initializes the `Contacts` service on path `/Contacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/contacts.model');
const hooks = require('./contacts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contacts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('contacts');

  service.hooks(hooks);
};
