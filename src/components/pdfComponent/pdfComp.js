/* eslint-disable react/prop-types */
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff'
  },
  image: {
    height: 200,
    width: 150
  }
});

function PdfComp(props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image style={styles.image} source={props.logo} />
          <Text>Hello world, I am coming for your bread</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfComp;
