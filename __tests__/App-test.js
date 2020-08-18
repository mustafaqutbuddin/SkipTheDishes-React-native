/**
 * @format
 */

import 'react-native'
import React from 'react'
import App from '../App'

jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer'


it('renders correctly', async () => {
  renderer.create(<App />);
  
  await act(async () => {})
});
