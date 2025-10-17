import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string', validation: r => r.required() }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: r => r.required(),
        }),
        defineField({
            name: 'date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
    ],
})
