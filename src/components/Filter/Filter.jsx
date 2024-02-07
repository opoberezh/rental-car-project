import { selectAdverts, selectFilter } from '../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Form,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  SearchButton,
  SelectContainer,
  UnitLeft,
  UnitRight,
  Wrapper,
  
} from './Filter.styled';

import { useState } from 'react';
import { setMake, setPrice } from '../redux/filterSlice';



const Filter = ({ onFilterChange }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const { selectedMake, selectedPrice } = filter || {};

  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const makeOptions = adverts.map(advert => ({
    value: advert.make,
    label: advert.make,
  }));


  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

 

  const handlePriceStepChange = selectedOption => {
    if (selectedOption) {
      console.log('Selected Price:', selectedOption.value);
      dispatch(setPrice(selectedOption));
    } else {
      toast.error('Selected Price is undefined');
    }
  };



  // const handlePriceStepChange = (selectedOption) => {

  //   console.log("Selected Option:", selectedOption);

  //   dispatch(setPrice( selectedOption.value));
  // };

  // console.log('Adverts:', adverts);
  // console.log('Selected Price:', selectedPrice);

  const formatMileage = value => {
    if (value !== undefined && value !== null && value !== '') {
      const cleanedValue = value.toString().replace(/,/g, '');
      const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return formattedValue;
    }
    return null; // Return null for empty values
  };



  const handleMinInputChange = e => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = e => {
    setMaxValue(e.target.value);
  };

  const filteredPrices = adverts.filter(
    advert => selectedPrice === null || parseFloat(advert.rentalPrice.replace('$', '')) <= selectedPrice.value
  );

  const filteredPricesOptions = filteredPrices.map(advert => ({
    value: advert.rentalPrice,
    label: `${advert.rentalPrice}`,
  }));

  const handleFilterClick = () => {
    if (
      (!selectedMake || !selectedMake.value) &&
    (!selectedPrice || !selectedPrice.value) &&
    (!minValue || minValue.trim() === '') &&
    (!maxValue || maxValue.trim() === '')
    ) {
      // Якщо нічого не вибрано, показати повідомлення
      toast.error('Please select at least one filter.');
      return;
    }
    if (
      parseInt(minValue.replace(/,/g, ''), 10) >
      parseInt(maxValue.replace(/,/g, ''), 10)
    ) {
      toast.error('The maximum mileage must exceed the minimum mileage.');
      return;
    }

    const newFilters = {
      make: selectedMake ? selectedMake.value : null,
      filteredPrices: filteredPricesOptions,
      minMileage: parseInt(minValue.replace(/,/g, ''), 10),
      maxMileage: parseInt(maxValue.replace(/,/g, ''), 10),
    };
console.log(newFilters);
    onFilterChange(newFilters);
  };



  return (
    <Container>
      <Form >
        <SelectContainer>
          <Label htmlFor="nameSelect">Car brand</Label>
          <Select
            id="nameSelect"
            placeholder="Enter the text"
            value={selectedMake}
            onChange={selectedOption => dispatch(setMake(selectedOption))}
            options={makeOptions}
            isClearable={true}
            styles={{
              control: styles => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium',
                };
              },
              menuList: base => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>

        <SelectContainer>
          <Label htmlFor="priceSelect">Price/ 1 hour</Label>
          <Select
            id="priceSelect"
            placeholder="To $"
            value={selectedPrice}
            onChange={handlePriceStepChange}
            options={priceRangeOptions}
            isClearable
            styles={{
              control: styles => ({
                ...styles,
                width: '125px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium',
                };
              },
              menuList: base => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </SelectContainer>
<Wrapper>
<Label>Car mileage / km</Label>
    <InputContainer>    
          <InputLeft
            type="text"
            value={formatMileage(minValue) || ''}
            onChange={handleMinInputChange}
            style={{ color: 'black' }}
          />
          <UnitLeft>From</UnitLeft>
          <InputRight
            type="text"
            value={formatMileage(maxValue) || ''}
            onChange={handleMaxInputChange}
            style={{ color: 'black' }}
          />
          <UnitRight>To</UnitRight>
 </InputContainer>
</Wrapper>
       
       
      </Form>
      <SearchButton
        type="button"
        onClick={handleFilterClick}
        style={{ width: '135px' }}
      >
        Search
      </SearchButton>
    </Container>
  );
};
export default Filter;
