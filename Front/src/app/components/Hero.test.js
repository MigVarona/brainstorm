import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';

test('renders correct content and links', () => {
    const { getByText, getByTestId } = render(<Hero />);
  
    expect(getByText('BrainStorm')).toBeInTheDocument();
    expect(getByText('Descubre un mundo de posibilidades en nuestro marketplace líder en inteligencia artificial y robots diseñados para adaptarse a tus necesidades.')).toBeInTheDocument();
  
    expect(getByTestId('marketplace-link')).toHaveAttribute('href', 'marketplace');
    expect(getByTestId('seller-link')).toHaveAttribute('href', 'clientes');
  });
  
