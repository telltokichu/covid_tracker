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
const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
		borderRadius: 16,
		margin: 10
	},
	media: {
		height: '100%',
		paddingTop: '56.25%' // 16:9
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
			<CardHeader subheader="Shrimp and Chorizo Paella" />
			<CardMedia className={classes.media} image={image} title="Paella dish" />
		</Card>
	);
}
