import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

class Inbox extends Component {
	static navigationOptions = {
		title: 'Sign In',
		headerStyle: {
			backgroundColor: '#fff',
			elevation: 0
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			color: '#000'
		}
	};
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.BadgeRow}>
					<Badge color={'darkred'} name={"All"} number={"13"}/>
					<Badge color={'grey'} name={"Tours"} number={"13"}/>
					<Badge color={'grey'} name={"Reservation"} number={"0"} />
				</View>
				<MessageList />
				<MessageList />
				<MessageList />
				<MessageList />
				<MessageList />
				<MessageList />
			</ScrollView>
		);
	}
}
class Badge extends Component {
	render() {
		return (
			<View style={[styles.BadgeContainer,{width:this.props.name == "Reservation"?"31%":"25%"}]}>
				<View style={[ styles.innerBadge, { backgroundColor: this.props.color } ]}>
					<Text style={{ color: '#fff' }}>{this.props.number}</Text>
				</View>
				<Text style={{ marginLeft:this.props.name == "Reservation"?"4%":"10%" }}>{this.props.name}</Text>
			</View>
		);
	}
}
class MessageList extends Component {
	render() {
		return (
			<View style={styles.MessageListComponent}>
				<View style={styles.AvatarContainer}>
					<Avatar
						rounded
						containerStyle={styles.Avatar}
						size="medium"
						source={{
							uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
						}}
					/>
				</View>
				<View>
					<View style={styles.nameTime}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={{ color: '#000', fontWeight: 'bold', marginRight: 5 }}>Tour</Text>
							<Text style={{ color: 'grey', fontWeight: 'normal', fontSize: 12, marginTop: 2 }}>
								1 people
							</Text>
						</View>
						<Text style={{ color: 'blue', fontWeight: 'normal' }}>Sat. March 30th 2019</Text>
					</View>
					<Text style={{ color: 'black', fontWeight: 'bold' }}>53 feet Hatteras Motor Yac..</Text>
					<Text style={{ color: 'grey', fontWeight: 'normal' }}>Reservation For: Sat. March 30th 2019</Text>
					<Text style={{ color: 'grey', fontWeight: 'normal' }}>Client: Israel</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
	},
	BadgeRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	BadgeContainer: {
		width: '25%',
		margin: 5,
		height: 33,
		borderRadius: 60,
		elevation: 3,
		backgroundColor: '#fff',
		// justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	innerBadge: {
		height: 33,
		justifyContent: 'center',
		alignItems: 'center',
		width: 33,
		borderRadius: 60,
		backgroundColor: 'darkred'
	},
	MessageListComponent: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		height: 100,
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		width: '100%'
	},
	nameTime: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '78%',
		// marginLeft: 10,
		marginTop: 5
	},
	AvatarContainer: {
		width: '20%',
		alignItems: 'center'
	},
	Avatar: {}
});
export default Inbox;
