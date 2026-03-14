/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/Text-to-pdf',  destination: '/text-to-pdf',  permanent: true },
      { source: '/pdf-to-Text',  destination: '/pdf-to-text',  permanent: true },
      { source: '/Text-to-word', destination: '/text-to-word', permanent: true },
      { source: '/word-to-Text', destination: '/word-to-text', permanent: true },
      { source: '/pptx-to-Text', destination: '/pptx-to-text', permanent: true },
      { source: '/Text-to-pptx', destination: '/text-to-pptx', permanent: true },
    ];
  },
};

export default nextConfig;