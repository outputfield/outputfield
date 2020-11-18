import { MdModeComment } from "react-icons/md";

export default {
  type: 'object',
  name: 'textsection',
  title: 'Text',
  icon: MdModeComment,

  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      };
    },
  },
};
