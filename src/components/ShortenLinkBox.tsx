import React, { FormEvent, useState } from 'react'
import {
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react'
import axios, { AxiosResponse } from 'axios'

export interface Result {
  _id: string
  originalUrl: string
  shortUrl: string
  urlId: string
}

interface Props {
  updateResults: (result: Result) => void
}

export const ShortenLinkBox = (props: Props) => {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [urlInput, setUrlInput] = useState('')
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (urlInput === '') {
      return toast({
        position: 'top',
        title: 'Input Error',
        description: 'Please fill input',
        isClosable: true,
        duration: 4000,
        status: 'warning',
      })
    }
    try {
      setLoading(true)
      const res: AxiosResponse = await axios.post('/api/shortener', {
        url: urlInput,
      })
      props.updateResults(res.data)
      setLoading(false)
      setUrlInput('')
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <VStack w="full" h="fit" mt={'20px'}>
      <VStack boxShadow={'lg'} p={{ base: '5px', md: '40px' }} spacing={'20px'}>
        <Text
          w={{ base: 'fit-content', md: '450px' }}
          m="auto"
          textAlign={'center'}
          fontSize={{ base: '26px', md: '40px' }}
          fontWeight="700"
        >
          Paste Url to shorten it
        </Text>
        <FormControl
          as="form"
          display={'flex'}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent="center"
          alignItems={'center'}
          w="full"
          onSubmit={handleSubmit}
        >
          <Input
            type={'url'}
            value={urlInput}
            onChange={({ target: { value } }) => setUrlInput(value)}
            h={'40px'}
            w={{ base: '93%', md: '450px' }}
            p="5px"
          />
          <Button
            border="none"
            colorScheme={'cyan'}
            color="white"
            h={'40px'}
            p="20px"
            type="submit"
            isLoading={loading}
          >
            Shorten Url
          </Button>
        </FormControl>
        <Text
          w={{ base: 'fit-content', md: '440px' }}
          m="auto"
          textAlign={'center'}
        >
          It is a free tool to shorten a URL or reduce a link Use our URL
          Shortener to create a shortened link making it easy to remember
        </Text>
      </VStack>
    </VStack>
  )
}
