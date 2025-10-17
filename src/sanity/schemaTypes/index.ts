import { type SchemaTypeDefinition } from 'sanity'
import news from './documents/news'
import shows from './documents/show'
import photo from './documents/photos'
import settings from './singletons/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
      news,
      shows,
      photo,
      settings,
  ],
}
