// STORE
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// STORE
import { RootState } from '../store';

/**
 * Redux selector based on the app store
 */
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useReduxSelector;
