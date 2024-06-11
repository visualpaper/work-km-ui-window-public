"use client"

import { Box, Button, Stack } from "@mui/material"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { Case2Context } from "../context"


export default function Case1_1Page() {
  const router = useRouter()
  const { setIsSuccess } = useContext(Case2Context)

  // useEffect(() => {
  //   setIsSuccess(false)
  // }, [])

  const handleNext = () => {
    setIsSuccess(true)

    router.push("/case2/02")
    //window.open("/case2/02", "_self")
  }

  return (
    <>
      <Box mt="5vh" mx="auto"> Case2 01 画面 </Box>
      <Stack direction="row" gap="2vw">
        <Button variant='outlined' onClick={handleNext}>02 画面へ</Button>
      </Stack>
    </>
  )
}
