import renderer, { act } from 'react-test-renderer';
import { Login } from '../../src/screens';

describe('<Login/>', () => {
  it('should render', () => {
    act(() => {
      let tree = renderer.create(<Login/>).toJSON();
    })
    expect(true).toBeTruthy();
  });
});