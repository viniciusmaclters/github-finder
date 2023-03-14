import { UserProps } from "../types/user"
import { Search } from "../components/Search"

import { useState } from "react"

export function Home() {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async(userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    
    console.log(data)
  }

  return (
    <div>
      <Search loadUser={loadUser} />  
    </div>
  )
}