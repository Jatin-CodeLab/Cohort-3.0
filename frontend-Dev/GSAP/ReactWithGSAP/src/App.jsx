import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
	const [cricle, setCricle] = useState(0);
  const random = gsap.utils.random(-500, 500, 5);
  useGSAP(() => {
    gsap.to('.box', {
      x: cricle,
      duration:0.5
    })
  },[cricle])

	return (
		<main>
			<button
				onClick={() => {
					setCricle(random);
				}}
			>
				Animate
			</button>
			<div className="box"></div>
		</main>
	);
}

export default App;
