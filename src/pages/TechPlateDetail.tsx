import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface TechPlateDetailProps {
  title: string;
  semester: string;
  subject: string;
  university: string;
  description: string;
  overview: string;
}

const TechPlateDetail: React.FC<TechPlateDetailProps> = ({
  title,
  semester,
  subject,
  university,
  description,
  overview,
}) => {
  // Convert Google Drive view link to embed link
  const pdfUrl = "https://drive.google.com/file/d/1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp/preview";

  // Generate SEO-friendly title and description
  const seoTitle = `${subject} - ${semester} ${university} Study Material | EduSnippt`;
  const seoDescription = `${description} Get comprehensive ${subject} study materials, notes, and solved manuals for ${semester} at ${university}.`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${subject}, ${semester}, ${university}, study material, notes, solved manual, engineering, ${subject.toLowerCase()}-notes`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://edusnippt.com/subject/${subject.toLowerCase()}`} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://edusnippt.com/subject/${subject.toLowerCase()}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            "name": title,
            "description": description,
            "educationalLevel": semester,
            "educationalUse": ["Study Material", "Notes", "Solved Manual"],
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "Course",
              "name": subject,
              "provider": {
                "@type": "Organization",
                "name": university
              }
            },
            "learningResourceType": "Study Material",
            "teaches": subject,
            "url": `https://edusnippt.com/subject/${subject.toLowerCase()}`
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Homepage</Link>
          <span className="mx-2">•</span>
          <span>{subject}</span>
          <span className="mx-2">•</span>
          <span>Free Notes</span>
          <button className="ml-auto px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            Share
          </button>
        </nav>

        {/* Main Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {title} | {subject} | {semester} | {university}
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Left Column - PDF Preview */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* PDF Preview Header */}
              <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Preview</span>
                  <span className="text-xs text-gray-500">PDF Document</span>
                </div>
              </div>
              
              {/* PDF Viewer */}
              <div className="aspect-[3/4] w-full">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full border-0"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Description and Overview */}
          <div className="md:col-span-2">
            {/* Description Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {description}
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  We provide you the genuine study material which is made by our subject experts specifically,
                  where we have subject experts who made this possible of any study material of simplicity.
                </p>
              </div>
            </div>

            {/* Subject Overview Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Subject Overview
              </h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechPlateDetail; 