import type { ResumeItem as ResumeItemType } from '../types/models';

interface ResumeItemProps {
  item: ResumeItemType;
}

export const ResumeItem = ({ item }: ResumeItemProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  };

  const formatDateRange = () => {
    const startDate = formatDate(item.startDate);
    const endDate = item.endDate ? formatDate(item.endDate) : 'Present';
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className={`border-l-4 pl-6 pb-6 relative ${
      item.isCurrentJob 
        ? 'border-green-500 bg-green-50' 
        : 'border-gray-300'
    }`}>
      {item.isCurrentJob && (
        <div className="absolute -left-2 top-0">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
      )}
      
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className={`text-lg font-semibold ${
              item.isCurrentJob ? 'text-green-800' : 'text-gray-900'
            }`}>
              {item.jobTitle}
            </h3>
            <p className="text-gray-600 font-medium">{item.companyName}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{formatDateRange()}</p>
            {item.isCurrentJob && (
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                Current
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className={`inline-block text-xs px-2 py-1 rounded-full ${
                item.isCurrentJob
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}; 