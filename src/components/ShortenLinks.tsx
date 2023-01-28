import React, { useRef, useState } from 'react'
import { VStack, Text, Box, Button, Icon } from '@chakra-ui/react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Result } from './ShortenLinkBox'

interface Props {
  results: Result[]
}

export const ShortenLinks = (props: Props) => {
  const [copiedTextId, setCopiedTextId] = useState('')
  const ref = useRef<HTMLParagraphElement | any>()
  const handleTextCopy = (id: string, shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl)
    setCopiedTextId(id)
  }
  return (
    <VStack
      w="fit-content"
      p="10px"
      h="fit-content"
      m="auto"
      mt="10px"
      spacing={'10px'}
    >
      {props.results &&
        props.results.map((ele) => (
          <VStack key={ele._id} w={{ base: '98%', md: '630px' }}>
            <Text
              maxW={'full'}
              fontSize={{ base: '14px', md: '20px' }}
              w={{ base: '96%', md: 'fit-content' }}
              px={{ base: '1px', md: '8px' }}
              textAlign="center"
            >
              {ele.originalUrl}
            </Text>
            <Icon as={AiOutlineArrowDown} />
            <Box
              display={'flex'}
              w="fit-content"
              flexDir={{ base: 'column', md: 'row' }}
              justifyContent={'center'}
              alignItems="center"
              p="5px"
            >
              <Text
                maxW={'full'}
                rounded={'lg'}
                p="5px"
                border="1px solid gray"
                ref={ref}
                fontSize={{ base: '15px', md: '20px' }}
              >
                {ele.shortUrl}
              </Text>
              <Button
                colorScheme={copiedTextId === ele._id ? 'gray' : 'cyan'}
                onClick={() => handleTextCopy(ele._id, ele.shortUrl)}
              >
                {copiedTextId === ele._id ? 'Copied' : 'Copy Url'}
              </Button>
            </Box>
          </VStack>
        ))}
    </VStack>
  )
}
