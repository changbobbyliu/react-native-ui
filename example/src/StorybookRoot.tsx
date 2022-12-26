import { getStorybookUI, configure, addParameters, addArgsEnhancer } from "@storybook/react-native";
import "./configs/decorators";
import "./configs/addons";

export const StorybookRoot = getStorybookUI({});

configure(() => {
	return [
		require("./stories/Button.stories"),
		require("./stories/Counter.stories"),
		require("./stories/Text.stories"),
	];
}, module);
