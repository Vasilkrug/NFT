import './App.scss';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
