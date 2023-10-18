// for table component
import { render } from '@testing-library/react';
import Table from '../components/Table';

const headings = ['ID', 'Name', 'Email'];
const data = [
  { id: 1, name: 'Yusuf Anka', email: 'yusufanka54@gmail.com' },
];

test('renders table correctly', () => {
  const { getByText } = render(<Table headings={headings} data={data} itemsPerPage={10} />);
  
  headings.forEach((heading) => {
    expect(getByText(heading)).toBeInTheDocument();
  });
});
