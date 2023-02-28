import './App.scss';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import TrendingCollections from "./components/trendingCollections/TrendingCollections";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <HeroSection/>
                <TrendingCollections/>
            </main>
        </div>
    );
}

export default App;
