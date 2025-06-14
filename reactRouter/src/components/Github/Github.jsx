import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);
      });
  }, []);

  return (
    <>
    <div className="text-center p-2 bg-slate-700 text-white text-xl m-4">
      Github {data.followers}
      Name of Developer : {data.login}
    </div>
    <img src={data.avatar_url} alt="" />
    </>
  );
};

export default Github;
