import React  from 'react';
import { Grid, Column } from '@carbon/react';

const mygrid_layout = () => {
  return (
    <Grid>
      <Column lg={4}>Span 4 of 16</Column>
      <Column lg={4}>Span 4 of 16</Column>
      <Column lg={4}>Span 4 of 16</Column>
      <Column lg={4}>Span 4 of 16</Column>
    </Grid>
  );
}
