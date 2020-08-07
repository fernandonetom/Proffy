import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import GiveClassesBgImages from '../../assets/images/give-classes-background.png';
export default function GiveClasses() {
	const { goBack } = useNavigation();
	function handleNavigateBack() {
		goBack();
	}
	return (
		<View style={styles.container}>
			<ImageBackground
				source={GiveClassesBgImages}
				style={styles.content}
				resizeMode="contain"
			>
				<Text style={styles.title}>Quer ser um Proffy?</Text>
				<Text style={styles.description}>
					Para começar, você precisa se cadastrar como professor em nossa
					plataforma web.
				</Text>
			</ImageBackground>
			<RectButton onPress={handleNavigateBack} style={styles.okButton}>
				<Text style={styles.okTextButton}>Tudo bem</Text>
			</RectButton>
		</View>
	);
}
