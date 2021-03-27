import { MdCheckBox } from "react-icons/md";

export default {
  type: 'object',
  name: 'checkbox',
  title: 'checkbox',
  icon: MdCheckBox,

  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'value',
      type: 'boolean'
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
    },
  },
};
