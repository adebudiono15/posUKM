import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  MenuDrinkNonActive,
  MenuFoodActive,
  MenuFoodNonActive,
  MenuInvoiceActive,
  MenuInvoiceNonActive,
  MenuLogout,
  MenuOrderActive,
  MenuOrderNonActive,
} from '../../../assets';
const TabNavigator = ({label, isFocused, onPress, onLongPress}) => {
  const Icon = () => {
    if (label === 'FoodPages') {
      return isFocused ? (
        <MenuFoodActive width={40} height={40} />
      ) : (
        <MenuFoodNonActive width={40} height={40} />
      );
    }
    if (label === 'InvoicePages') {
      return isFocused ? (
        <MenuInvoiceActive width={40} height={40} />
      ) : (
        <MenuInvoiceNonActive width={40} height={40} />
      );
    }
    if (label === 'OrderPages') {
      return isFocused ? (
        <MenuOrderActive width={40} height={40} />
      ) : (
        <MenuOrderNonActive width={40} height={40} />
      );
    }
    if (label === 'DrinkPages') {
      return isFocused ? (
        <MenuDrinkNonActive width={40} height={40} />
      ) : (
        <MenuDrinkNonActive width={40} height={40} />
      );
    }
    if (label === 'Logout') {
      return isFocused ? (
        <MenuLogout width={40} height={40} style={styles.menuLogout} />
      ) : (
        <MenuLogout width={40} height={40} style={styles.menuLogout} />
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon key={isFocused} />
    </TouchableOpacity>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 90,
  },
  menuLogout: {
    marginTop: 100,
  },
});
