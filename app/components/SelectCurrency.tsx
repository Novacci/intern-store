import React from 'react';
import Select from 'react-select';
import polishFlag from '../assets/flags/poland.png';
import usaFlag from '../assets/flags/united-states.png';
import './../styles/SelectCurrency.scss';
import Image from 'next/image';

const options = [
  {
    value: 'PLN',
    label: <Image className={'flag-style'} src={polishFlag} alt="polish" />,
  },
  {
    value: 'USD',
    label: <Image className={'flag-style'} src={usaFlag} alt="usa" />,
  },
];

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: 'green',
    padding: 5,
    border: 'none',
  }),
  control: (base: any, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    '&:hover': {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

export default function SelectCurrency() {
  return (
    <>
      <Select
        styles={customStyles}
        options={options}
        defaultValue={options[1]}
        isSearchable={false}
      />
    </>
  );
}
