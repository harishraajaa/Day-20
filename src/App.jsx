import React from 'react'
import Card from './Card'
function App() {

  let mydata = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      isUser:true,
      storage:"5GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:false,
      support:"Dedicated Phone Support",
      isSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB Storage",
      isStorage:true,
      public:"Unlimited Public Projects",
      isPublic:true,
      community:"Community Access",
      isCommunity:true,
      private:"Unlimited Private Projects",
      isPrivate:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomains",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
  ]

  return <>
  <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
        mydata.map((e)=>{
          return <Card data={e}/>
        })
      }
    </div>
  </div>
</section>
  </>
}

export default App
