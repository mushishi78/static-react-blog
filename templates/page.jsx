import React from 'react';

export default ({ page }) =>
  <main>
    <h1>{page.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: page.__content }} />
  </main>
