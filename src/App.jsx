import "./App.scss"

import Routes from "./pages/Routes"
import { ConfigProvider } from "antd"
import { useAuth } from "./context/Auth"
import ScreenLoader from "@components/Misc/ScreenLoader"

const App = () => {
  const {isAppLoading} = useAuth()  
  return (
     <ConfigProvider theme={{components:{Button:{controlOutlineWidth:0}}}}>
     {!isAppLoading
      ? <Routes />
      : <ScreenLoader />}
     </ConfigProvider>
  )
}

export default App