"use client"

import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  const onCase1_1WindowOpenClick = (e: any) => {
    window.open("/case1/01", "_blank")
  }

  const onCase1_1RouterPushClick = (e: any) => {
    //router.push("/case1/01")
    window.history.pushState(null, "", `/case1/01`)
    //window.open("/case1/01", "_self")
  }

  const onCase2_1Click = (e: any) => {
    window.open("/case2/01", "_blank")
    // router.push("/case2/01")
  }

  const onCase2_2Click = (e: any) => {
    window.open("/case2/02", "_blank")
    // router.push("/case2/02")
  }
  return (
    <>
      <Box mt="5vh" mx="auto"> menu </Box>
      <Grid container mt="2vh">
        <Grid item xs={6}>
          <Button variant='outlined' onClick={onCase1_1WindowOpenClick}> window.open </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant='outlined' onClick={onCase1_1RouterPushClick}> router.push </Button>
        </Grid>
        <Grid item xs={6} mt="2vh">
          <Button variant='outlined' onClick={onCase2_1Click}> 画面遷移制御検証 01 </Button>
        </Grid>
        <Grid item xs={6} mt="2vh">
          <Button variant='outlined' onClick={onCase2_2Click}> 画面遷移制御検証 02 </Button>
        </Grid>
      </Grid>
    </>
  )
}
