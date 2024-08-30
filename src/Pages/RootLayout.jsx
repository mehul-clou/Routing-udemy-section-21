import { Outlet } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation"

function RootLayout() {
  return (
    <div>
      <MainNavigation/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
