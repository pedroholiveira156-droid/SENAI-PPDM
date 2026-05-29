import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons/Ionicons';

// Páginas
import Login from '../pages/login';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';
import Registro from '../pages/registro';

// Navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator(); // Alterado de 'Draw' para 'Drawer' por padrão de legibilidade

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false, // Ocultado porque o Drawer já vai mostrar o cabeçalho superior
                tabBarActiveTintColor: '#4A90E2', // Azul moderno alinhado com as telas
                tabBarInactiveTintColor: '#A0AEC0',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 1,
                    borderTopColor: '#E2E8F0',
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                },
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';

                    if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return <IonIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name='Atendimentos' component={Atendimentos} />
            <Tab.Screen name='Profissionais' component={Profissionais} />
        </Tab.Navigator>
    );
}

function MenuSuperior() {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#FFF',
                    elevation: 0, // Remove sombra no Android
                    shadowOpacity: 0, // Remove sombra no iOS
                    borderBottomWidth: 1,
                    borderBottomColor: '#E2E8F0',
                },
                headerTintColor: '#1A202C',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                },
                drawerActiveTintColor: '#4A90E2',
                drawerInactiveTintColor: '#4A5568',
                drawerActiveBackgroundColor: '#EBF8FF', // Fundo azul claro para o item selecionado
                drawerStyle: {
                    backgroundColor: '#FFF',
                    width: 240,
                },
                drawerLabelStyle: {
                    fontSize: 15,
                    fontWeight: '500',
                    marginLeft: -10, // Aproxima o texto do ícone
                },
                drawerIcon: ({ color, size, focused }) => {
                    let iconName = 'ellipse-outline';
                    
                    if (route.name === "Início") {
                        iconName = focused ? 'paw' : 'paw-outline';
                    } else if (route.name === 'Atendimentos') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    } else if (route.name === 'Profissionais') {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return <IonIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Drawer.Screen name='Início' component={Tabs} options={{ title: 'Sesi Pet' }} />
            <Drawer.Screen name='Atendimentos' component={Atendimentos} />
            <Drawer.Screen name='Profissionais' component={Profissionais} />
        </Drawer.Navigator>
    );
}

export default function Rotas() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registro' component={Registro} />
            <Stack.Screen name='Principal' component={MenuSuperior} />
        </Stack.Navigator>
    );
}