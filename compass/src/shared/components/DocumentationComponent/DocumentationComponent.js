import React from 'react';
import { GenericComponent } from '@kyma-project/generic-documentation';

function DocumentationComponent({ content, type }) {
  return (
    <GenericComponent
      layout="compass-ui"
      sources={[
        {
          source: {
            rawContent: content,
            type,
          },
        },
      ]}
    />
  );
}

export default DocumentationComponent;
