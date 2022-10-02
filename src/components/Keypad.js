// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
			console.log("Entering password...");
		};
		return (
			<div>
				<input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
				/>
			</div>
		);
}

export default Keypad;