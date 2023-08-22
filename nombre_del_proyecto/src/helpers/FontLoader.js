import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

const FontLoader = ({ fonts, children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(fonts);
      setFontsLoaded(true);
    };

    loadFonts();
  }, [fonts]);

  if (!fontsLoaded) {
    // Puedes mostrar un componente de carga mientras las fuentes se están cargando
    return <Text>Loading fonts...</Text>;
  }

  // Una vez que las fuentes están cargadas, renderiza los componentes hijos
  return children;
};

export default FontLoader;