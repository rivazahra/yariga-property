import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";

const AgentProfile = () => {
  const { id } = useParams();
  
  const { data, isLoading, isError } = useOne({
    resource: 'users',
    id: id as string
  });


  const myProfile = data?.data ?? [];

  if(isLoading) return <div style={{color: "#11142d"}}>loading may take a short time due to free hosting...</div>
  if(isError) return <div style={{color: "#11142d"}}>error</div>
  
  return (
    <Profile 
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
      />
  )
}

export default AgentProfile