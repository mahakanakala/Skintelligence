// SkincareRecommendation.tsx
import React, { useState } from 'react';
import axios from 'axios';

const SkincareRecommendation: React.FC = () => {
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);

  const handleRecommendation = async () => {
    try {
      const userData = {
        skintype: 'oily',
        routine: 'AM',
        max_price: 50,
      };

      const response = await axios.post('/api/recommendation', userData);
      setRecommendedProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Skincare Recommendation</h1>
      <button onClick={handleRecommendation}>Get Skincare Recommendation</button>
      {recommendedProduct && (
        <div>
          <h2>Recommended Product</h2>
          <p>Name: {recommendedProduct.Name}</p>
          <p>Brand: {recommendedProduct.Brand}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default SkincareRecommendation;
