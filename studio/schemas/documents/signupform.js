import { MdPersonAdd } from "react-icons/md";

export default {
  name: 'signupform',
  type: 'document',
  title: 'SignUp',
  icon: MdPersonAdd,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at',
    },
    {
      name: 'artist',
      type: 'reference',
      to: [
        {
          type: 'artist',
        },
      ],
    },
    {
      name: 'data',
      type: 'object',
      title: 'Data',
      fields: [
        {
          name: 'email',
          type: 'email',
          title: 'Email',
        },
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
      ],
    },
  ],
};
