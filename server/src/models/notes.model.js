// notes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const notes = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: false},
  }, {
    timestamps: true
  });

  return mongooseClient.model('notes', notes);
};
