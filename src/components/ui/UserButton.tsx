// "use client"

// import React from 'react'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
// import UserAvater from './UserAvater'
// import { Button } from './button'
// // import { Session } from 'inspector'
// import { Session } from 'next-auth'
// import { signIn } from 'next-auth/react'

// const UserButton = ({session}: {session: Session | null}) => {
//     if(!session)return(
//       <Button variant={"outline"} onClick={()=> signIn()}>
//         Sign In
//       </Button>
//     )
    
//   return session && (
//     <DropdownMenu>
//   <DropdownMenuTrigger><UserAvater name = {session.user?.name} image="https://github.com/shadcn.png" className={''}/></DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>My Account</DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>Profile</DropdownMenuItem>
//     <DropdownMenuItem>Billing</DropdownMenuItem>
//     <DropdownMenuItem>Team</DropdownMenuItem>
//     <DropdownMenuItem>Subscription</DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>

//   )
// }

// export default UserButton

"use client"

import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import UserAvatar from './UserAvatar'
import UserAvatar from './UserAvater'
import { Button } from './button'
import { Session } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'

const UserButton = ({ session }: { session: Session | null }) => {
  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign In
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session.user?.name ?? null} image={session.user?.image ?? null} className={''} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>signOut()}>Sing Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
