import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Icon } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Notes = () => {
    return(
        <View style={[styles.noteContainer]}>
            <View style={[styles.noteHeadings]}>
                <Text>Your Notes</Text>
            </View>
            <View style={[styles.FAB]}>
                <TouchableOpacity style={[styles.buttons, {marginLeft:40}]}>
                    <IconRegistry icons={EvaIconsPack}/>
                    <ApplicationProvider {...eva} theme={eva.light}>
                        <Icon name='trash-2-outline' fill='white' style={{width:25, height:50}} />
                    </ApplicationProvider>

                </TouchableOpacity>

            </View>
        </View>
    )
}
export const styles = StyleSheet.create({
    noteContainer:{
        padding: 10,
        opacity:0.9,
    },
    noteHeadings:{
        fontSize:30,
        fontWeight: '700', 
        width: '100%',   
        alignItems: 'center',
    },
    FAB:{
        flexDirection: 'row',

    }
})
export default Notes;