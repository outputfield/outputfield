export default {
  type: 'object',
  name: 'imageWithTitle',
  title: 'Image',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
