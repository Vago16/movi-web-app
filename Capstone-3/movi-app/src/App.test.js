import renderer from 'react-test-renderer';
import sum from './mockTestFile/sum';
import Dashboard from './components/Dashboard';
import AddFavourites from './components/AddFavourites';
import Home from './components/Home';
import MovieListHeading from './components/MovieListHeading';
import RemoveFavourites from './components/RemoveFavourites';
import SearchBox from './components/SearchBox';
import Login from './containers/Login';

//makes sure jest is working
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
  expect(sum(-1, 2)).toBe(1);
});

//components render properly
it('renders correctly', () => {
  const tree = renderer
    .create(<AddFavourites />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Dashboard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<MovieListHeading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<RemoveFavourites />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchBox />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//container renders correctly
it('renders correctly', () => {
  const tree = renderer
    .create(<Login />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});





