import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from './src/screens/SplashScreen';
import { Main } from './src/screens/Main';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Qatar-400': require('./src/assets/fonts/GraphikArabicMedium.otf'),
    'Qatar-500': require('./src/assets/fonts/Qatar2022Arabic-Bold.ttf'),
    'Qatar-600': require('./src/assets/fonts/Qatar2022Arabic-Heavy.ttf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return <Main />;

}