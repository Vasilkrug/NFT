import './App.scss';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import TrendingCollections from "./components/trendingCollections/TrendingCollections";
import TopCreatorsList from "./components/topCreatorsList/topCreatorsList";
import HowItWorks from "./components/howitWorks/HowItWorks";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <HeroSection/>
                <TrendingCollections/>
                <TopCreatorsList/>
                <HowItWorks/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
