import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <ul>
        <li><Link href="">Treehouse Logo</Link></li>
        <li><input placeholder="Search Treehouse"></input></li>
        <li><Link href="">Login</Link></li>
        <li><Link href="">Dropdown with Options</Link></li>
      </ul>
    </>
  )
}