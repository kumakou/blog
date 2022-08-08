import { Center } from "@chakra-ui/react"
import Navbar from "./NavBar"

export default function Layout({ children }) {
  return (
    <>
      <header style={{ position: "fixed", width: "100%", zIndex: "2" }}>
        <Navbar />
      </header>
      <main style={{ paddingTop: "150px", paddingBottom: "30px" }}>
        {children}
      </main>
      <footer>
        <Center bg={["gray.500"]} color="white">
          @2022 kumakou
        </Center>
      </footer>
    </>
  )
}
