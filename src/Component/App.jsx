import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="header">My Contacts</h1>
      <Card
        name="Michelle"
        img="https://s.abcnews.com/images/Politics/michelle-obama-gty-ps-181227_hpMain_4x3_992.jpg"
        phone="+123 456 789"
        email="michelle@obama.com"
      />
      <Card
        name="Robert"
        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-05-14-at-10-29-26-am-1557844255.png?crop=0.417xw:1.00xh;0.179xw,0&resize=768:*"
        phone="+987 654 321"
        email="de.niro@hollywood.com"
      />
      <Card
        name="Oprah"
        img="https://pbs.twimg.com/profile_images/1123359369570148353/Mh-Rf4Sk.jpg"
        phone="+918 372 574 "
        email="oprah@o.com"
      />
    </div>
  );
}

export default App;
