import type { Company, Job } from '../types/models';

interface CompanyCardProps {
  company: Company;
  jobs: Job[];
  onClick?: () => void;
}

export const CompanyCard = ({ company, jobs, onClick }: CompanyCardProps) => {
  const activeJobs = jobs.filter((job) => job.companyId === company.id && job.isActive);

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={company.logo}
            alt={company.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {company.name}
            </h3>
            <p className="text-sm text-gray-600 mb-1">{company.industry}</p>
            <p className="text-sm text-gray-500 mb-2">{company.location}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>{company.employeeCount} employees</span>
                <span>•</span>
                <span>Founded {company.foundedYear}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-green-600">
                  {activeJobs.length} open positions
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-700 line-clamp-2">{company.description}</p>
        </div>
        
        {activeJobs.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Open Positions:</h4>
            <div className="space-y-2">
              {activeJobs.slice(0, 3).map((job) => (
                <div key={job.id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{job.title}</span>
                  <span className="text-xs text-gray-500">{job.location}</span>
                </div>
              ))}
              {activeJobs.length > 3 && (
                <p className="text-xs text-gray-500">
                  +{activeJobs.length - 3} more positions
                </p>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
            >
              Visit Website
            </a>
            <span className="text-blue-600 font-medium">View Details →</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 