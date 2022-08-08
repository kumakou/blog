import { LinkBox, Image, Box, Heading, Flex } from "@chakra-ui/react"
import NextLink from "next/link"

export default function BlogPost({ title, id, img, updatedAt, content }) {
  if (title.length > 12) {
    title = title.slice(0, 10) + "..."
  }

  return (
    <NextLink href={`/blog/${id}`} passHref>
      <LinkBox
        mt="4px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor={"pointer"}
        maxW="800px"
        maxH="150px"
      >
        <Flex direction="row">
          <Flex mr="4px">
            <Image src={img} alt={"Rear view of modern home with pool"} />
          </Flex>
          <Flex direction={"column"} p="4px">
            <Box width="500px">
              <Heading as="h6" size="md">
                {title}
              </Heading>
              <Box color="gray.500" fontSize="xs">
                {updatedAt.replace(/T.+/, "")}
              </Box>
              <Box fontSize="xs">{content}</Box>
            </Box>
          </Flex>
        </Flex>
      </LinkBox>
    </NextLink>
  )
}
