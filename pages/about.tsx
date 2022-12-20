// import type { ReactElement } from "react"
// import Layout from "../components/layout"
import { useRouter } from "next/router"

export default function About () {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <div>About Page</div>
    </>
  )
}