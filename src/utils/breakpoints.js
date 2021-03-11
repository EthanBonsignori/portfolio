export const size = {
  mobile: '350px',
  mobileLg: '500px',
  tablet: '768px',
  landscape: '1450px',
  desktop: '1920px',
  desktopLg: '2560px',
};

const breakpoints = {
  mobile: `@media (max-width: ${size.tablet}) and (min-width: 1px)`,
  mobileLg: `@media (max-width: ${size.tablet}) and (min-width: ${size.mobileLg})`,
  landscape: `@media (max-width: ${size.landscape}) and (min-width: ${size.tablet})`,
  desktop: `@media (max-width: ${size.desktop}) and (min-width: ${size.tablet})`,
  desktopLg: `@media (min-width: ${size.desktopLg})`,
};

export default breakpoints;
