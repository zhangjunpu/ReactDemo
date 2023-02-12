// custom.d.ts文件，让 ts 支持 module.css
declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}
