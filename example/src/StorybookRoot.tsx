import {
	getStorybookUI,
	configure,
	addParameters,
	addArgsEnhancer,
	clearDecorators,
} from "@storybook/react-native";
import "./configs/decorators";

export const StorybookRoot = getStorybookUI({});

configure(() => {
	return [
		require("./stories/Button.stories"),
		require("./stories/Counter.stories"),
		require("./stories/Text.stories"),
	];
}, module);
