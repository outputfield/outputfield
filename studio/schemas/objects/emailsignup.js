export default {
  type: 'object',
  name: 'emailsignup',
  title: 'Email Signup Section',
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
