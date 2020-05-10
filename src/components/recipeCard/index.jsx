import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import bg from '../../assets/images/bg_1.svg';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		borderRadius: 16,
		margin: 10,
		'& p': {
			opacity: 0,
			position: 'absolute',
			background: 'rgba(0,0,0,.4)',
			color: 'white',
			marginTop: '0',
			transition: 'all 0.5s',
			willChange: 'opacity, transform',
			display: 'flex',
			alignItems: 'start',
			width: '100%',
			height: '100%'
		},
		'&:hover': {
			cursor: 'pointer',
			'& p': {
				opacity: 1
			}
		}
	},
	media: {
		height: '100%',
		paddingTop: '56.25%' // 16:9
	},
	actionIcons: {
		color: '#fff'
	}
}));

export default function RecipeCard({ height, image }) {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root} style={{ height: height }}>
			{/* <CardHeader subheader="Shrimp and Chorizo Paella" /> */}

			<p>
				<IconButton className={classes.actionIcons}>
					<FavoriteIcon />
				</IconButton>
				<IconButton className={classes.actionIcons}>
					<ShareIcon />
				</IconButton>
				<IconButton className={classes.actionIcons} style={{ marginLeft: 'auto' }}>
					<MoreVertIcon />
				</IconButton>
			</p>
			<CardMedia className={classes.media} image={image} title="Paella dish" />
		</Card>
	);
}
