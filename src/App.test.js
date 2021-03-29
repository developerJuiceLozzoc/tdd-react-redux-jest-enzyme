import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from "enzyme"

test('renders app without problem', () => {
  const app = shallow(<App />)
});
