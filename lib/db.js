const Datastore = require('nedb-promises');

const files = require('./files');

module.exports = {
  save: async (config) => {
    const datastore = Datastore.create(files.deploymentsDBPath());

    return datastore.insert(config);
  },

  find: async (config) => {
    const datastore = Datastore.create(files.deploymentsDBPath());

    return datastore.findOne({ name: config.name });
  },

  list: async () => {
    const datastore = Datastore.create(files.deploymentsDBPath());

    return datastore.find({}).sort({ name: 1 });
  },

  remove: async (config) => {
    const datastore = Datastore.create(files.deploymentsDBPath());

    return datastore.remove({ name: config.name });
  }
}