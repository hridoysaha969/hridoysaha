"use client";

import { useEffect, useState } from "react";

function DashMessage() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchMessage = async () => {
      let response = await fetch("/api/message/");
      response = await response.json();

      if (response.success) {
        setMessage(response.result);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="">
      {message.length > 0
        ? message.map((item, ind) => (
            <div key={ind}>
              <h4>{item.fullName}</h4>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
}

export default DashMessage;
