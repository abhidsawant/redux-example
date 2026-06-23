import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux'; 
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator/>
      </SafeAreaProvider>
    </Provider>
  );
}
