import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'show',
    title: 'Show',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string', validation: r => r.required() }),
        defineField({ name: 'date', type: 'datetime', validation: r => r.required() }),
        defineField({ name: 'venue', type: 'string' }),
        defineField({ name: 'city', type: 'string' }),
        defineField({ name: 'ticketsUrl', type: 'url' }),
    ],
})