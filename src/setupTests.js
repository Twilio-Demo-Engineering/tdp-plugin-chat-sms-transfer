import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-17-updated/build';

require('babel-polyfill');

configure({
  adapter: new Adapter(),
});
