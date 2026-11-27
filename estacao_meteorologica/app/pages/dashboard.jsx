import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const dadosLinha = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{data: [65, 66, 68, 67, 50, 40]}]
};

const dadosPizza = [
    {
        name: 'Jd Paulista', temp:18, color: '#6171d5'
    },
    {
        name:'Portal dos Nobre', temp:20, color: '#c87474'
    },
    {
        name:'Três Pontes', temp:15, color:'#7324f343'
    },
    {
        name:'Jd Alto da Boa Vista', temp:15, color: '#c58627'
    }
]

const corPadrao = {
    color:`(0 = 1) => rgba(0,0,0, ${0})`
}

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false 
};

export default function Dashboard(){
    return(
        <ScrollView>
            <Text>Estação Meteorológica Sesi</Text>
            <View>
                <Text>Última Medições</Text>
                <Text>12/06/2026 25ºC</Text>
                <Text>11/06/2026 22ºC</Text>
                <Text>12/06/2026 60%</Text>
                <Text>11/06/2026 80%</Text>
            </View>

            <View>
                <Text>Acampanha em tempo Real</Text>
                <LineChart
                    data={dadosLinha}
                    width={width - 32}
                    height={200}
                    chartConfig={chartConfig}
                /> 
                <Text>Bairros de Mirandópolis</Text>
                <PieChart 
                    data={dadosPizza}
                    width={width - 32}
                    height={200}
                    chartConfig={chartConfig}
                    accessor={'temp'}
                    backgroundColor={'transparent'}
                    />
            </View>
        </ScrollView>
    )
}