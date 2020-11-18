import { MdFavorite } from "react-icons/md";

export default {

  type: 'object',
  name: 'artist',
  title: 'Artist',
  icon: MdFavorite,

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Email',
    },
  ],
};
