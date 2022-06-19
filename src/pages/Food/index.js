import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  IconFilter,
  IconSearch,
  IconCustomer,
  ImageProd1,
  ImageProd2,
  ImageProd3,
  ImageProd4,
  IconFilterBlue,
} from '../../assets';

const Food = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        <View style={styles.Top} />
        <View style={styles.formSearch}>
          <TextInput style={styles.form} />
          <IconSearch width={25} style={styles.iconSearch} />
          <TouchableOpacity onPress={() => console.log('filter')}>
            <IconFilter width={35} style={styles.iconFilter} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            <TouchableOpacity style={styles.badgeMain}>
              <Text style={styles.textBadge}>Main Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeAppatizer}>
              <Text style={styles.textBadge}>Appatizer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeDessert}>
              <Text style={styles.textBadge}>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeCoffee}>
              <Text style={styles.textBadge}>Coffee Based</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeNonCoffee}>
              <Text style={styles.textBadge}>Non Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeNonCoffee}>
              <Text style={styles.textBadge}>Non Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeNonCoffee}>
              <Text style={styles.textBadge}>Non Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeNonCoffee}>
              <Text style={styles.textBadge}>Non Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.badgeNonCoffee}>
              <Text style={styles.textBadge}>Non Coffee</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Prod */}
        <ScrollView
          style={styles.scrollViewVertical}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          vertical={true}>
          <View style={styles.Top} />
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd1} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Oriental</Text>
                <Text style={styles.TextSubProd}>IDR31.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd2} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Spagheti aglio olio</Text>
                <Text style={styles.TextSubProd}>IDR15.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd3} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd4} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Takoyaki Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={styles.Top} />
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd1} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Oriental</Text>
                <Text style={styles.TextSubProd}>IDR31.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd2} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Spagheti aglio olio</Text>
                <Text style={styles.TextSubProd}>IDR15.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd3} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd4} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Takoyaki Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={styles.Top} />
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd1} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Oriental</Text>
                <Text style={styles.TextSubProd}>IDR31.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd2} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Spagheti aglio olio</Text>
                <Text style={styles.TextSubProd}>IDR15.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd3} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd4} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Takoyaki Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View style={styles.Top} />
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd1} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Oriental</Text>
                <Text style={styles.TextSubProd}>IDR31.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd2} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Spagheti aglio olio</Text>
                <Text style={styles.TextSubProd}>IDR15.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd3} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Nasi Goreng Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
            {/*  */}
            <View style={{marginLeft: 20}}>
              <Image style={styles.imgProd} source={ImageProd4} />
              <View style={styles.containerTextProd}>
                <Text style={styles.TextTitleProd}>Takoyaki Udang</Text>
                <Text style={styles.TextSubProd}>IDR12.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.Top} />
        </ScrollView>
      </View>
      <View style={styles.contentRight}>
        <View style={styles.containerViewRightHeader}>
          <Image source={IconCustomer} style={styles.iconRight} />
          <Text style={styles.textCustomer}>New Customer</Text>
          <Image source={IconFilterBlue} style={styles.iconRight} />
        </View>
        {/* Content */}
        {/* Last Content */}
        <TouchableOpacity style={styles.containerClearSale} activeOpacity={0.6}>
          <Text style={styles.textClearSale}>Clear Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerCharge} activeOpacity={0.6}>
          <Text style={styles.textCharge}>Charge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  Top: {
    marginTop: 20,
  },
  formSearch: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '95%',
    height: 50,
  },
  iconSearch: {
    marginTop: 5,
    marginLeft: -40,
  },
  iconFilter: {
    marginTop: -10,
    marginLeft: 40,
  },
  form: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#09A6FF',
    width: '90%',
    marginLeft: 20,
  },
  contentLeft: {
    width: '60%',
    backgroundColor: '#fff',
    paddingLeft: 80,
  },
  contentRight: {
    width: '40%',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#000000',
  },
  textBadge: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
    marginTop: 10,
  },
  badgeMain: {
    width: 100,
    height: 40,
    backgroundColor: '#09A6FF',
    borderRadius: 8,
  },
  badgeAppatizer: {
    width: 100,
    height: 40,
    backgroundColor: '#FFC908',
    borderRadius: 8,
    marginLeft: 10,
  },
  badgeDessert: {
    width: 100,
    height: 40,
    backgroundColor: '#008836',
    borderRadius: 8,
    marginLeft: 10,
  },
  badgeCoffee: {
    width: 100,
    height: 40,
    backgroundColor: '#FF2608',
    borderRadius: 8,
    marginLeft: 10,
  },
  badgeNonCoffee: {
    width: 100,
    height: 40,
    backgroundColor: '#10C500',
    borderRadius: 8,
    marginLeft: 10,
  },
  scrollView: {
    marginTop: 20,
    paddingLeft: 20,
  },
  imgProd: {
    width: 150,
    height: 150,
  },
  containerTextProd: {
    backgroundColor: '#8EC9EA',
    padding: 10,
    borderRadius: 8,
    height: 54,
    width: 150,
  },
  TextTitleProd: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  TextSubProd: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  scrollViewVertical: {
    flexDirection: 'column',
  },
  containerViewRightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2C475A',
    padding: 15,
  },
  iconRight: {
    height: 50,
    width: 50,
  },
  textCustomer: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  containerClearSale: {
    position: 'absolute',
    bottom: 80,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.38)',
    flex: 1,
    width: '100%',
  },
  containerCharge: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2C475A',
    flex: 1,
    width: '100%',
  },
  textClearSale: {
    padding: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  textCharge: {
    padding: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
