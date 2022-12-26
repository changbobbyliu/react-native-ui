import React from "react";
import { Button } from "react-native";
import { action } from "@storybook/addon-actions";

export default {
	title: "React Native Button",
	component: Button,
	args: {
		title: "Hello world??!",
	},
};

export const Basic = (args: any) => <Button {...args} onPress={action("Basic pressed")} />;
