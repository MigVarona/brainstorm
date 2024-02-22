import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroMark from './HeroMark';



describe('HeroMark component', () => {
  test('renders HeroMark component correctly', () => {
    render(<HeroMark />);

    
    const headingElement = screen.getByText(/El Marketplace Nº1 en España/i);
    expect(headingElement).toBeInTheDocument();

    
    const getStartedLink = screen.getByText(/Get started/i);
    expect(getStartedLink).toBeInTheDocument();

    const learnMoreLink = screen.getByText(/Learn more/i);
    expect(learnMoreLink).toBeInTheDocument();
  });

  test('navigates to "dispositivos" when "Dispositivos" link is clicked', () => {
    render(<HeroMark />);

    
    const dispositivosLink = screen.getByText(/Dispositivos/i);
    expect(dispositivosLink).toBeInTheDocument();

    
    fireEvent.click(dispositivosLink);

  });

  test('navigates to "marketplace" when "Robots" link is clicked', () => {
    render(<HeroMark />);

   
    const robotsLink = screen.getByText(/Robots/i);
    expect(robotsLink).toBeInTheDocument();

    
    fireEvent.click(robotsLink);

    
  });

  test('navigates to "ia" when "IA" link is clicked', () => {
    render(<HeroMark />);

    const iaLink = screen.getByText(/IA/i);
    expect(iaLink).toBeInTheDocument();

    fireEvent.click(iaLink);

  });
});
