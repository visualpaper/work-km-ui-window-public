import { Case2ContextProvider } from "./context"

export default async function Case02Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Case2ContextProvider>{children}</Case2ContextProvider>
}
