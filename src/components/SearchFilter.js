import React, { useState } from 'react';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import plantData from '../data/plantData';
import '../css/searchfilter.css';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLightRequirements, setSelectedLightRequirements] = useState([]);
  const [selectedWateringFrequencies, setSelectedWateringFrequencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLightDropdown, setShowLightDropdown] = useState(false);
  const [showWateringDropdown, setShowWateringDropdown] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(
      event.target.value,
      selectedCategories,
      selectedLightRequirements,
      selectedWateringFrequencies
    );
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((item) => item !== category)
        : [...prevSelected, category]
    );
  };

  const handleLightRequirementToggle = (requirement) => {
    setSelectedLightRequirements((prevSelected) =>
      prevSelected.includes(requirement)
        ? prevSelected.filter((item) => item !== requirement)
        : [...prevSelected, requirement]
    );
  };

  const handleWateringFrequencyToggle = (frequency) => {
    setSelectedWateringFrequencies((prevSelected) =>
      prevSelected.includes(frequency)
        ? prevSelected.filter((item) => item !== frequency)
        : [...prevSelected, frequency]
    );
  };

  const handleApplyFilters = () => {
    setIsLoading(true); // Set loading state to true when filters applied
    setTimeout(() => {
      onSearch(
        searchTerm,
        selectedCategories,
        selectedLightRequirements,
        selectedWateringFrequencies
      );
      setIsLoading(false); 
    }, 1000); // 1 second delay
  };

  const categories = Array.from(new Set(plantData.map((plant) => plant.plant_name)));
  const lightRequirements = Array.from(new Set(plantData.map((plant) => plant.light_requirement)));
  const wateringFrequencies = Array.from(new Set(plantData.map((plant) => plant.watering_frequency)));

  return (
    <Row className="search-filter-container justify-content-center text-center">
      <div className='all-col'>
      <Col md={3}>
        <div className="dropdown">
          <Button className="dropdown-toggle" onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
            Common Plants
          </Button>
          {showCategoryDropdown && (
            <div className="dropdown-menu show">
              {categories.map((category, index) => (
                <div key={index} className="dropdown-item">
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                    />{' '}
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
      <Col md={3}>
        <div className="dropdown">
          <Button className="dropdown-toggle" onClick={() => setShowLightDropdown(!showLightDropdown)}>
            Sunlight
          </Button>
          {showLightDropdown && (
            <div className="dropdown-menu show">
              {lightRequirements.map((requirement, index) => (
                <div key={index} className="dropdown-item">
                  <label>
                    <input
                      type="checkbox"
                      value={requirement}
                      checked={selectedLightRequirements.includes(requirement)}
                      onChange={() => handleLightRequirementToggle(requirement)}
                    />{' '}
                    {requirement}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
      <Col md={3}>
        <div className="dropdown">
          <Button className="dropdown-toggle" onClick={() => setShowWateringDropdown(!showWateringDropdown)}>
            Watering
          </Button>
          {showWateringDropdown && (
            <div className="dropdown-menu show">
              {wateringFrequencies.map((frequency, index) => (
                <div key={index} className="dropdown-item">
                  <label>
                    <input
                      type="checkbox"
                      value={frequency}
                      checked={selectedWateringFrequencies.includes(frequency)}
                      onChange={() => handleWateringFrequencyToggle(frequency)}
                    />{' '}
                    {frequency}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </Col>
      <Col md={3}>
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Button className='filter-btn' variant="primary" onClick={handleApplyFilters}>
            Apply Filters
          </Button>
        )}
      </Col>
      </div>
    </Row>
  );
};

export default SearchFilter;
