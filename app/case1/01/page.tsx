"use client"

import { Box, Button, Stack } from "@mui/material"
import { useRouter } from "next/navigation"


export default function Case1_1Page() {

  const onClose = (e: any) => {
    window.close()
  }

  console.log(window === window.top)
  console.log(window.history.length)
  return (
    <>
      <Box mt="5vh" mx="auto"> Case1_1 </Box>
      <Stack direction="row" gap="2vw">
        <Button variant='outlined' onClick={onClose}>閉じる</Button>
      </Stack>
    </>
  )
}
