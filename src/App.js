import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/common/context/ThemeContext';
import Header from "./components/common/Header";
import Overview from './components/common/Overview';
import Products from './components/Products';
import ApproachSection from './components/ApproachSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import TechnologySection from './components/TechnologySection';
import LeadershipSection from './components/LeadershipSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import icon from './assets/images/icon.png'; // Import the icon

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-black">
            <Header />
            <main className="container-custom">
              <Helmet>
                <title>Cognitive Crafts</title>
                <link rel="icon" href={icon} type="image/png" sizes="any" />
                <link rel="icon" href="%PUBLIC_URL%/logo192.png" sizes="192x192" type="image/png" />
                <link rel="icon" href="%PUBLIC_URL%/logo512.png" sizes="512x512" type="image/png" />
              </Helmet>
              <Overview />
              <ApproachSection />
              <Products />
              <AboutSection />
              <ServiceSection />
              <TechnologySection />
              <LeadershipSection />
              <InsightsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
