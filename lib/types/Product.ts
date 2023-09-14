export type Product = {
  project: {
    slug: string;
    title: string;
  };
  title: string;
  slug: string;
  href: string;
  description: string;
  img: string;
  categories: string[];
  data?: {
    learningOutcomes?: { title: string; slug: string }[];
    researchMethods?: { category: string; method: string }[];
  };
};
