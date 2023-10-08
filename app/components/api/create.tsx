import connectToDatabase from '../../../mongoConnection';
import Question from '../../../questionModel';

export default async function handler(req, res) {
  const { skintype, routine, max_price } = req.body;

  try {
    const { db } = await connectToDatabase();
    const newRecommendation = new Question({
      skintype,
      routine,
      max_price,
    });
    await newRecommendation.save();

    res.status(201).json({ message: 'Recommendation created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create recommendation.' });
  }
}
