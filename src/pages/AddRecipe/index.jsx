import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useForm, useFieldArray } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
	dashboard: {
		// height: '100vh'
	},
	appbar: {
		padding: 0
	},
	grow: {
		flexGrow: 1
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	}
}));
const AddRecipe = () => {
	const classes = useStyles();
	const { register, control, handleSubmit } = useForm(
		{
			// defaultValues: {}; you can populate the fields by this attribute
		}
	);
	const { fields, append, prepend, remove } = useFieldArray({
		control,
		name: 'test'
	});
	return (
		<Grid className={classes.dashboard}>
			<form onSubmit={handleSubmit((data) => console.log('data', data))}>
				<ul>
					{fields.map((item, index) => (
						<li key={item.id}>
							<input name={`test[${index}].name`} defaultValue={item.name} ref={register()} />
							<button onClick={() => remove(index)}>Delete</button>
						</li>
					))}
				</ul>
				<section>
					<button type="button" onClick={() => append({ name: 'test' })}>
						append
					</button>
					<button type="button" onClick={() => prepend({ name: 'test1' })}>
						prepend
					</button>
				</section>
			</form>
		</Grid>
	);
};

export default AddRecipe;
