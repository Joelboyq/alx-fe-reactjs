import React from 'react';
import UserProfile from './components/UserProfile'; // Import UserProfile
import UserContext from './UserContext';           // Import UserContext

function App() {
    const userData = { name: "Jane Doe", age: 25, bio: "Loves React and hiking." };

    return (
        <UserContext.Provider value={userData}>
            <div>
                <h1>User Profile</h1>
                <UserProfile />
            </div>
        </UserContext.Provider>
    );
}

export default App;
