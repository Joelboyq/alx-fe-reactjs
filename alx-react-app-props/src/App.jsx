import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
function App() {
    return (
        <div className="App">
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        </div>
    );
}

import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
    const userData = { name: "Jane Doe", age: 25, bio: "Loves coding and hiking." };

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
