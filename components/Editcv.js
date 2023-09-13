import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Editcv = ({onPress, acatext, proftext, relonevalue, reltwovalue, relthreevalue, relonetext, reltwotext, relthreetext, reftext, setAcatext, setProftext, setRelonevalue, setReltwovalue, setRelthreevalue, setRelonetext, setReltwotext, setRelthreetext, setReftext}) => {









  return (
      <SafeAreaView style={styles.cont}>
       <Ionicons name="arrow-back" style={styles.webviewicon } onPress={onPress}/>

      <ScrollView
       style={styles.modal }>
       
        <View style={styles.modalView }>








<View style={styles.modalFourthrow }>
<View style={styles.modalThirdrow }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>FULL NAME</Text>
            <Text style={styles.modalFourthtext }>Mong Israel Solomon</Text>
            </View>
</View>
<View>              
            <Text style={styles.modalThirdtext }>SLACK USERNAME</Text>
            <Text style={styles.modalFourthtext }>Mongopark</Text>
            </View>
            </View>




<View style={styles.modalFirstrow }>
</View>



<View style={[styles.modalFourthrow,{paddingBottom: 10, }] }>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>GITHUB HANDLE</Text>          
</View>
            <Pressable style={[styles.modalThirdrow, {paddingBottom: 20, }]}><Text style={styles.modalFourthtext }>https://github.com/Mongopark</Text></Pressable>
            </View>

            <View style={ styles.modalFourthrow }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>INSTRUCTION</Text>
            <Text style={styles.instruction }>Fill the form below to edit the Mong Israel Curriculum Vitae by Editing the text fields and when you are done, click on "Save and Exit" or simply go back for your changes to take effect</Text>
</View>
             </View>





        <View style={styles.modalFirstrow }>
</View>
<View style={styles.cvView }><Text style={styles.cvTexter }>Edit Curriculum Vitae</Text>
<TouchableHighlight style={styles.modalThirdbutton } onPress={onPress}>
              <Text style={styles.modalThirdbuttontext } >Save and Exit</Text>
              </TouchableHighlight>
</View>
<View style={styles.modalFirstrow }>
</View>




<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>ACADEMIC & PROFESSIONAL QUALIFICATION</Text>
<TextInput
        editable
        multiline
        numberOfLines={11}
        maxLength={590}
        onChangeText={acatext => setAcatext(acatext)}
        value={acatext}
        style={styles.modalFirsttext }
      />



            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>PROFESSIONAL SKILLS</Text>            
            
</View>

<TextInput
        editable
        multiline
        numberOfLines={15}
        maxLength={690}
        onChangeText={proftext => setProftext(proftext)}
        value={proftext}
        style={styles.modalFirsttext }
      />
            </View>
        </View>



        <View style={styles.modalFirstrow }>
</View>





<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>RELEVANT WORK EXPERIENCES</Text>
            <Text style={styles.modalThirdtextcomp }>input company name:</Text>
            <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={50}
        onChangeText={relonevalue => setRelonevalue(relonevalue)}
        value={relonevalue}
        style={styles.cvText}
      />
<Text style={styles.modalThirdtext }>input description and role:</Text>
<TextInput
        editable
        multiline
        numberOfLines={11}
        maxLength={590}
        onChangeText={relonetext => setRelonetext(relonetext)}
        value={relonetext}
        style={styles.modalFirsttext }
      />
      <Text style={styles.modalThirdtextcomp }>input company name</Text>
<TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={50}
        onChangeText={reltwovalue => setReltwovalue(reltwovalue)}
        value={reltwovalue}
        style={styles.cvText}
      />
      <Text style={styles.modalThirdtext }>input description and role</Text>
<TextInput
        editable
        multiline
        numberOfLines={11}
        maxLength={590}
        onChangeText={reltwotext => setReltwotext(reltwotext)}
        value={reltwotext}
        style={styles.modalFirsttext }
      />
      <Text style={styles.modalThirdtextcomp }>input company name:</Text>
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={50}
        onChangeText={relthreevalue => setRelthreevalue(relthreevalue)}
        value={relthreevalue}
        style={styles.cvText}
      />
      <Text style={styles.modalThirdtext }>input description and role:</Text>
            <TextInput
        editable
        multiline
        numberOfLines={8}
        maxLength={590}
        onChangeText={relthreetext => setRelthreetext(relthreetext)}
        value={relthreetext}
        style={styles.modalFirsttext }
      />
            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>REFERENCES:</Text>
</View>
<Text style={styles.cvTexter}>AVAILABLE UPON REQUEST</Text>
<TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={500}
        onChangeText={reftext => setReftext(reftext)}
        value={reftext}
        style={styles.modalFirsttext }
      />
            </View>
        </View>








        </View>

        </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex:1,
  },modal: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: '#36454f',
  },
  modalView: {
    flex: 3,
    borderRadius: 20,
  },
  modalHead: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    backgroundColor: '#708090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingpng: {
    width: 145,
    height: 145,
    borderRadius: 80,
  },
  modalFirstrow: {
    backgroundColor: '#36454f',
    height: 20,
    paddingLeft: 20,
  },
  modalThirdrow: {
    borderBottomColor: 'white',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  modalFourthrow: {
    backgroundColor: '#708090',
  },
    modalTextwrapper: {
      paddingBottom: 10,
    },
    modalFirsttext: {
      fontSize: 13, 
      paddingHorizontal: 18,
      color: 'white',
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold',
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 4,
      shadowColor: 'blue',
      shadowOffset: {width: 2, height: 3},
      shadowOpacity: 0.9,
      shadowRadius: 6,
      elevation: 25,
    },
    modalThirdtext: {
      fontSize: 15,
      textDecorationLine: 'underline',
      fontStyle: 'italic',
      fontWeight: 'bold',
      paddingHorizontal: 18,
      color: 'black',
    },
    modalThirdtextcomp: {
      fontWeight: 'bold',
      paddingTop: 50,
      fontSize: 15, 
      paddingHorizontal: 18,
      color: 'black',
    },
    modalThirdbutton: {
      marginTop: 3,
      borderRadius: 50,
      backgroundColor: '#cccccc',
      fontSize: 24, 
      fontWeight: 'bold',
      marginHorizontal: 20,
    },
    modalThirdbuttontext: {
      paddingHorizontal: 14,
      fontSize: 14, 
      fontWeight: 'bold',
      color: '#36454f',
    },
    modalFourthtext: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingLeft: 18, 
      color: 'white',
    },
    modalIconwrapper: {
      flexDirection: 'row',
    },
    switchcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#36454f',
    },
    switchlabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    webviewview: {
      width: '100%',
      height: '120%',
      backgroundColor: '#36454f',
      },
        webviewicon: {
        paddingHorizontal: 15,
        fontSize: 24,
        color: 'white',
        backgroundColor: '#36454f',
        },
        cvView: { 
          backgroundColor: '#36455e',
          padding: 10,
          alignItems: 'center',
          },
          cvText: {
            fontWeight: 'bold',
            color: 'black',
            backgroundColor: 'white',
            textTransform: 'uppercase',
            borderRadius: 10,
            marginHorizontal: 20,
            paddingLeft: 10,
            },
            cvTexter: {
                fontWeight: 'bold',
                color: 'white',
                },
                instruction: {
                  fontSize: 13, 
                  paddingHorizontal: 18,
                  color: 'white',
                },
      })




export default Editcv;