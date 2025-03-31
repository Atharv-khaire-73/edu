import React from 'react';
import { Link } from 'react-router-dom';

interface TechPlateProps {
  name: string;
  icon: React.ReactNode;
  backgroundColor: string;
  courseCode: string;
  department: string;
  semester: number;
  subject: string;
  iconBg: string;
  id?: string;
}

const TechPlate: React.FC<TechPlateProps> = ({ 
  name, 
  backgroundColor, 
  courseCode, 
  department, 
  semester,
  subject,
  iconBg,
  id
}) => {
  const techPlateId = id || name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="animate-fade-in-up">
      <Link to={`/tech-plate/${techPlateId}`}>
        <div 
          className={`${backgroundColor} rounded-lg p-3 transition-all duration-300 hover:scale-102 hover:shadow-lg active:scale-98 cursor-pointer flex items-center gap-2 shadow-sm border border-gray-200/80`}
        >
          {/* Subject Logo */}
          <div className={`${iconBg} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
            <span className="text-[11px] font-medium text-white">{subject}</span>
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold text-gray-900 truncate">
              {courseCode}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-xs text-gray-700 truncate">{department}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-700">sem {semester}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Section Title Component
const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
);

interface TechPlatesGridProps {
  searchQuery: string;
  department?: string;
  isDiploma?: boolean;
}

// Container component to hold all tech plates
const TechPlatesGrid: React.FC<TechPlatesGridProps> = ({ searchQuery, department, isDiploma = false }) => {
  const techPlates = [
    {
      id: 'mobile-app-development',
      name: 'ChatGPT',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-emerald-600',
      courseCode: '22602',
      subject: 'MAD',
      department: 'CO',
      semester: 6,
      icon: null
    },
    {
      id: 'python',
      name: 'Python',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-blue-600',
      courseCode: '22316',
      subject: 'PYT',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'java',
      name: 'Java',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-orange-600',
      courseCode: '22412',
      subject: 'JVA',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'database',
      name: 'Database',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-purple-600',
      courseCode: '22317',
      subject: 'DMS',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'web',
      name: 'Web Development',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-pink-600',
      courseCode: '22412',
      subject: 'WBP',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-cyan-600',
      courseCode: '22316',
      subject: 'OSY',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'data-structures',
      name: 'Data Structures',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-violet-600',
      courseCode: '22317',
      subject: 'DSU',
      department: 'CO',
      semester: 3,
      icon: null
    },
    {
      id: 'software-engineering',
      name: 'Software Engineering',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-rose-600',
      courseCode: '22412',
      subject: 'SEN',
      department: 'CO',
      semester: 4,
      icon: null
    },
    {
      id: 'mechanical-design',
      name: 'Mechanical Design',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-amber-600',
      courseCode: '22342',
      subject: 'MDE',
      department: 'ME',
      semester: 4,
      icon: null
    },
    {
      id: 'thermal-engineering',
      name: 'Thermal Engineering',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-red-600',
      courseCode: '22343',
      subject: 'THE',
      department: 'ME',
      semester: 4,
      icon: null
    },
    {
      id: 'information-security',
      name: 'Information Security',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-lime-600',
      courseCode: '22517',
      subject: 'ISS',
      department: 'IF',
      semester: 5,
      icon: null
    },
    {
      id: 'mobile-computing',
      name: 'Mobile Computing',
      backgroundColor: 'bg-white hover:bg-gray-50',
      iconBg: 'bg-sky-600',
      courseCode: '22518',
      subject: 'MBC',
      department: 'IF',
      semester: 5,
      icon: null
    }
  ];

  const getDepartmentCode = (departmentPath: string | undefined): string | undefined => {
    if (!departmentPath) return undefined;
    
    if (departmentPath.includes('computer-engineering')) return 'CO';
    if (departmentPath.includes('mechanical-engineering')) return 'ME';
    if (departmentPath.includes('information-engineering')) return 'IF';
    
    return undefined;
  };

  const departmentCode = getDepartmentCode(department);
  
  const filteredTechPlates = techPlates.filter(plate => {
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = 
      plate.courseCode.toLowerCase().includes(searchLower) ||
      plate.name.toLowerCase().includes(searchLower) ||
      plate.department.toLowerCase().includes(searchLower);
      
    // If department filter is applied, only show plates from that department
    const departmentMatch = !departmentCode || plate.department === departmentCode;
    
    return searchMatch && departmentMatch;
  });

  // Generate a title based on selected department and route type
  const getSectionTitle = () => {
    const departmentName = departmentCode === 'CO' ? 'Computer Engineering' :
                          departmentCode === 'ME' ? 'Mechanical Engineering' :
                          departmentCode === 'IF' ? 'Information Engineering' : '';
    
    if (isDiploma) {
      return departmentName ? `${departmentName} Diploma Courses` : 'MSBTE Diploma Courses';
    } else {
      return departmentName ? `${departmentName} Solved Manuals` : 'MSBTE Solved Manuals';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Main Section */}
      <section>
        <SectionTitle title={getSectionTitle()} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {filteredTechPlates.map((plate, index) => (
            <div 
              key={plate.id} 
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animationFillMode: 'forwards'
              }}
            >
              <TechPlate {...plate} />
            </div>
          ))}
        </div>
      </section>

      {/* Notes Section - Show for both manual and diploma routes */}
      <section>
        <SectionTitle title="Notes" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {filteredTechPlates.map((plate, index) => (
            <div 
              key={plate.id + "-note"} 
              className="opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${(index * 0.05) + 0.3}s`,
                animationFillMode: 'forwards'
              }}
            >
              <TechPlate {...plate} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechPlatesGrid; 