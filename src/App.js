import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage";
import UserLogin from "./components/UserLogin";
import SearchFunctionality from "./components/SearchFunctionality";
import Buttons from "./components/Buttons";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/search" element={<SearchFunctionality />} />
                <Route path="/buttons" element={<Buttons />} />

            </Routes>
        </Router>
    );
};

export default App;
