import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Search.module.css';
import { Category } from '../../models/interfaces';


const categories: Category[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
];

const Search: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (selectedOption: Category | null) => {
    if (selectedOption) {
      navigate(`/items/${selectedOption.value}`);
    }
  };

  return (
    <div className="search-container">
      <Select
        options={categories}
        defaultValue={categories[0]}
        onChange={handleSearch}
        placeholder="Search recipes..."
        className="search-bar"
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: '50px',
            boxShadow: 'none',
            borderColor: '#ccc',
            '&:hover': {
              borderColor: '#aaa',
            },
          }),
          input: (base) => ({
            ...base,
            padding: '0 40px 0 20px',
            position: 'relative',
          }),
          indicatorsContainer: (base) => ({
            ...base,
            marginRight: '10px',
          }),
        }}
      />
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#666',
        }}
      />
    </div>
  );
};

export default Search;