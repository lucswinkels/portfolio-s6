import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug, description, learningOutcomes, mainImage, categories
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body, description
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all projects
export const projectsQuery = groq`*[_type == "project" && defined(slug.current)]{
    _id, title, slug, description, mainImage
  }`;

// Test query
export const postsRefQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug, description, mainImage,
  "categories": *[_type == "category" && references(^._id)].title[]->title,
  "project": *[_type == "project" && references(^._id)].title[]->title,
  "learningOutcomes": *[_type == "learningOutcome" && references(^._id)].title[]->title,
}`;
