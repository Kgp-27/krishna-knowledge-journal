// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Kgp-27/krishna-knowledge-journal',
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'src/content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),

        description: fields.text({
          label: 'Description',
          multiline: true,
        }),

        author: fields.text({
          label: 'Author',
          defaultValue: 'Krishna Pal',
        }),

        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Finance', value: 'Finance' },
            { label: 'Economics', value: 'Economics' },
            { label: 'Indian Banking', value: 'Indian Banking' },
            { label: 'Taxation', value: 'Taxation' },
            { label: 'History', value: 'History' },
          ],
          defaultValue: 'Finance',
        }),

        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),

        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'src/assets/articles',
          publicPath: '@assets/articles/',
        }),

        publishDate: fields.date({
          label: 'Publish Date',
        }),

        updatedDate: fields.date({
          label: 'Updated Date',
        }),

        editorialStatus: fields.select({
          label: 'Editorial Status',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Minor Edit', value: 'minor' },
            { label: 'Major Edit', value: 'major' },
            { label: 'Retraction', value: 'retraction' },
          ],
          defaultValue: 'none',
        }),

        updateReason: fields.text({
          label: 'Update / Retraction Reason',
          multiline: true,
        }),

        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),

        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: true,
        }),

        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/assets/articles',
              publicPath: '@assets/articles/',
            },
          },
        }),
      },
    }),
  },
});