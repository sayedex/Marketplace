import CountUp from 'react-countup';

interface Props {
  value: number;
}

export const Counter = ({ value }: Props) => {
  return <CountUp end={value} />;
};