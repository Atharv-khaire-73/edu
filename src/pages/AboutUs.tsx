import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs: React.FC = () => {
  const seoTitle = "About EduSnippt - Your Trusted Source for MSBTE Study Materials";
  const seoDescription = "Learn about EduSnippt's mission to provide quality MSBTE study materials, solved manuals, and engineering notes. We're committed to helping students excel in their academic journey.";

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="about edusnippt, msbte study materials, engineering notes, educational platform, student resources, academic help" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edusnippt.com/about" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://edusnippt.com/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About EduSnippt",
            "description": seoDescription,
            "publisher": {
              "@type": "Organization",
              "name": "EduSnippt",
              "url": "https://edusnippt.com",
              "logo": "https://edusnippt.com/logo.png",
              "description": "Educational platform providing MSBTE study materials and engineering notes"
            },
            "inLanguage": "en-IN",
            "url": "https://edusnippt.com/about"
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About EduSnippt</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              EduSnippt is dedicated to providing high-quality study materials and resources for MSBTE students.
              We understand the challenges students face in finding reliable and comprehensive study materials,
              and we're here to make that journey easier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc pl-6">
              <li>Comprehensive MSBTE study materials</li>
              <li>Solved manuals for various subjects</li>
              <li>Engineering notes organized by department</li>
              <li>Subject-wise study resources</li>
              <li>Regular updates with new content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p>
              We are committed to maintaining the highest standards of quality in our study materials.
              Our team works tirelessly to ensure that all content is accurate, up-to-date, and helpful
              for students preparing for their examinations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              Have questions or suggestions? We'd love to hear from you! Reach out to us through our
              contact page or social media channels.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs; 