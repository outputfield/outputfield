export default {
  type: 'object',
  name: 'emailSignUp',
  title: 'email signup',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subheading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'email signup section',
      };
    },
  },
};
