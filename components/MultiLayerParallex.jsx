import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallex() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
	const backgroundSecond = useTransform(
		scrollYProgress,
		[1, 0],
		["200%", "100%"],
	);

	return (
		<div className="w-full h-screen overflow-hidden relative grid place-items-center">
			<motion.div className="relative top-[-120px]">
				<motion.h1
					className="text-center text-transparent font-syne text-[2rem] lg:text-[6.875rem] font-bold leading- bg-gradient-to-b from-[#f0f0f0] via-[#fff] to-transparent bg-clip-text relative z-10"
					style={{ y: textY }}
				>
					AI Driven{" "}
				</motion.h1>
				<motion.h1
					className="text-center text-transparent font-syne text-[2rem] lg:text-[8.125rem] font-bold bg-gradient-to-b from-[#C8F8FF] to-[#19C2D9] bg-clip-text mb-6 relative z-10"
					style={{ y: textY }}
				>
					Market Place
				</motion.h1>
				<motion.p
					className="text-[#eee] text-center font-medium font-inter text-xl m-4 relative z-10"
					style={{ y: textY }}
				>
					Taking care of your requirements by driving it with AI
				</motion.p>
			</motion.div>

			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(/image.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					y: backgroundSecond,
				}}
			></motion.div>

			<motion.div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(/brandHero.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					opacity: backgroundY,
				}}
			></motion.div>
		</div>
	);
}
