export const SITE_URL = "https://sagardash.me";
export const PERSON_ID = `${SITE_URL}/#sagar-dash`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const PERSON_NAME = "Sagar Dash";
export const SITE_NAME = "Sagar Dash Portfolio";
export const JOB_TITLE = "Go Backend Architect";

export const NAME_VARIANTS = [
  "Sagor Dash",
  "Sagar Das",
  "Sager Dash",
  "Sagar Dhash",
  "Sagar Dhas",
  "Sagar290",
];

export const PORTFOLIO_NAME_VARIANTS = NAME_VARIANTS.filter(
  (name) => name !== "Sagar290"
).map((name) => `${name} Portfolio`);

export const SAME_AS_LINKS = [
  "https://github.com/sagar290",
  "https://www.linkedin.com/in/sagardash1/",
  "https://medium.com/@sagar-dash290",
  "https://x.com/Sagar290",
];

export const KNOWN_TOPICS = [
  "Go",
  "Golang",
  "Backend Engineering",
  "Distributed Systems",
  "Microservices",
  "API Architecture",
  "Kubernetes",
  "Redis",
  "RabbitMQ",
  "Cloud Architecture",
  "High-Availability Systems",
];

export const DEFAULT_SEO = {
  title: `${PERSON_NAME} - ${JOB_TITLE}`,
  description:
    "Sagar Dash is a Go backend architect and distributed systems engineer building APIs, microservices, high-availability systems, and cloud architecture.",
  keywords: [
    PERSON_NAME,
    ...NAME_VARIANTS.slice(0, -1),
    "Go engineer",
    "Golang engineer",
    "backend architect",
    "distributed systems engineer",
    "microservices engineer",
    "Bangladesh software engineer",
  ].join(", "),
  image: `${SITE_URL}/og-image.png`,
};

export const HOME_SEO = {
  title: `${PERSON_NAME} | Go Backend Architect and Distributed Systems Engineer`,
  description:
    "Portfolio of Sagar Dash, a Go backend architect and distributed systems engineer experienced with Golang, microservices, APIs, Kubernetes, Redis, RabbitMQ, and cloud architecture.",
  keywords: [
    PERSON_NAME,
    ...NAME_VARIANTS,
    "Go backend engineer",
    "Golang backend engineer",
    "best Go engineer",
    "good Golang engineer",
    "backend architect Bangladesh",
    "distributed systems engineer",
    "microservices engineer",
  ].join(", "),
};

export function assetUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPersonSchema(
  description =
    "Sagar Dash is a Go backend architect with 8+ years of experience designing and scaling distributed systems, microservices, APIs, and cloud-native services."
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    alternateName: NAME_VARIANTS,
    url: SITE_URL,
    image: assetUrl("/avatar.png"),
    sameAs: SAME_AS_LINKS,
    jobTitle: JOB_TITLE,
    worksFor: {
      "@type": "Organization",
      name: "Pathao",
    },
    knowsAbout: KNOWN_TOPICS,
    description,
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    alternateName: PORTFOLIO_NAME_VARIANTS,
    url: SITE_URL,
    inLanguage: "en",
    about: {
      "@id": PERSON_ID,
    },
  };
}

export function createDefaultStructuredData() {
  return [createPersonSchema(), createWebsiteSchema()];
}

export function createProfilePageSchema(title: string, description: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: assetUrl("/"),
      name: title,
      description,
      inLanguage: "en",
      mainEntity: createPersonSchema(
        "Sagar Dash is a Go backend architect with 8+ years of experience building and scaling distributed systems, APIs, microservices, and cloud-native services."
      ),
    },
    createWebsiteSchema(),
  ];
}
