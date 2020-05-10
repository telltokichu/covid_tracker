import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import logo from '../../assets/images/bg_1.svg';
import RecipeCard from '../../components/recipeCard';
import Masonry from 'react-masonry-component';
const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		height: '100%'
	}
}));

export default function TitlebarGridList() {
	const classes = useStyles();

	const masonryOptions = {
		transitionDuration: 500
	};
	const [ feed, setfeed ] = useState([]);
	useEffect(() => {
		var i,
			elements = [];
		for (i = 0; i < 50; i++) {
			elements.push(
				{
					height: `${Math.floor(Math.random() * 400) + 200}px`,
					image: `https://picsum.photos/${Math.floor(Math.random() * 400) + 100}/${Math.floor(
						Math.random() * 400
					) + 100}`
				}
				//
			);
		}
		setfeed(elements);
	}, []);
	const renderFeed = (feed) => {
		return feed.map(({ image, height }, index) => {
			return <RecipeCard key={index} height={height} image={image} className="image-element-class" />;
		});
	};
	const imagesLoadedOptions = { background: '.my-bg-image-el' };
	return (
		<Masonry
			className={'my-gallery-class'}
			style={{ marginTop: '93px', minHeight: '100vh', height: '100%' }}
			options={masonryOptions}
			disableImagesLoaded={true}
			updateOnEachImageLoad={true}
			imagesLoadedOptions={imagesLoadedOptions}
		>
			{renderFeed(feed)}
		</Masonry>
	);
}
