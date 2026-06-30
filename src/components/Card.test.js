import Card from './Card';
import { render } from '@testing-library/react';

describe('Card component', () => {
    it('renders correctly with given props', () => {
        const { getByText } = render(<Card id={1} name="John Doe" email="j@mail.com" />);
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('j@mail.com')).toBeInTheDocument();
    });
})