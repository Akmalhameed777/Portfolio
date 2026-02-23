/**
 * Get the full URL for a Strapi media file
 */
export const getStrapiURL = (path: string = '') => {
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';
  const strapiURL = baseURL.replace('/api', '');
  return `${strapiURL}${path}`;
};

/**
 * Get media URL from Strapi response
 */
export const getStrapiMedia = (media: any) => {
  if (!media) return null;
  
  const { url } = media.data?.attributes || media.attributes || media;
  return getStrapiURL(url);
};

/**
 * Format date to readable string
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generate slug from string
 */
export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

/**
 * Class name utility
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
