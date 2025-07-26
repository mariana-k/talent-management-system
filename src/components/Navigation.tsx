import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ATS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Talent Tracker
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/candidates"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/candidates')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Candidates
            </Link>
            <Link
              to="/companies"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/companies')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Companies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 