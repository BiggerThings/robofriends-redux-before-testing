import Card from './Card';
import { render } from '@testing-library/react';

describe('Card component', () => {
    it('renders correctly with given props', () => {
        const { getByText, getByAltText } = render(<Card id={1} name="John Doe" email="j@mail.com" />);
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('j@mail.com')).toBeInTheDocument();
        expect(getByAltText('robots')).toBeInTheDocument();
        expect(getByAltText('robots').src).toBe('https://robohash.org/1?200x200');
    });
})