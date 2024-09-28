import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const Register: React.FC<Props> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onRegister } = useAuth();

    const register = async () => {
        // Check if the fields are filled
        if (!username || !email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const res = await onRegister!(username, email, password);
            if (res) {
                alert("Registered successfully");
                navigation.navigate('Login');
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.image}
        resizeMode="contain" /> 
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address" 
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={register} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
    },
    image: {
        width: 300, 
        height: 300, 
        marginBottom: 20,
    },
    input: {
        width: '60%',
        padding: 8,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 6,
    },
    link: {
        marginTop: 16,
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default Register;
