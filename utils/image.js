const isProd = process.env.NODE_ENV === 'production';

export function getImagePath(path) {
    return isProd ? `/casamento-nextjs${path}` : path;
}