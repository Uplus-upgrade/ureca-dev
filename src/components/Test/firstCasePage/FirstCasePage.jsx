import React from 'react';
import ParentComponentHaveChildren from './ParentComponentHaveChildren';
import { ExpensiveComponent } from '../ExpensiveComponent';

export default function FirstCasePage() {
  return (
    <ParentComponentHaveChildren>
      <ExpensiveComponent />
    </ParentComponentHaveChildren>
  );
}
