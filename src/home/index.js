/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';

import _ from 'underscore'
import { filter } from 'fuzzaldrin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

import DishesList from '../../components/DishesList'

import dishes from '../../public/dishes'

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.handleInputText = this.handleInputText.bind(this);

		this.state = {
			dishes,
		}

	}

	handleInputText(event) {
		this.setState({ search: event.target.value});
	}

	render () {
		let dishes = filter(this.state.dishes, this.state.search, { key: 'name' });
		dishes = _.sortBy(dishes, 'name');

		return (
			<div>
				<MuiThemeProvider>
					<div>
						<header>
							<Toolbar>
								<TextField
									id="search-input"
									placeholder="Search…"
									value={this.state.search}
									onChange={this.handleInputText}
									fullWidth
								/>
							</Toolbar>
						</header>
						<DishesList dishes={dishes} />
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default HomePage;

/*
import injectTapEventPlugin from 'react-tap-event-plugin';
if (typeof window !== 'undefined') {
	injectTapEventPlugin();
}

import DishesList from '../components/DishesList'

import dishes from '../static/dishes'

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.handleInputText = this.handleInputText.bind(this);

		this.state = {
			dishes,
		}

	}

	handleInputText(event) {
		this.setState({ search: event.target.value});
	}

	render () {
		let dishes = filter(this.state.dishes, this.state.search, { key: 'name' });
		dishes = _.sortBy(dishes, 'name');

		return (
			<div>
				<MuiThemeProvider>
					<div>
						<header>
							<Toolbar>
								<KeyboardedInput
									enabled
									type={this.props.type}
									onChange={this.handleInputText}
									value={this.state.search}
									min={this.props.min}
									max={this.props.max}
									step={this.props.step}
									name={this.props.name}
									className={this.props.className}
									placeholder="Search…"
									defaultKeyboard="kr"
									secondaryKeyboard="us" // optional
								/>
								<TextField
									id="search-input"
									placeholder="Search…"
									value={this.state.search}
									onChange={this.handleInputText}
									fullWidth
								/>
							</Toolbar>
						</header>
						<DishesList dishes={dishes} />
					</div>
				</MuiThemeProvider>
				<Head>
					<title>Meokdapedia</title>
				</Head>
			</div>
		);
	}
}
*/
