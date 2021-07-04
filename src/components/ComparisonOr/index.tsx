import React,{ ReactNode } from 'react';

type Props = {
  condition: boolean,
  children: ReactNode
}

const ComparisonOr: React.FC<Props> = ({ condition, children }) => (
  <>
    {condition || children }
  </>
);

export default ComparisonAnd;