export interface SimpleCard {
  value: number;
  cardColor: string;
  colClasses: ColClasses;
  type: string;
  title: string;
  icon: string;
  viewMoreLink?: string;
}

export interface ColClasses {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}