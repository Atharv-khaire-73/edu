import React, { useState, useMemo } from 'react';
import { Download, Eye } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  semester: number;
  subject: string;
  technologies: string[];
  previewUrl?: string;
  downloadUrl?: string;
}

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                  {project.title}
                </h3>
                <div className="mt-2 aspect-video w-full">
                  <iframe
                    src={project.previewUrl}
                    className="w-full h-full border-0 rounded-lg"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    title: "Library Management System",
    description: "A complete system for managing library operations including book issuing, returns, and catalog management",
    semester: 4,
    subject: "Java Programming",
    technologies: ["Java", "MySQL", "Swing"],
    previewUrl: "https://drive.google.com/file/d/1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp/preview",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1bxcZLCHs6ZprUTbFkl5mwZkPJd8KmTrp"
  },
  {
    title: "Student Result Management",
    description: "Web-based application for managing and displaying student examination results",
    semester: 4,
    subject: "Web Based Programming",
    technologies: ["PHP", "MySQL", "HTML", "CSS"]
  },
  {
    title: "Inventory Control System",
    description: "Desktop application for managing store inventory and sales tracking",
    semester: 4,
    subject: "Software Engineering",
    technologies: ["Python", "SQLite", "Tkinter"]
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive system for managing patient records and hospital operations",
    semester: 5,
    subject: "Advanced Java",
    technologies: ["Java", "Spring Boot", "React"]
  },
  {
    title: "Online Examination System",
    description: "Web platform for conducting online examinations and quizzes",
    semester: 5,
    subject: "Web Programming",
    technologies: ["Node.js", "MongoDB", "React"]
  },
  {
    title: "Attendance Management",
    description: "Mobile application for tracking student attendance using QR codes",
    semester: 6,
    subject: "Mobile Application Development",
    technologies: ["React Native", "Firebase"]
  }
];

const ProjectCard: React.FC<Project & { onPreview: () => void }> = ({ 
  title, 
  description, 
  semester, 
  subject, 
  technologies,
  downloadUrl,
  onPreview 
}) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
    <div className="p-5">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-gray-700">Semester {semester}</span>
        <span className="text-gray-400">•</span>
        <span className="text-sm text-gray-700">{subject}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100">
        <button
          onClick={onPreview}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <Eye size={16} className="mr-1.5" />
          Preview
        </button>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Download size={16} className="mr-1.5" />
          Download
        </a>
      </div>
    </div>
  </div>
);

interface MicroProjectsProps {
  searchQuery: string;
}

const MicroProjects: React.FC<MicroProjectsProps> = ({ searchQuery }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on search query only
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery.trim() === '' || [
        project.title,
        project.description,
        project.subject,
        ...project.technologies
      ].some(text => 
        text.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Computer Engineering Microprojects
          </h1>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-blue-800 text-sm">
              <span className="font-medium">Pro Tip:</span> Use the search bar in the navigation to quickly find projects. 
              You can search by project name, technology (like Java, React), or subject!
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <ProjectCard 
                  {...project} 
                  onPreview={() => setSelectedProject(project)}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found matching your search criteria.
              </p>
              <p className="text-gray-400 mt-2">
                Try searching with different keywords or technologies.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </div>
  );
};

export default MicroProjects; 