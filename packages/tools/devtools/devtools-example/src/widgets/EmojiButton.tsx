/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { Button, Tooltip } from "@fluentui/react-components";
import React from "react";

import { type SharedCell } from "@fluidframework/cell";

/**
 * {@link EmojiButton} input props.
 */
export interface EmojiButtonProps {
	emojiCell: SharedCell<boolean>;
}

/**
 * Simple button that displays either a smiley or frowny emoji.
 * Pressing the button toggles between the two.
 *
 * State is shared via the provided `SharedCell`.
 */
export function EmojiButton(props: EmojiButtonProps): React.ReactElement {
	const { emojiCell } = props;

	// undefined => No expression
	// false => frowny
	// true => smiley
	const [isSmiley, setIsSmiley] = React.useState<boolean | undefined>(emojiCell.get());

	React.useEffect(() => {
		function updateState(): void {
			setIsSmiley(emojiCell.get());
		}

		emojiCell.on("valueChanged", updateState);
		emojiCell.on("delete", updateState);

		return (): void => {
			emojiCell.off("valueChanged", updateState);
			emojiCell.off("delete", updateState);
		};
	}, [emojiCell, isSmiley, setIsSmiley]);

	const emoji = isSmiley === undefined ? "😐" : isSmiley ? "🙂" : "☹️";

	function onClick(): void {
		emojiCell.set(isSmiley === undefined ? true : !isSmiley);
	}

	return (
		<Tooltip content="Toggle emoji" relationship="description">
			<Button onClick={onClick} size="large" shape="square" icon={emoji} />
		</Tooltip>
	);
}
