import './App.scss';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <HeroSection/>
            </main>
        </div>
    );
}

export default App;
