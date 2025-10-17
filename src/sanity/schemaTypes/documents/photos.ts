import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'photos',
    title: 'Photos',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
            validation: r => r.required(),
        }),
        defineField({ name: 'caption', type: 'string' }),
    ],
})