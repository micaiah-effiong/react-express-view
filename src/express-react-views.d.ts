declare module 'express-react-views' {
  function createEngine(
    engineOptions?: Partial<EngineOptions>
  ): (
    filename: string,
    options: any,
    cb: (err: Error | null, rendered?: string) => void
  ) => any;
}

type EngineOptions = {
  /**
   * @description any string that can be used as a doctype,
   * this will be prepended to your document
   * @default "<!DOCTYPE html>"
   */
  doctype: string;

  /**
   * @description beautify markup before outputting
   * (note, this can affect rendering due to additional whitespace)
   * @default false:
   */
  beautify: boolean;

  /**
   * @description use babel to apply JSX, ESNext transforms to views.
   * Note: if already using babel-register in your project,
   * you should set this to false
   * @default true
   */
  transformViews: boolean;

  /**  any object containing valid Babel options
   * Note: does not merge with defaults
   * @default
   * ``` js
   * {
   *    presets: [
   *      '@babel/preset-react',
   *      [ '@babel/preset-env', {
   *        'targets': {'node': 'current'}}
   *      ]
   *    ]
   * }
   * ```
   */
  babel: Record<string, any>;
};
