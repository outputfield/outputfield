import { MdLabel } from "react-icons/md";

export default {
  type: 'object',
  name: 'field',
  title: 'Field',
  icon: MdLabel,

  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'text',
    },
  },
};
