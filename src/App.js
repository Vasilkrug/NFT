import './App.scss';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import {Route, Routes} from "react-router-dom";
import Wallet from "./pages/wallet/Wallet";
import Login from "./pages/login/Login";
import MarketPlace from "./pages/marketplace/MarketPlace";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/wallet'} element={<Wallet/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/marketplace'} element={<MarketPlace/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
