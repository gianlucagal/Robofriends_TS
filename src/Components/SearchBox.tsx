import * as React from 'react';


const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className= 'pa3 ba b--green bg-lightest-blue'
				type='Search' 
				placeholder = 'search robots' 
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;