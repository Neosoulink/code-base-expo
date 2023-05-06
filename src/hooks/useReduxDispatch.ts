import { useDispatch } from 'react-redux';

// STORE
import { AppDispatch } from '../store';

/**
 * Redux dispatcher based on the app store
 */
export default () => useDispatch<AppDispatch>();
