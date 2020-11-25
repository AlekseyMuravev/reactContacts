import { useState } from 'react';
import AuthPages from './pages/AuthPages';
import ContactsPages from './pages/ContactsPages';

function App() {
    const [isAuthorizate, setIsAuthorizate] = useState(false);

    return (
        <div className="App">
            {!isAuthorizate && <AuthPages setIsAuthorizate={setIsAuthorizate} />}
            {isAuthorizate && <ContactsPages />}
        </div>
    );
}

export default App;
