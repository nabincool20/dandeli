import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import styles from 'dan-components/Tables/tableStyle-jss';
import dbs from '../../../../db.json';
import EditForm from '../Forms/EditForm';
import AddForm from '../Forms/AddForm';

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
// 	id += 1;
// 	return {
// 		id,
// 		name,
// 		calories,
// 		fat,
// 		carbs,
// 		protein,
// 	};
// }

function StrippedTable(props) {
	const { classes } = props;
	function handleRemove(id) {
		const fdata = dbs.filter((item) => item.id !== id);
		console.log(fdata);
	}

	return (
		<Fragment>
			<span>
				<Button color='secondary'>
					<Link to='/app/addform'>Add</Link>
				</Button>
			</span>
			<Toolbar className={classes.toolbar}>
				<div className={classes.title}>
					<Typography className={classes.title} variant='h6'>
						Nutrition
					</Typography>
				</div>
			</Toolbar>
			<div className={classes.rootTable}>
				<Table className={classNames(classes.table, classes.stripped)}>
					<TableHead>
						<TableRow>
							<TableCell padding='default'>Dessert (100g serving)</TableCell>
							<TableCell align='right'>Calories</TableCell>
							<TableCell align='right'>Fat (g)</TableCell>
							<TableCell align='right'>Carbs (g)</TableCell>
							<TableCell align='right'>Protein (g)</TableCell>
							<TableCell align='center'>Action </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{dbs.map((n) => [
							<TableRow key={n.id}>
								<TableCell padding='default'>{n.name}</TableCell>
								<TableCell align='right'>{n.calories}</TableCell>
								<TableCell align='right'>{n.fat}</TableCell>
								<TableCell align='right'>{n.carbs}</TableCell>
								<TableCell align='right'>{n.protein}</TableCell>
								<TableCell align='center'>
									<Button color='secondary'>
										<Link to='/editform'>Edit</Link>
									</Button>
									|
									<Button
										color='secondary'
										value={n.id}
										onClick={() => handleRemove(n.id)}
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>,
						])}
					</TableBody>
				</Table>
			</div>
		</Fragment>
	);
}

StrippedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(StrippedTable);
