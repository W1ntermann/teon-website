declare module "*.png" {
  const value: { src: string; width: number; height: number };
  export default value;
}

declare module "*.jpg" {
  const value: { src: string; width: number; height: number };
  export default value;
}

declare module "*.jpeg" {
  const value: { src: string; width: number; height: number };
  export default value;
}

declare module "*.svg" {
  const value: { src: string; width: number; height: number };
  export default value;
}

declare module "*.webp" {
  const value: { src: string; width: number; height: number };
  export default value;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
