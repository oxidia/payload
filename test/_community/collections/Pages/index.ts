import type { CollectionConfig } from 'payload'

export const pagesSlug = 'pages'

export const PagesCollection: CollectionConfig = {
  slug: pagesSlug,
  admin: {
    useAsTitle: 'title',
    enableListViewSelectAPI: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'rows',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
    },
  ],
}
