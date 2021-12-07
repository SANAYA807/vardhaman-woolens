import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Collections from './components/Collections';
import NewArrivals from './components/NewArrivals';
import VideoGallery from './components/VideoGallery';
import KnittingDiaries from './components/KnittingDiaries';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Collections />
      <NewArrivals />
      <VideoGallery />
      <KnittingDiaries />
      <Footer />
    </div>
  );
}

export default App;
