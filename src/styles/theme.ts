export type Theme = {
  cuteColor: string;
  typography: {
    fontFamily: string;
  }
  bgs: {
    black: string;
  }
}

const theme: Theme = {
  cuteColor: `#8E61FF`,
  bgs: {
    black: '#000'
  },
  typography: {
    fontFamily: 'monospace'
  }
};

export default theme;
