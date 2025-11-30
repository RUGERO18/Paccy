import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
                                                                                                                        
function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        {/* 
          You would continue building and adding other components here:
          <AboutUs />
          <MachineryPark />
          <Features />
          <Team />                                                                                                                                                                                                                                                                                                                                           
          <ContactForm />
        */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;


