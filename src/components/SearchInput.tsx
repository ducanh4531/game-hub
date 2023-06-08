import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

import useGameQueryStore from "../store";

const SearchInput = () => {
	// always put initial value as null, if not pass, it will be undefined
	// => cause unexpected issues
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
				}
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
					ref={ref}
					borderRadius={20}
					placeholder="Search games..."
					variant="filled"
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
