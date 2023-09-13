export type Product = {
  title: string;
  slug: string;
  href: string;
  description: string;
  img: string;
  categories: string[];
  data?: {
    learningOutcomes?: string[];
    researchMethods?: { category: string; method: string }[];
  };
};