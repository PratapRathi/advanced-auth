import React from 'react';
import { auth, signOut } from '@/auth';

const SettingsPage = async () => {
  const session = await auth();

  return (
    <>
      <div>
        {JSON.stringify(session)}
      </div>
      <form action={async()=>{
        "use server"
        await signOut();
      }}>
        <button className='bg-black text-white' type='submit'>Sign Out</button>
      </form>
    </>
  )
}

export default SettingsPage
