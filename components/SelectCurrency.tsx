import React from 'react';
import Select from 'react-select';
import polishFlag from '../public/images/flags/poland.png';
import usaFlag from '../public/images/flags/united-states.png';
import Image from 'next/image';
import '../app/styles/SelectCurrency.scss';

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

// const customStyles = {
//   option: (provided: any) => ({
//     ...provided,
//     color: 'green',
//     padding: 5,
//     border: 'none',
//   }),
//   control: (base: any, state: any) => ({
//     ...base,
//     border: state.isFocused ? 0 : 0,
//     boxShadow: state.isFocused ? 0 : 0,
//     '&:hover': {
//       border: state.isFocused ? 0 : 0,
//     },
//   }),
// };

export default function SelectCurrency() {
  return (
    <>
      <Select
        // styles={customStyles}
        options={options}
        defaultValue={options[0]}
        isSearchable={false}
      />
    </>
  );
}
