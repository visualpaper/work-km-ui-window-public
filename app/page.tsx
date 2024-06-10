"use client"

import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  const onCase1_1WindowOpenClick = (e: any) => {
    window.open("/case1/01", "_blank")
  }

  const onCase1_1RouterPushClick = (e: any) => {
    router.push("/case1/01")
    //window.open("/case1/01", "_self") でも同じ
  }

  return (
    <>
      <Box mt="5vh" mx="auto"> menu </Box>
      <Grid container mt="2vh">
        <Grid item xs={4}>
          <Button variant='outlined' onClick={onCase1_1WindowOpenClick}> window.open </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' onClick={onCase1_1RouterPushClick}> router.push </Button>
        </Grid>
        <Grid item xs={4}>
          aaa
        </Grid>
      </Grid>
    </>
  )
}
