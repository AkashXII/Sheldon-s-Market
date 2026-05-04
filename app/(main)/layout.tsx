import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Navbar from '../components/Navbar'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}