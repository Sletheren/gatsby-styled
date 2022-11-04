// import 'styled-components';

import 'styled-components';
import { Theme } from './styles/theme';

// declare module 'styled-components' {
//   export interface DefaultTheme extends ThemeInterface {}
// }

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}