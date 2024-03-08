import React from "react";
import { useReducer } from "react";
import { arrowRight } from "@/public/index";
import Image from "next/image";

export const Button = ({ button, className, text, rectangleClassName }) => {
	const [state, dispatch] = useReducer(reducer, {
		button: button || "default",
	});

	return (
		<div
			className={`border-transparent inline-flex items-center pl-[16px] pr-[8px] py-[7px] lg:pl-[24px] lg:pr-[16px] lg:py-[11px] relative rounded-[4px] gap-[4px] [border-image:linear-gradient(to_bottom,rgb(199.76,248.38,255),rgb(25,194,217))_1] border border-solid h-[56px] justify-center cursor-pointer ${
				state.button === "hovered"
					? "[background:linear-gradient(180deg,rgb(0.59,156.49,178.06)_0%,rgb(0,138,158)_0.01%,rgb(0,224,255)_51%,rgb(0,138.5,157.66)_100%)]"
					: "[background:linear-gradient(180deg,rgb(0,211.67,240.96)_0%,rgb(0,206.83,235.45)_0.01%,rgb(90.1,234.95,255)_51%,rgb(0,181.8,206.96)_100%)]"
			} ${state.button === "pressed" ? "bg-[#00000033]" : ""} ${
				["default", "hovered"].includes(state.button) ? "overflow-hidden" : ""
			} ${className}`}
			onMouseEnter={() => {
				dispatch("mouse_enter");
			}}
			onMouseLeave={() => {
				dispatch("mouse_leave");
			}}
		>
			<div
				className={`[font-family:'Inter',Helvetica] w-fit tracking-[0] text-[16px] xl:text-[20px] font-medium leading-[normal] whitespace-nowrap relative ${
					state.button === "pressed"
						? "text-neutral-white"
						: "text-neutral-black"
				}`}
			>
				{text}
			</div>
			<div>
				<Image src={arrowRight} alt="icon" />
			</div>
			{["default", "hovered"].includes(state.button) && (
				<div
					className={`w-[16px] rotate-[30.00deg] h-[103px] bg-[#ffffff99] absolute ${
						state.button === "hovered" ? "left-[217px]" : "left-[-20px]"
					} ${
						state.button === "hovered" ? "top-[-3px]" : "top-[-42px]"
					} ${rectangleClassName}`}
				/>
			)}
		</div>
	);
};

function reducer(state, action) {
	switch (action) {
		case "mouse_enter":
			return {
				...state,
				button: "hovered",
			};

		case "mouse_leave":
			return {
				...state,
				button: "default",
			};
	}

	return state;
}
