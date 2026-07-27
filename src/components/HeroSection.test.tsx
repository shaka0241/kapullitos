import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders the volunteer button', () => {
    render(<HeroSection />);
    const button = screen.getByText('Únete como Voluntario');
    expect(button).toBeInTheDocument();
  });
});
