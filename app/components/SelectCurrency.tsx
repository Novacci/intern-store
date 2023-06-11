import React from 'react';
import Select from 'react-select';
import polishFlag from '../assets/flags/poland.png';
import usaFlag from '../assets/flags/united-states.png';
import './../styles/SelectCurrency.scss';

// interface FlagType {
//   value: string;
//   src: string | HTMLImageElement;
// }

const options = [
  {
    value: 'pl',
    // label: <img className={'flag-style'} src={polishFlag} alt="polish" />,
    label: 'Poland',
  },
  {
    value: 'en',
    // label: <img className={'flag-style'} src={usaFlag} alt="usa" />,
    label: 'USA',
  },
];

export default function SelectCurrency() {
  return (
    <>
      <Select
        options={options}
        className={'react-select-container'}
        defaultValue={options[1]}
        isSearchable={false}
      />
    </>
  );
}
