declare module 'css-require' {
  export interface ICssAPI {
    load(cssId: string, callback?: () => void): HTMLElement;
    unload(link: HTMLElement): void;
  }
  declare const cssAPI: ICssAPI;

  export default cssAPI;
}
