"use client"

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { Router } from 'next/router';
import { useContext, useEffect, useState } from "react"
import { Case2Context } from "../context"


export default function Case2_2Page() {
  const router = useRouter()
  const [count, setCount] = useState<number>(0)
  const { isSuccess, setIsSuccess } = useContext(Case2Context)

  const handleMenu = () => {
    //window.open("/", "_self")
    router.push("/")
  }

  const handleClose = () => {
    window.close()
  }

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    console.log("catch")
    event.preventDefault()
  }

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [handleBeforeUnload]);

  // if (!isSuccess) {
  //   return (
  //     <Dialog open={true}>
  //       <DialogTitle>不正な画面遷移です</DialogTitle>
  //       <DialogContent>メニュー画面に遷移します。</DialogContent>
  //       <DialogActions>
  //         <Button
  //           onClick={handleMenu}
  //         >
  //           <Typography variant="button">OK</Typography>
  //         </Button>
  //       </DialogActions>
  //     </Dialog>
  //   )
  // }
  return (
    <>
      <Box mt="5vh" mx="auto"> Case2 02 画面 </Box>
      <Button variant='outlined' onClick={() => setCount(count + 1)}>{count}</Button>
      <Stack direction="row" gap="2vw">
        <Button variant='outlined' onClick={handleMenu}>menu 画面へ</Button>
        <Button variant='outlined' onClick={handleClose}>閉じる</Button>
      </Stack>
    </>
  )
}
