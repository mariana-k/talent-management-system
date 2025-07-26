import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CandidateCard } from '../components/CandidateCard';
import { candidates } from '../data/candidates';
import type { FilterOptions, SortOptions } from '../types/models';

export const CandidatesList = () => {
  const navigate = useNavigate();
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    field: 'name',
    direction: 'asc',
  });

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    candidates.forEach((candidate) => {
      candidate.skills.forEach((skill) => techSet.add(skill));
    });
    return Array.from(techSet).sort();
  }, []);

  const allLocations = useMemo(() => {
    const locationSet = new Set<string>();
    candidates.forEach((candidate) => {
      locationSet.add(candidate.location);
    });
    return Array.from(locationSet).sort();
  }, []);

  const filteredAndSortedCandidates = useMemo(() => {
    const filtered = candidates.filter((candidate) => {
      if (filterOptions.technologies && filterOptions.technologies.length > 0) {
        const hasRequiredTech = filterOptions.technologies.some((tech) =>
          candidate.skills.includes(tech)
        );
        if (!hasRequiredTech) return false;
      }

      if (filterOptions.location && candidate.location !== filterOptions.location) {
        return false;
      }

      if (filterOptions.experienceMin && candidate.experience < filterOptions.experienceMin) {
        return false;
      }

      if (filterOptions.experienceMax && candidate.experience > filterOptions.experienceMax) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortOptions.field) {
        case 'name':
          aValue = `${a.firstName} ${a.lastName}`;
          bValue = `${b.firstName} ${b.lastName}`;
          break;
        case 'experience':
          aValue = a.experience;
          bValue = b.experience;
          break;
        case 'createdAt':
          aValue = a.createdAt.getTime();
          bValue = b.createdAt.getTime();
          break;
        default:
          aValue = `${a.firstName} ${a.lastName}`;
          bValue = `${b.firstName} ${b.lastName}`;
      }

      if (sortOptions.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [filterOptions, sortOptions]);

  const handleTechnologyFilter = (tech: string) => {
    setFilterOptions((prev) => ({
      ...prev,
      technologies: prev.technologies?.includes(tech)
        ? prev.technologies.filter((t) => t !== tech)
        : [...(prev.technologies || []), tech],
    }));
  };

  const clearFilters = () => {
    setFilterOptions({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidates</h1>
        <p className="text-gray-600">
          Browse and filter through our talent pool of {candidates.length} candidates
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
            
            {/* Technology Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Technologies</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {allTechnologies.map((tech) => (
                  <label key={tech} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filterOptions.technologies?.includes(tech) || false}
                      onChange={() => handleTechnologyFilter(tech)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Location</h3>
              <select
                value={filterOptions.location || ''}
                onChange={(e) =>
                  setFilterOptions((prev) => ({
                    ...prev,
                    location: e.target.value || undefined,
                  }))
                }
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">All Locations</option>
                {allLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Experience (years)</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Min</label>
                  <input
                    type="number"
                    min="0"
                    value={filterOptions.experienceMin || ''}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        experienceMin: e.target.value ? parseInt(e.target.value) : undefined,
                      }))
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Max</label>
                  <input
                    type="number"
                    min="0"
                    value={filterOptions.experienceMax || ''}
                    onChange={(e) =>
                      setFilterOptions((prev) => ({
                        ...prev,
                        experienceMax: e.target.value ? parseInt(e.target.value) : undefined,
                      }))
                    }
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="lg:col-span-3">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing {filteredAndSortedCandidates.length} of {candidates.length} candidates
            </p>
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-700">Sort by:</label>
              <select
                value={`${sortOptions.field}-${sortOptions.direction}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split('-') as [
                    'name' | 'experience' | 'createdAt',
                    'asc' | 'desc'
                  ];
                  setSortOptions({ field, direction });
                }}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="experience-desc">Experience (High-Low)</option>
                <option value="experience-asc">Experience (Low-High)</option>
                <option value="createdAt-desc">Newest First</option>
                <option value="createdAt-asc">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAndSortedCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onClick={() => navigate(`/candidates/${candidate.id}`)}
              />
            ))}
          </div>

          {filteredAndSortedCandidates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No candidates match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 