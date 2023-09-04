import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/apple/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders 3 list items", () => {
  render(<App />);
const listItems=screen.getAllByRole("listitem")
expect(listItems).toHaveLength(3)
});
test("render title",()=>{
  render(<App/>)
  const title=screen.getByTitle("sata")
expect(title).toBeInTheDocument()
})
test("render testID", () => {
  render(<App />);
  const mytestid = screen.getByTestId("sum");
  expect(mytestid).toBeInTheDocument();
});

