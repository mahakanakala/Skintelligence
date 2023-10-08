import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  skintype: String,
  routine: String,
  max_price: Number,
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
