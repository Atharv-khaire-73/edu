import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import TechPlatesGrid from './components/TechPlate';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Loader from './components/Loader';
import MicroProjects from './components/MicroProjects';
import AboutUs from './components/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TechPlateDetail from './pages/TechPlateDetail';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Only show banner on home page
  const showBanner = location.pathname === '/';

  const sampleData = {
    title: "OS Notes Semester 4 Engineering",
    semester: "4th Semester",
    subject: "Operating Systems",
    university: "Mumbai University",
    description: "Namaste Students, In this article we provided Operating System Notes for the Engineering 4th Semester under Mumbai University Syllabus. This subject have the Mid difficult level because it contain large theory answers and diagrams of Computer Engineering. In fact why we provided the OS Handwritten Notes, which you can be used instead of long answers for handwrite.",
    overview: "In Operating system subject, you will study the various types of operating systems and why they created and the syllabus calls them in devices and are built in OS. Operating System is a program which is loading in the computer by a boot program which helps the other application programs to communicate with the computer without knowing how to use the computer's hardware. The program is Operating System is to interface that abstracts the underlying hardware of operating hardware and software and acts as an interface for accessing network and file system."
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 animate-fadeIn">
          <Navigation 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <div className="flex-1 lg:ml-64">
            <div className="flex flex-col min-h-screen">
              {showBanner && <Banner />}
              <main className="flex-1">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
                  <div className="space-y-6 sm:space-y-8">
                    <Routes>
                      <Route path="/" element={<TechPlatesGrid searchQuery={searchQuery} />} />
                      <Route 
                        path="/microprojects/computer-engineering" 
                        element={<MicroProjects searchQuery={searchQuery} />}
                      />
                      <Route path="/about" element={<AboutUs />} />
                      
                      {/* Department-specific diploma routes */}
                      <Route 
                        path="/diploma/computer-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isDiploma={true} />} 
                      />
                      <Route 
                        path="/diploma/mechanical-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="mechanical-engineering" isDiploma={true} />} 
                      />
                      <Route 
                        path="/diploma/information-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="information-engineering" isDiploma={true} />} 
                      />
                      
                      {/* Department-specific manual routes (keeping for backwards compatibility) */}
                      <Route 
                        path="/manuals/computer-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="computer-engineering" isDiploma={false} />} 
                      />
                      <Route 
                        path="/manuals/mechanical-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="mechanical-engineering" isDiploma={false} />} 
                      />
                      <Route 
                        path="/manuals/information-engineering" 
                        element={<TechPlatesGrid searchQuery={searchQuery} department="information-engineering" isDiploma={false} />} 
                      />

                      {/* TechPlate Detail Route */}
                      <Route 
                        path="/tech-plate/:id" 
                        element={<TechPlateDetail {...sampleData} />} 
                      />
                      
                      {/* New pages */}
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    </Routes>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;