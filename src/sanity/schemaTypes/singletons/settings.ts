import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'siteTitle', type: 'string' }),
        defineField({ name: 'instagram', type: 'url' }),
        defineField({ name: 'youtube', type: 'url' }),
    ],
})