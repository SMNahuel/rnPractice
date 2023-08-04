import React from 'react'
import { Text, View } from "native-base";
import ButtonDefault from '../../atoms/buttons';
import { NativeBaseProvider } from 'native-base';


const RequestPay = () => {

    return(
        <NativeBaseProvider>
        <View>
            <View>
                <ButtonDefault type={"primary"} text={""}>Back</ButtonDefault>
                {/* Back */}
                <Text>Solicitar pago</Text>
                <ButtonDefault>Select currency</ButtonDefault>
            </View>
            <                                                    View>
                <Text>Mount</Text>
            </View>

            <View>

            </View>
            <View>
                <ButtonDefault type={"primary"} text={""}>Solicitar</ButtonDefault>
                <ButtonDefault type={"primary"} text={""}>Reestablecer</ButtonDefault>
            </View>
        </View>
        </NativeBaseProvider>
    )

}

export default RequestPay;