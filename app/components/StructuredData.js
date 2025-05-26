import { personalData } from '../../lib/data';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://ramym.io/#person',
        name: personalData.name,
        url: 'https://ramym.io',
        image: {
          '@type': 'ImageObject',
          url: 'https://ramym.io/images/profile.jpg',
          caption: 'Ramy Mohareb - Senior Solutions Architect',
        },
        description:
          'Award-nominated Solutions Architect with 10+ years designing enterprise ECM and cloud solutions. Innovation Award Finalist 2025.',
        jobTitle: 'Senior Solutions Architect',
        worksFor: {
          '@type': 'Organization',
          name: 'OpenText',
          url: 'https://opentext.com',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        email: personalData.email,
        sameAs: [personalData.linkedin, personalData.gitlab],
        knowsAbout: [
          'Enterprise Architecture',
          'Cloud Computing',
          'Digital Transformation',
          'Content Management',
          'AWS',
          'OpenText',
          'Solutions Architecture',
        ],
        award: [
          'Innovation Award Finalist 2025 - OpenText',
          'CISSP Certified Information Systems Security Professional',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ramym.io/#website',
        url: 'https://ramym.io',
        name: 'RamyM.io - Solutions Architect Portfolio',
        description:
          'Professional portfolio of Ramy Mohareb, Senior Solutions Architect and Innovation Leader',
        publisher: {
          '@id': 'https://ramym.io/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://ramym.io/#service',
        name: 'Enterprise Architecture Consulting',
        provider: {
          '@id': 'https://ramym.io/#person',
        },
        serviceType: [
          'Architecture Review',
          'Digital Transformation',
          'Technical Due Diligence',
          'Cloud Migration Consulting',
          'ECM Implementation',
        ],
        areaServed: ['Middle East', 'Global'],
        url: 'https://ramym.io/#contact',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
