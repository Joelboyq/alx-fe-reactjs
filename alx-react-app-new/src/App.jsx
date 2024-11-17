import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';


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

import Counter from './components/Counter';

function App() {
    return (
        <div className="App">
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Counter Application</h1>
            <Counter />
        </div>
    );
}

export default App;
