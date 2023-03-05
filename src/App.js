import {Header, Footer} from './components/index';
import {Home, Wallet, Login, MarketPlace, Rankings} from './pages/index';
import {Route, Routes} from 'react-router-dom';
import './App.scss';

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
                    <Route path={'/rankings'} element={<Rankings/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
