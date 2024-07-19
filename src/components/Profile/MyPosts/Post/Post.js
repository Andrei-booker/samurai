import classes from './Post.module.css';

function Post(props) {
	return (
		<div className={classes.item}>
			<img
				alt='user-logo'
				src='https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI=w240-h480-rw'
			/>
			{props.message}
			<div>
				<span>Likes </span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;
