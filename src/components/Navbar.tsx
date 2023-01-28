import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <HStack
      w="full"
      h="100px"
      boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
      position="sticky"
      top="0"
      zIndex={200}
      bg="#645454"
    >
      <Text
        color={'white'}
        textAlign={'center'}
        w="100%"
        fontSize={'45px'}
        fontWeight="600"
      >
        Small URL
      </Text>
    </HStack>
  )
}
