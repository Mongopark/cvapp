import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, TouchableHighlight, ScrollView } from 'react-native';
import Edit from './components/Editcv';

const App = () => {
  const [thewebview, setThewebview] = useState(false);
  const [acatext, setAcatext] =useState(`•2019 B.Sc. in Computer Science  Graphical Art(Funai) \n•2016 Certificate in Computer Fundamentals & Programming Languages(Figma, SoloLearn, Google Code, W3School, NIIT) \n•2016 Animation and visual demonstration certification: use of adobe photoshop, filmora, Microsoft PowerPoint, adobe premiere, Microsoft visual studio, blender, Animaker, adobe animate etc. (Richystar) \n•2015 Advanced graphics designing Certificate(Naboth) \n•2014 Diploma in Desktop Publishing Technology- Use of Microsoft Office (YToguns)`);
  const [proftext, setProftext] =useState(`•Microsoft’s Office and Packages, Photoshop, and Coreldraw.\n•Customer Service and Problem Solving \n•Expert in Graphical and Visual art \n•programming Languages HTML, CSS, C++, JAVASCRIPT, React,SASS,Bootstrap 4 & 5, Typescript, Core Animation, Wordpress etc. \n•Motion presentation \n•Motion graphics \n•2d cartoons and animations \nOTHER RELEVANT SKILLS \n• Interpersonal Skills, Good Pictorial Communication, with Ability to work with little supervision \n• Teamwork, Team building and Potential to Work in Collaboration with Group of People \n• Good Initiative in Planning and Administrative Work \n• Coaching and Developing People \n• Good interpersonal relation \n• Analytical reasoning and data presentation`);
  const [relonevalue, setRelonevalue] =useState('PHOTOFAST STUDIO LTD');
  const [reltwovalue, setReltwovalue] =useState('STARLIGHT ENTERPRISE LTD');
  const [relthreevalue, setRelthreevalue] =useState('REMOTE JOBS');
  const [relonetext, setRelonetext] =useState(`Feb 2017 - December 2017 Graphic Designer/ Video Editor/ Animator FUNCTIONS \n• Responsible for designing of company’s and customers jobs, Handling of Online Social Account of the company as well as publicity specialist which involves using special designs and motion videos to advertise for the company. \n• Also responsible for training of students and trainees on the use of graphical and motion art softwares and providing of materials that would be used for doing so. Also conducting online classes for the part-time and remote students and trainees.`);
  const [reltwotext, setReltwotext] =useState(`May 2019 - June 2021 UI/UX designer(illustrator) and FrontEnd Developer FUNCTIONS \n• Making over 10 web designs monthly UI/UX \n• Development of the FrontEnd of Websites and WebApps \n• Discuss and agree payment plans of clients for jobs produces \n• Assistant to the BackEnd Developer in web development \n• Masterminding the course of action to produce captivating and Interactive WebSites and WebApps by creative programming \n• Customer questions or Complaints Handler \n• Communication and interpersonal skills as well as the ability to build collaborative and sustainable working relationships with both internal and external stakeholders. A highly efficient individual with extensive experience as part of a team to deliver outstanding customer care and service with focus on customer experience and satisfaction. \nACHIEVEMENTS: \nWas given bonuses of over #100,000 in a month.Won the most productive agent of the month twice`);
  const [relthreetext, setRelthreetext] =useState(`• Worked on group Projects on GitHub \n• Remote graphic designer for several Companies \n• Remote web designer/ UI designer for Several Companies \n• Remote FrontEnd developer for Several Companies \n• Remote Video Editor for Several Companies \n• SingleHandedly taken on large projects involving some or all of FrontEnd development, Graphic designing, Motion graphics for Individuals and Companies in times past`);
  
  const [reftext, setReftext] =useState(`CONTACT: \nE-MAIL: \nmongsolomon@gmail.com mongisrael1234@gmail.com \nTELEPHONE: \n+2347053005600 +2349021564138 \nWEBSITE: \nwww.trust.air.co \nPOSTAL ADDRESS: \nP.O. Box 209, Ifako-Ijaiye, Lagos State, Nigeria`);



  const webviewSwitch = () => {
    setThewebview(!thewebview);
  };




  return (
      <SafeAreaView style={styles.cont}>
      <StatusBar style={'light'} />


      <View style={styles.modalFirstrow }>
</View>
<View style={styles.modalFirstrow }>
</View>
{/* The WebView and it tenary operator to toggle it */}
{thewebview ? 
//       <View style={styles.webviewview } >
//         <Ionicons name="arrow-back" style={styles.webviewicon } onPress={webviewSwitch}/>
//     <WebView
//   source={{ uri: 'https://github.com/Mongopark' }}
//   style={styles.webview }/>
//   </View>
<Edit onPress={webviewSwitch} acatext={acatext} proftext={proftext} relonevalue={relonevalue} reltwovalue={reltwovalue} relthreevalue={relthreevalue} relonetext={relonetext} reltwotext={reltwotext} relthreetext={relthreetext} reftext={reftext} setAcatext={setAcatext} setProftext={setProftext} setRelonevalue={setRelonevalue} setReltwovalue={setReltwovalue} setRelthreevalue={setRelthreevalue} setRelonetext={setRelonetext} setReltwotext={setReltwotext} setRelthreetext={setRelthreetext} setReftext={setReftext} /> : 

  



      <ScrollView
       style={styles.modal }>
       
        <View style={styles.modalView }>
        <View style={styles.modalHead }>
        <Image source={require('./assets/profilepic.jpeg')} style={styles.loadingpng } />
</View>




<View style={styles.modalFirstrow }>
</View>




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
            <Pressable onPress={webviewSwitch} style={[styles.modalThirdrow, {paddingBottom: 20, }]}><Text style={styles.modalFourthtext }>https://github.com/Mongopark</Text></Pressable>
            </View>

            <View style={ styles.modalFourthrow }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>BIO</Text>
            <Text style={styles.modalFirsttext }>Mobile Development & Web Development  This is a profile of a young undergraduate with traits below and aim of working with a team of skilled and dedicated professionals from whom he can learn, work and collaborate.</Text>
</View>
             </View>





        <View style={styles.modalFirstrow }>
</View>
<View style={styles.cvView }><Text style={styles.cvText }>Curriculum Vitae</Text>
<TouchableHighlight onPress={webviewSwitch} style={styles.modalThirdbutton }>
              <Text style={styles.modalThirdbuttontext } >Edit CV</Text>
              </TouchableHighlight>
</View>
<View style={styles.modalFirstrow }>
</View>




<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>ACADEMIC & PROFESSIONAL QUALIFICATION</Text>
            <Text style={styles.modalFirsttext }>{acatext}</Text>
            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>PROFESSIONAL SKILLS</Text>
</View>
            <Text style={styles.modalFirsttext }>{proftext}</Text>
            </View>
        </View>



        <View style={styles.modalFirstrow }>
</View>





<View style={[styles.modalFourthrow,{paddingBottom: 20, }] }>
<View style={[styles.modalThirdrow,{marginBottom: 20, paddingBottom: 20, }] }>
            <View style={styles.modalTextwrapper }>
            <Text style={styles.modalThirdtext }>RELEVANT WORK EXPERIENCES</Text>
            <Text style={styles.cvText}>{relonevalue}</Text>
            <Text style={styles.modalFirsttext }>
            {relonetext}.</Text>

<Text style={styles.cvText}>{reltwovalue}</Text>
            <Text style={styles.modalFirsttext }>{reltwotext}</Text>
<Text style={styles.cvText}>{relthreevalue}</Text>
            <Text style={styles.modalFirsttext }>{relthreetext}</Text>
            </View>
</View>
            <View>
              <View style={styles.modalIconwrapper }>
            <Text style={styles.modalThirdtext }>REFERENCES:</Text>
</View>
<Text style={styles.cvText}>Available upon request</Text>
            <Text style={styles.modalFirsttext }>{reftext}</Text>
            </View>
        </View>








        </View>

        </ScrollView>
         }





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
    },
    modalThirdtext: {
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
      padding: 15,
      justifyContent: 'flex-end',
      backgroundColor: '#36454f',
    },
    switchlabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
    },
    switch: {
      trackColor: { false: 'grey', true: '#cccccc' },
    },
    webviewview: {
      width: '100%',
      height: '120%',
      backgroundColor: '#36454f',
      },
        webviewicon: {
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginTop: 25,
        fontSize: 24,
        color: 'white',
        },
        webview: { flex: 1,
        backgroundColor: '#36454f',
        },
        cvView: { 
          backgroundColor: '#36455e',
          padding: 10,
          alignItems: 'center',
          },
          cvText: {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: 'white',
            },
      })




export default App;