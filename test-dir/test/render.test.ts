import React from 'react';
import { render, screen } from '@testing-library/react';
import * as chai from 'chai';
import { Grid, Button, Box, createStyles, makeStyles, Theme, Modal, Fade, Backdrop } from '@material-ui/core';

import Text from '../../client/src/component/Text';

// describe('App', () => {
//     it('renders App component', () => {
//         render(<Button />);
//       // fails
//      // expect(screen.getByText('Search')).toBeInTheDocument();
//     });
// });

describe('App', () => {
    test('renders App component', () => {
      render(<App />);
  
      // fails
      it(screen.getByText('Search')).toBeInTheDocument();
  
      // succeeds
      it(screen.getByText('Search:')).toBeInTheDocument();
  
      // succeeds
      it(screen.getByText(/Search/)).toBeInTheDocument();
    });
  });