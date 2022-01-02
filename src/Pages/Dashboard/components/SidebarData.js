import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Overview",
		path: "/dashboard/overview",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Users",
				path: "/dashboard/overview/users",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Revenue",
				path: "/dashboard/overview/revenue",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Reports",
		path: "/dashboard/reports",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Reports",
				path: "/dashboard/reports/reports1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Reports 2",
				path: "/dashboard/reports/reports2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Reports 3",
				path: "/dashboard/reports/reports3",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Products",
		path: "/dashboard/products",
		icon: <FaIcons.FaCartPlus />,
	},
	{
		title: "Team",
		path: "/dashboard/team",
		icon: <IoIcons.IoMdPeople />,
	},
	{
		title: "Messages",
		path: "/dashboard/messages",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Message 1",
				path: "/dashboard/messages/message1",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Message 2",
				path: "/dashboard/messages/message2",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Support",
		path: "/dashboard/support",
		icon: <IoIcons.IoMdHelpCircle />,
	},
];
