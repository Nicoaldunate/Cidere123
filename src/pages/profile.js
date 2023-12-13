import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/status', { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => setUser(data.user));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
