import React from "react";
import { Counter } from "@boobareth/react-native-ui";

export default {
	title: "Counter",
	component: Counter,
	args: {
		title: "Hello world??!",
	},
};

export const Basic = (args: any) => <Counter {...args} title="BABA" initialCount={20} />;
