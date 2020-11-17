import SignUp from './SignUp/SignUpPage';
import Link from 'next/link'

export const Index = () => {
  return (
    <p>
      <Link href="./SignUp/SignUpPage">
        <a> SignUp </a>
      </Link>
    </p>
  );
};

export default Index;
