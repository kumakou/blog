import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link href="/">
        <Text fontSize="lg" fontWeight="bold">
          Kuma&apos;s Blog
        </Text>
      </Link>
    </Box>
  )
}
