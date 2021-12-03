import { FC } from 'react';

export interface SelectItemInterface {
  label: string;
  value: string;
}

interface SelectInterface {
  onSelect: (selected: string) => void;
}

const Select: FC<SelectInterface> = ({ onSelect }) => {
  const fruits: SelectItemInterface[] = [
    {
      label: '사과',
      value: 'apple',
    },
    {
      label: '바나나',
      value: 'banana',
    },
    {
      label: '오렌지',
      value: 'orange',
    },
  ];

  return (
    <div>
      <select
        onChange={({ target }) => {
          onSelect(target.value);
        }}>
        {fruits.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
