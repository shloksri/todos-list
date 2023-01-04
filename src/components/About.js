import React, { useState } from "react";

export const About = (props) => {
  // const [d, setD] = useState({ props });
  return (
    <div>
      This is an About Component
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam ea praesentium itaque, magni fugit repellat a iste in, explicabo asperiores natus enim quos veritatis. Explicabo modi nemo laudantium laboriosam doloribus natus nulla dolor
        ex?
      </p>
      <hr />
      {/* {d.state.id} */}
      {props.state.id}
    </div>
  );
};
