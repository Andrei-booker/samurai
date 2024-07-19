import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

function DialogItem(props) {
	const path = '/dialogs/1' + props.id;
	return (
		<div className={classes.dialog}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	);
}

export default DialogItem;
