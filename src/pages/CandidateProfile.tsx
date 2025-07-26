import { useParams, Link } from 'react-router-dom';
import { candidates } from '../data/candidates';
import { ResumeItem } from '../components/ResumeItem';

export const CandidateProfile = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Candidate Not Found</h1>
          <p className="text-gray-600 mb-6">The candidate you're looking for doesn't exist.</p>
          <Link
            to="/candidates"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Candidates
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/candidates"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Back to Candidates
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <div className="flex items-start space-x-6">
          <img
            src={candidate.avatar}
            alt={`${candidate.firstName} ${candidate.lastName}`}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {candidate.firstName} {candidate.lastName}
            </h1>
            <p className="text-xl text-gray-600 mb-1">
              {candidate.currentJob?.title} at {candidate.currentJob?.company}
            </p>
            <p className="text-gray-500 mb-4">{candidate.location}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>{candidate.experience} years of experience</span>
              <span>•</span>
              <span>Member since {formatDate(candidate.createdAt)}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">Email</h3>
              <a
                href={`mailto:${candidate.email}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidate.email}
              </a>
            </div>
            {candidate.phone && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">Phone</h3>
                <a
                  href={`tel:${candidate.phone}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {candidate.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Resume */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
            <div className="space-y-0">
              {candidate.resume.map((item) => (
                <ResumeItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Skills */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          {candidate.education && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
              <div>
                <h4 className="font-medium text-gray-900">{candidate.education.degree}</h4>
                <p className="text-gray-600">{candidate.education.institution}</p>
                <p className="text-sm text-gray-500">Graduated {candidate.education.graduationYear}</p>
              </div>
            </div>
          )}

          {/* Profile Info */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Location:</span>
                <p className="text-gray-900">{candidate.location}</p>
              </div>
              <div>
                <span className="text-gray-500">Experience:</span>
                <p className="text-gray-900">{candidate.experience} years</p>
              </div>
              <div>
                <span className="text-gray-500">Member since:</span>
                <p className="text-gray-900">{formatDate(candidate.createdAt)}</p>
              </div>
              <div>
                <span className="text-gray-500">Last updated:</span>
                <p className="text-gray-900">{formatDate(candidate.updatedAt)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 