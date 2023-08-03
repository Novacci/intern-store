import React from 'react';
import Select from 'react-select';
import polishFlag from '../public/images/flags/poland.png';
import usaFlag from '../public/images/flags/united-states.png';
import Image from 'next/image';

const options = [
  {
    value: 'PLN',
    label: (
      <div className="flex items-center">
        <Image className={'w-5 h-5'} src={polishFlag} alt="polish" />
        <span className="text-[#00c189] text-[0.7rem] ml-2">PLN</span>
      </div>
    ),
  },
  {
    value: 'USD',
    label: (
      <div className="flex items-center">
        <Image className={'w-5 h-5'} src={usaFlag} alt="usa" />
        <span className="text-[#00c189] text-[0.7rem] ml-2">USD</span>
      </div>
    ),
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
        defaultValue={options[0]}
        isSearchable={false}
      />
    </>
  );
}
