import { MdPersonAdd } from "react-icons/md";

export default {
  name: 'signupform',
  type: 'document',
  title: 'SignUp',
  icon: MdPersonAdd,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'number',
      type: 'number',
      title: 'Number',
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at',
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
