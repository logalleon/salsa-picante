import * as React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { App } from './App';
import { theme } from './theme';

const Hello = styled.h1(({ theme }) => ({
  color: theme.primary
}))

const StyledHello = styled(Hello)({
  fontWeight: 20
})

window.onload = () => {
  ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('app'));
};