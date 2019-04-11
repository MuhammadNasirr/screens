import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Avatar, Card, Icon } from 'react-native-elements';

class Details extends Component {
	static navigationOptions = {
		title: 'Sign In',
		headerStyle: {
			backgroundColor: '#000',
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
				<View style={styles.listRow}>
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
					<View style={{ margin: 10 }}>
						<Text style={{ fontSize: 16 }}>53 FEET HATTERAS MOTOR YA..</Text>
						<Text style={{ color: 'grey', fontWeight: 'normal' }}>Grupo Xcaret</Text>
						<Text style={{ color: 'grey', fontWeight: 'normal' }}>Sat. March 30th 2019</Text>
						<Text style={{ color: 'blue', fontWeight: 'normal' }}>View folio</Text>
					</View>
				</View>
				<Card containerStyle={styles.Card}>
					<View style={styles.paymentStatus}>
						<Text>Pending Payment</Text>
						<Icon name="verified-user" color={'#F6D60F'} />
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="dollar" color={"#09BE85"} type="font-awesome" />
						<View style={{width:'87%'}}>
							<View style={{ flexDirection: 'row' }}>
								<Text style={{color:'#000',fontSize:16}}>$ 1.449.00 USD</Text>
								<Text style={styles.badge}>~$ 1,300.00 USD RP</Text>
							</View>
							<View />
							<View style={{ flexDirection: 'row' }}>
								<Text>Payment Dollar</Text>
								<Icon name="flag" />
							</View>

							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<Text style={{color:'#000',fontSize:16}}>$ 1.449.00 USD</Text>
								<Text style={styles.badge}>~$ 1,300.00 USD RP</Text>
							</View>
							<View />
							<View style={{ flexDirection: 'row' }}>
								<Text>Payment Pesos</Text>
								<Icon name="flag" />
							</View>
							<View style={styles.bottomLine} />
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} color={"#09BE85"} name="local-offer" />
						<View style={{width:'87%'}}>
							{/* <View style={{ flexDirection: 'row' }}> */}
							<Text>. 1 Nino (6 - 12) extranjero </Text>
							<Text>. 3 Adulto extranjero </Text>
							<Text>. 2 Adulto naciional (con barra libre) </Text>
							<Text>. 2 Nino (6 - 12) naciiona </Text>
							<Text>Products</Text>
							{/* </View> */}

							<View style={styles.bottomLine} />
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="ios-man" color={"#09BE85"} type="ionicon" />
						<View>
							<Text style={{color:'#000',fontSize:16}}>Israel Auturo</Text>
							<Text>Turist Name </Text>
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="phone" color={"#09BE85"} type="font-awesome" />
						<View>
							<Text style={{color:'#000',fontSize:16}}>(+57 300 3365661)</Text>
							<Text>Phone </Text>
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="location" color={"#09BE85"} type="entypo" />
						<View>
							<Text style={{color:'#000',fontSize:16}}>Hotel Santa Maria</Text>
							<Text>Av. 58 </Text>
							<Text>Pickup Address</Text>
						</View>
						<View style={{marginLeft:20}}>
							<Text style={{color:'#000',fontSize:16}}>English</Text>
							<Text>Langueage </Text>
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="calendar" color={"#09BE85"} type="entypo" />
						<View>
							<Text style={{color:'#000',fontSize:16}}>Saturday, March 30th 2019</Text>
							<Text>Reservation</Text>
						</View>
					</View>
					<View style={styles.ListContainer}>
						<Icon containerStyle={{ width:60 }} name="user" color={"#09BE85"} type="font-awesome" />
						<View>
							<Text style={{color:'#000',fontSize:16}}>edwin.anaya15@gmail.com</Text>
							<Text>Email</Text>
						</View>
					</View>
				</Card>
				<Card containerStyle={[styles.Card,{marginBottom:20,paddingLeft:20}]}>

                    <Text style={{color:'#000',fontSize:16}}>80456s665456123asd65156156asd6w23r</Text>
                    <Text>Confirmation folio</Text>
                    <Text style={{color:'#000',fontSize:16}}>None</Text>
                    <Text>Pay folio</Text>
				</Card>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		// padding: 10
	},
	listRow: {
		flexDirection: 'row',
		// justifyContent: 'center',
		marginBottom: 5
	},
	AvatarContainer: {
		margin: 10
	},
	Card: {
        borderRadius: 3,
        paddingLeft:0
	},
	paymentStatus: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	ListContainer: {
		flexDirection: 'row',
        marginTop: 10,
        width: '100%'
	},
	badge: {
		backgroundColor: 'darkgrey',
		marginLeft: 5,
		borderRadius: 3,
		color: '#fff',
		fontSize: 12,
		paddingHorizontal: 10
	},
	bottomLine: {
		borderBottomColor: '#d3d3d3',
		borderBottomWidth: 1.5,
		marginTop: 5,
		width: '100%'
	}
});
export default Details;
