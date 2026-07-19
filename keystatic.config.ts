import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    articles: collection({
      label: "Articles",

      slugField: "title",

      path: "src/content/articles/*",

      format: {
        contentField: "content",
      },

      schema: {
        title: fields.slug({
          name: {
            label: "Title",
          },
        }),

        description: fields.text({
          label: "Description",
          multiline: true,
        }),

        category: fields.select({
          label: "Category",

          options: [
            {
              label: "Finance",
              value: "Finance",
            },
            {
              label: "Economics",
              value: "Economics",
            },
            {
              label: "Indian Banking",
              value: "Indian Banking",
            },
            {
              label: "Taxation",
              value: "Taxation",
            },
            {
              label: "History",
              value: "History",
            },
          ],

          defaultValue: "Finance",
        }),

        tags: fields.array(
          fields.text({
            label: "Tag",
          }),
          {
            label: "Tags",

            itemLabel: (props) => props.value,
          }
        ),

        publishDate: fields.date({
          label: "Publish Date",
        }),

        updatedDate: fields.date({
          label: "Updated Date",
        }),

        featured: fields.checkbox({
          label: "Featured Article",

          defaultValue: false,
        }),

        draft: fields.checkbox({
          label: "Draft",

          defaultValue: true,
        }),
         content: fields.markdoc({
          label: "Article",

         extension: "md",

          options: {
         image: {
         directory: "src/assets/images",
         publicPath: "/src/assets/images/",
         },
        },
      }),
      },
    }),
  },
});