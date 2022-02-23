
import React, { useState, useEffect } from "react"


const TabContent = (props) =>
{
	const [ selected, setSelected ] = useState(0);
	const [ tabs, setTabs ] = useState([]);

	useEffect
	(
		() =>
		{
			if ( !! props.tabs === true )
			{
				const builtTabs = props.tabs.map
				(
					each =>
					{
						console.log( each );
						if ( each === null || each.title === null )
						{
							return null;
						}
						return each;
					}

				).filter(each => each !== null);

				setTabs(builtTabs);
				if ( selected > builtTabs.length )
				{
					setSelected(0);
				}
			}

		}, [props.tabs]
	);

	if ( !! props.tabs === false || tabs.length <= 0 )
	{
		return <div>There are no tabs to draw</div>;
	}

	const buildButtons = () =>
	{
		const buttons = tabs.map
		(
			( eachTab, index ) =>
			{
				let disabled = false;
				let className = "btn";
				if ( index === selected )
				{
					disabled = true;
					className = "btn-selected";
				}

				return (
					<button
						className={[className, "btn"].join(" ")}
						disabled={disabled}
						onClick=
						{
							() =>
							{
								setSelected( index );
							}
						}
					>{eachTab.title}
					</button>
				)
			}
		);
		return buttons;
	}

	return (

		<div className="tab-cont">
			{buildButtons()}
			<div className="view">{tabs[selected] && tabs[selected].content}
			</div>
		</div>
	)
}

export default TabContent;
