import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);

    // Verifica si el componente se renderiza correctamente
    const navbarElement = screen.getByText('BRAINSTORM');
    expect(navbarElement).toBeInTheDocument();
  });

  test('opens and closes mobile menu', () => {
    render(<Navbar />);

    // Verifica que el menú móvil esté cerrado inicialmente
    const mobileMenu = screen.queryByRole('dialog');
    expect(mobileMenu).not.toBeInTheDocument();



    
  });

 
});
