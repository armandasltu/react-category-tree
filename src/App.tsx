import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RecursiveTree from 'components/RecursiveTree';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Category tree
        </Typography>
        <RecursiveTree />
      </Box>
    </Container>
  );
}
