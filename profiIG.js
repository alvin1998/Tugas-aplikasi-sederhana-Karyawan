import React from "react";
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { style } from './style/StyleIg';
import iconMenu from './image/icon/menu.png';
import AddRound from './image/icon/icons8-add-new-50.png';
import MoreIcon from './image/icon/icons8-more-64.png';
import GridIcon from './image/icon/pixels.png';
import PlayIcon from './image/icon/play-button.png';
import UserIcon from './image/icon/user.png';
import HomeIcon from './image/icon/home.png';
import Search from './image/icon/search.png';
import Player from './image/icon/play.png';
import ShoppingBag from './image/icon/shopping-bag.png';
import FotoProfil from './image/tech.jpg';


const profilIG = () => {
  return (
    <View style={style.container}>
      <View style={style.viewRow1}>
        <View style={{ flex: 5, backgroundColor: 'white', justifyContent: "center" }}>
          <Text style={{ fontSize: 20, paddingStart: 10 }}>Alvin Ade Sindy</Text>
        </View>
        <TampilanGambar simbol={AddRound}></TampilanGambar>
        <TampilanGambar simbol={iconMenu}></TampilanGambar>
      </View>
      <View style={style.viewRow2}>
        <GambarProfil gambar={FotoProfil}></GambarProfil>
        <CardProfil angka='100' keterangan='Postingan' />
        <CardProfil angka='1000' keterangan='Pengikut' />
        <CardProfil angka='2000' keterangan='Mengikuti' />
      </View>
      <View style={{ flex: 2, backgroundColor: 'white', paddingStart: 10 }}>
        <Text >Alvin Ade Sindy</Text>
        <Text style={style.subDescription}>AlvinAde@gmail.com</Text>
        <Text >Motifation</Text>
        <Text >lorem ipsum dolor amet</Text>
      </View>
      <View style={style.viewRow1}>
        <View style={{flex:7, justifyContent:"center", paddingStart:10}}>
            <Button title="Edit Profil"></Button>
        </View>
        <TampilanGambar simbol={MoreIcon}></TampilanGambar>
      </View>
      <View style={style.viewRow2}>
      <ScrollView horizontal={true}>
        <CardStory foto={FotoProfil} keFoto='story test'/>
        <CardStory foto={FotoProfil} keFoto='story test'/>
        <CardStory foto={FotoProfil} keFoto='story test'/>
        <CardStory foto={FotoProfil} keFoto='story test'/>
        <CardStory foto={FotoProfil} keFoto='story test'/>
      </ScrollView>
      </View>
      <View style={style.viewRow1}>
      <TampilanGambar simbol={GridIcon}></TampilanGambar>
      <TampilanGambar simbol={PlayIcon}></TampilanGambar>
      <TampilanGambar simbol={UserIcon}></TampilanGambar>
      </View>
      <View style={style.viewRow2}>
        <Image style={style.gridGambar} source={FotoProfil}></Image>
        <Image style={style.gridGambar} source={FotoProfil}></Image>
        <Image style={style.gridGambar} source={FotoProfil}></Image>
      </View>

      <View style={style.viewRow1}>
      <TampilanGambar simbol={HomeIcon}></TampilanGambar>
      <TampilanGambar simbol={Search}></TampilanGambar>
      <TampilanGambar simbol={Player}></TampilanGambar>
      <TampilanGambar simbol={ShoppingBag}></TampilanGambar>
      <TampilanGambar simbol={FotoProfil}></TampilanGambar>
      </View>
    </View>
  );
}

const TampilanGambar = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image style={style.IconGambar} source={props.simbol}></Image>
    </View>
  );
}

const GambarProfil = (props) => {
  return (
    <View style={style.viewGambar}>
      <Image style={style.gambarProfil} source={props.gambar}></Image>
    </View>
  );
}

const CardProfil = (props) => {
  return (
    <View style={style.viewGambar}>
      <Text style={style.textAngka}>{props.angka}</Text>
      <Text style={style.textAngkaSub}>{props.keterangan}</Text>
    </View>
  );
}
const CardStory = (props) => {
  return (
    <View style={style.viewStory}>
        <Image style={style.gambarProfil} source={props.foto}></Image>
        <Text style={{padding:10}}>{props.keFoto}</Text>
    </View>
  );
}

export default profilIG;