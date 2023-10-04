import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import learningOutcome from "./schemas/learningOutcome";
import post from "./schemas/post";
import project from "./schemas/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, author, category, learningOutcome, blockContent],
};
