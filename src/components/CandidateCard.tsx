import type { Candidate } from '../types/models';

interface CandidateCardProps {
  candidate: Candidate;
  onClick?: () => void;
}

export const CandidateCard = ({ candidate, onClick }: CandidateCardProps) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
    }).format(date);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src={candidate.avatar}
            alt={`${candidate.firstName} ${candidate.lastName}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {candidate.firstName} {candidate.lastName}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {candidate.currentJob?.title} at {candidate.currentJob?.company}
            </p>
            <p className="text-sm text-gray-500 mb-2">{candidate.location}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {candidate.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {candidate.skills.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{candidate.skills.length - 3} more
                  </span>
                )}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {candidate.experience} years
                </p>
                <p className="text-xs text-gray-500">experience</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Updated {formatDate(candidate.updatedAt)}</span>
            <span className="text-blue-600 font-medium">View Profile →</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 