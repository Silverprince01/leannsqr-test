import { Layout } from "../../components/Layout/Layout"
import { UserDetailSection } from "./components/UserDetails"
import Loader from "../../components/Loader"
export const UserDetail = () => {
  return (
    <div>
        <Layout>
            <UserDetailSection/>
        </Layout>
    </div>
  )
}

