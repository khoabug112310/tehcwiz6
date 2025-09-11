import React from 'react';

const Home = ({ userName, userType }) => {
  const getUserTypeText = () => {
    switch (userType) {
      case 'pet-owner':
        return 'Pet Owner';
      case 'veterinarian':
        return 'Veterinarian';
      case 'animal-shelter':
        return 'Animal Shelter';
      default:
        return 'User';
    }
  };

  return (
    <div>
      <h2>Welcome {userName}!</h2>
      <p>You are logged in as a {getUserTypeText()}.</p>
      <p>Select an option from the menu to get started.</p>
    </div>
  );
};

export default Home;