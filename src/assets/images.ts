const imageModules = import.meta.glob('./images/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export function img(fileName: string): string {
  const key = `./images/${fileName}`;
  const url = imageModules[key];

  if (!url) {
    return '';
  }

  return url;
}
