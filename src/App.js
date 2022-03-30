import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {

	const [items, setItems] = useState([
		{ itemName: 'milk', quantity: 1, isSelected: false },
	]);

	const [inputValue, setInputValue] = useState('');

	const [totalItemCount, setTotalItemCount] = useState('1');

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
		calculateTotal();
	}

	const toggleComplete = (index) => {
		const newItems = [...items];
		newItems[index].isSelected = !newItems[index].isSelected;
		setItems(newItems);
	}

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;
		setItems(newItems);
		calculateTotal();
	}

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity--;
		setItems(newItems);
		calculateTotal();
	}

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
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
							<div className='item-name' onClick={() => toggleComplete(index)} >	
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
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span>{item.quantity}</span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
