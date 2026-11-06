import React from 'react';
import {
  Text,
  FluentProvider,
  webLightTheme,
  Card,
} from '@fluentui/react-components';

const App: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Card>
        <Text>
          Hello World!
        </Text>
      </Card>
    </FluentProvider>
  );
};

export default App;