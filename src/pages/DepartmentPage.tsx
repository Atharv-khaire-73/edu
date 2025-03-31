import React from 'react';
import { Helmet } from 'react-helmet-async';

interface DepartmentPageProps {
  departmentName: string;
  departmentCode: string;
  description: string;
  subjects: Array<{
    name: string;
    code: string;
    semester: number;
  }>;
}

const DepartmentPage: React.FC<DepartmentPageProps> = ({
  departmentName,
  departmentCode,
  description,
  subjects
}) => {
  const seoTitle = `${departmentName} Study Materials & Notes | MSBTE ${departmentCode} | EduSnippt`;
  const seoDescription = `Access comprehensive ${departmentName} study materials, solved manuals, and engineering notes for MSBTE ${departmentCode} courses. Find subject-wise notes and solved manuals.`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${departmentName}, ${departmentCode}, MSBTE, study material, notes, solved manual, engineering, ${departmentCode.toLowerCase()}-notes`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://edusnippt.com/department/${departmentCode.toLowerCase()}`} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://edusnippt.com/department/${departmentCode.toLowerCase()}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": `${departmentName} Department`,
            "description": description,
            "provider": {
              "@type": "Organization",
              "name": "MSBTE",
              "sameAs": "https://msbte.org.in"
            },
            "hasCourseInstance": subjects.map(subject => ({
              "@type": "CourseInstance",
              "name": subject.name,
              "courseCode": subject.code,
              "educationalLevel": `Semester ${subject.semester}`,
              "teaches": subject.name
            })),
            "inLanguage": "en-IN",
            "url": `https://edusnippt.com/department/${departmentCode.toLowerCase()}`
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{departmentName} Study Materials</h1>
        <div className="prose max-w-none mb-8">
          <p>{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div key={subject.code} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
              <p className="text-gray-600">Course Code: {subject.code}</p>
              <p className="text-gray-600">Semester: {subject.semester}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentPage; 