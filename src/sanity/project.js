// schemas/project.js

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(5).max(100)
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required().min(10)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'gitUrl',
            title: 'GitHub URL',
            type: 'url',
            validation: Rule => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https']
            })
        },
        {
            name: 'previewUrl',
            title: 'Preview URL',
            type: 'url',
            validation: Rule => Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https']
            })
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
}