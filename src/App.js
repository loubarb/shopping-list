import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 1, isSelected: false},
		{ itemName: 'item 2', quantity: 3, isSelected: true},
		{ itemName: 'item 3', quantity: 2, isSelected: false},
	]);

	const [inputValue, setInputValue] = useState('');

	const handleAddButtonClick = () => {
	{/* creates new object of what user puts in and gets pushed to array */}
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};
	
	{/* copies existing array and adds the new item to th end */}
		const newItems = [...items, newItem];

	{/* pushes new array back into state then clears input box */}
		setItems(newItems);
		setInputValue('');
	}

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{/* map function loops over items in items array & displays JSX for each item */}
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name'>	
							{/* ternary operator to check for isSleceted. if true, display tick with strikethrough; if not, display empty circle */}							
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<span>{item.quantity}</span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: 6</div>
			</div>
		</div>
	);
};

export default App;
