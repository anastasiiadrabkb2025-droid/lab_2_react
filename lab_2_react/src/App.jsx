import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Experience />
          <Education />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;