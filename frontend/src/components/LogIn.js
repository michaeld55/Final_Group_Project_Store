import React from 'react';
import {
	Container,
	Button,
	Divider,
	Form,
	Grid,
	Segment,
	Image,
} from 'semantic-ui-react';
import Crest from '../assets/icons/Code-Clan-Crest.png';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
	return (
	<Container fluid id="login-container">
		<Segment.Group raised className="login-segment">
			<Segment placeholder>
			<Image src={Crest} alt="Code Clan Crest"  size='medium' centered  />
			</Segment>

			<Segment placeholder color='blue'>
				<Grid columns={2} relaxed="very" stackable>
					<Grid.Column>
						<Form>
							<Form.Input
								icon="user"
								iconPosition="left"
								label="Username"
								placeholder="Username"
							/>
							<Form.Input
								icon="lock"
								iconPosition="left"
								label="Password"
								type="password"
							/>

							<Button content="Login" primary />
						</Form>
					</Grid.Column>

					<Grid.Column verticalAlign="middle">
						<Link to="/sign-up">
							<Button content="Sign up" icon="signup" size="big" />
						</Link>
					</Grid.Column>
				</Grid>

				<Divider vertical />
					
			</Segment>
		</Segment.Group>
	</Container>
	);
};

export default LogIn;