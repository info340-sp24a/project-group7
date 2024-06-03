import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import plantData from '../data/plantData';
import '../css/searchfilter.css';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLightRequirements, setSelectedLightRequirements] = useState([]);
  const [selectedWateringFrequencies, setSelectedWateringFrequencies] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner

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
    <Container className="search-filter-container">
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Col>
        <Col>
          <div>
            <h6>Common Plants:</h6>
            {categories.map((category, index) => (
              <div key={index}>
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
        </Col>
        <Col>
          <div>
            <h6>Light Requirements:</h6>
            {lightRequirements.map((requirement, index) => (
              <div key={index}>
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
        </Col>
        <Col>
          <div>
            <h6>Watering Frequencies:</h6>
            {wateringFrequencies.map((frequency, index) => (
              <div key={index}>
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
        </Col>
        <Col>
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Button variant="primary" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchFilter;
