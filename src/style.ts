/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface BreakPointObject {
  se: number;
  x: number;
  mini: number;
  sp: number;
  tab: number;
  pc: number;
}

export const BREAK_POINTS: BreakPointObject = {
  se: 360,
  x: 375,
  mini: 414,
  sp: 640,
  tab: 768,
  pc: 960,
};
export const max = (
  maxsize: keyof BreakPointObject,
  minsize?: keyof BreakPointObject,
) =>
  minsize
    ? `@media (max-width: ${BREAK_POINTS[maxsize] - 1}px) and (min-width: ${
        BREAK_POINTS[minsize]
      }px)`
    : `@media (max-width: ${BREAK_POINTS[maxsize] - 1}px)`;
export const min = (
  minsize: keyof BreakPointObject,
  maxsize?: keyof BreakPointObject,
) =>
  maxsize
    ? `@media (min-width: ${BREAK_POINTS[minsize]}px) and (max-width: ${
        BREAK_POINTS[maxsize] - 1
      }px)`
    : `@media (min-width: ${BREAK_POINTS[minsize]}px)`;
export const toVw = (number: number) =>
  `font-size:${Math.round((number / 375) * 1000) / 10}vw;`;

type ValueOf<T> = T[keyof T];
export const replaceToVW = (
  textStyle: ValueOf<TEXT_STYLE> | ValueOf<ROBOTO>,
) => {
  const fontSize = String(textStyle)
    .split('\n')
    .filter(str => str.indexOf('font-size') !== -1)[0]
    .match(/[0-9]{1,3}/);
  const vwNum = Math.round((Number(fontSize) / 375) * 1000) / 10;
  const newFontSize = `font-size:${vwNum}vw`;
  const result = String(textStyle).replace(
    /font-size:[0-9]{1,3}px/,
    newFontSize,
  );
  return result;
};

export const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const bounceEaseInOut = 'cubic-bezier(0.8, -1.48, 0.32, 2.06)';

export enum COLORS {
  lightYellow = '#FDE77D',
  yellow = '#FFDE48',
  ornage = '#FCC800',
  green = '#559E37',
  lightGreen = '#DFEDCA',
  red = '#F22222',
  pink = '#FDDDDD',
  base = '#F2F2F2',
  black = '#36352F',
  gray = '#808080',
  border = '#EDEDED',
  input = '#acacac',
  white = '#ffffff',
  background = '#FFFCF2',
}

export const BGCOtokuBody = [
  '#F5DA73',
  '#FFAAAA',
  '#FFC1A0',
  '#FFB4C5',
  '#C9E07D',
  '#D4A6D6',
  '#B8B8ED',
  '#90DBE5',
  '#EDD552',
  '#FDC324',
  '#FFAB5A',
  '#50BE91',
];

export const BGCOtokuBottom = [
  '#CB4949',
  '#865050',
  '#D86881',
  '#6DA21A',
  '#18A287',
  '#7673BE',
  '#B167B4',
  '#E86894',
  '#445993',
  '#B95395',
  '#B94568',
  '#C34141',
];

export enum TEXT_STYLE {
  h0 = `
		font-size:24px;
		font-weight:600;
		`,
  h1 = `
		font-size:20px;
		font-weight:600;
		`,
  button = `
		font-size:16px;
		font-weight:600;
		`,
  h2 = `
		font-size:14px;
		font-weight:600;
		`,
  titleBar = `
		font-size:15px;
		font-weight:600;
		`,
  textBig = `
		font-size:14px;
		font-weight:400;
		`,
  textMiddleBold = `
		font-size:12px;
		font-weight:600;
		`,
  textMiddle = `
		font-size:12px;
		font-weight:400;
		`,
  textSmollBold = `
		font-size:10px;
		font-weight:600;
		`,
  textSmollRegular = `
		font-size:10px;
		font-weight:400;
    `,
  indent = `
    text-indent: -1em;
    padding-left: 1em;
  `,
}

export enum ROBOTO {
  fontFamily = `
		font-family: 'Roboto', sans-serif;
	`,
  size00 = `
		font-family: 'Roboto', sans-serif;
		font-size:48px;
		font-weight:500;
	`,
  size01 = `
		font-family: 'Roboto', sans-serif;
		font-size:42px;
		font-weight:500;
	`,
  size02 = `
		font-family: 'Roboto', sans-serif;
		font-size:32px;
		font-weight:500;
	`,
  size03M = `
		font-family: 'Roboto', sans-serif;
		font-size:24px;
		font-weight:500;
	`,
  size03N = `
		font-family: 'Roboto', sans-serif;
		font-size:24px;
		font-weight:400;
	`,
  size04 = `
		font-family: 'Roboto', sans-serif;
		font-size:20px;
		font-weight:400;
	`,
  size05M = `
		font-family: 'Roboto', sans-serif;
		font-size:14px;
		font-weight:500;
	`,
  size05N = `
		font-family: 'Roboto', sans-serif;
		font-size:14px;
		font-weight:400;
	`,
}

export const LAYOUTS = {
  outer: `
		margin:0 auto;
		`,
  content: `
		max-width:1060px;
		margin:0 auto;
		${min('pc')}{
			padding-left:50px;
			padding-right:50px;
		}
		${max('pc', 'sp')}{
      width:640px;
      padding-left:0;
      padding-right:0;
		}
		${max('sp')}{
			padding-left:0;
			padding-right:0;
		}
  `,
  box: `
  background-color: ${COLORS.white};
  margin-top: 12px;
  ${min('sp')} {
    padding: 24px;
    border-radius: 8px;
    border: 1px solid ${COLORS.border};
  }
  ${max('sp')}{
    padding: 16px 0 16px 16px;
  }
  `,
  block: `
  margin-top: 12px;
  padding:0 16px;
  ${min('sp')}{
    padding:0 24px;
  }
  `,
};
