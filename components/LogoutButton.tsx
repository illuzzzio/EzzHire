'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions/auth.action';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(); // Clear cookies/sessions
    router.push('/sign-in');
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="text-white border-white hover:bg-white hover:text-black transition ml-auto"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
