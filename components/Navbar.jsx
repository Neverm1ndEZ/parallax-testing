"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { echioNav, hamburger, close } from "@/public/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./Button";

const Navbar = () => {
	const navbarItems = [
		{ id: 0, href: "/", tag: "Home" },
		{ id: 1, href: "/brand", tag: "Brands" },
		{ id: 2, href: "/influencer", tag: "Influencers" },
		{ id: 3, href: "/agency", tag: "Agency" },
		{ id: 4, href: "/service", tag: "Services" },
		{ id: 5, href: "/studio", tag: "Studio" },
		{ id: 6, href: "/team", tag: "Team" },
		{ id: 7, href: "/contact", tag: "Contact Us" },
	];

	const [nav, setNav] = useState(false);
	const [activeTag, setActiveTag] = useState("Home");
	const router = useRouter();

	useEffect(() => {
		const currentPath = router.asPath;
		const initialActiveTag =
			navbarItems.find((item) => item.href === currentPath)?.tag || "Home";
		setActiveTag(initialActiveTag);
	});

	const handleTagClick = (tag) => {
		setNav(false);
		setActiveTag(tag);
	};

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="flex justify-between items-center h-8 mx-4 my-6 md:mx-[5rem] p-2 md:mt-[2rem] md:mb-14 ">
			<span className="lg:px-2 md:px-2 py-3 mx-3">
				<Image src={echioNav} alt="logo" className="" />
			</span>
			<div
				className="md:hidden cursor-pointer flex justify-between items-center"
				onClick={toggleNav}
			>
				{nav ? (
					<Image src={close} alt="cross-icon" />
				) : (
					<Image src={hamburger} alt="menu-icon" />
				)}
			</div>
			<ul className="hidden md:flex text-lg font-inter">
				{navbarItems.map((item) => (
					<li
						key={item.id}
						className={`p-2 lg:p-4 cursor-pointer ${
							activeTag === item.tag ? "text-[#5AEBFF]" : "hover:text-[#5AEBFF]"
						}`}
						onClick={() => handleTagClick(item.tag)}
					>
						<Link href={item.href} className="no-word-wrap">
							{item.tag}
						</Link>
					</li>
				))}
			</ul>
			{nav && (
				<div className="md:hidden fixed inset-0 z-50 bg-[#1c1c1c]">
					<ul className="text-white text-center">
						{navbarItems.map((item) => (
							<li
								key={item.id}
								className={`m-8 p-4 cursor-pointer ${
									activeTag === item.tag
										? "text-[#5AEBFF]"
										: "hover:text-[#5AEBFF]"
								}`}
								onClick={() => handleTagClick(item.tag)}
							>
								<Link href={item.href} className="no-word-wrap">
									{item.tag}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
			<Button
				button="default"
				className="hidden md:flex ![border-image:unset] !bg-white !text-black no-word-wrap"
				rectangleClassName="!bg-neutral-white-lite"
				text="Login Now"
			/>
		</div>
	);
};

export default Navbar;
