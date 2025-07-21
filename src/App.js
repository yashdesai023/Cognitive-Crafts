import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/common/context/ThemeContext';
import Header from "./components/common/Header";
import Overview from './components/common/Overview';
import Products from './components/Products';
import ApproachSection from './components/ApproachSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ServiceSection';
import CoursesSection from './components/TechnologySection';
import LeadershipSection from './components/LeadershipSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import JoinUsSection from './components/JoinUsSection';
import Footer from './components/Footer';

import icon from './assets/images/icon.png'; // Import the icon
import bgVideo from './assets/images/Create_a_seamless_202507212224.mp4';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-transparent">
             {/* Background Video */}
             <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
              <video 
                className="w-full h-full object-cover opacity-40"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            </div>
            <Header />
            <main className="container-custom">
              <Helmet>
                <title>Cognitive Crafts</title>
                <link rel="icon" href={icon} type="image/png" sizes="any" />
                <link rel="icon" href="%PUBLIC_URL%/logo192.png" sizes="192x192" type="image/png" />
                <link rel="icon" href="%PUBLIC_URL%/logo512.png" sizes="512x512" type="image/png" />
              </Helmet>
              <Overview />
              <AboutSection />
              <ProcessSection />
              <CoursesSection />
              {/* <LeadershipSection />
              <InsightsSection /> */}
              <JoinUsSection />
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
