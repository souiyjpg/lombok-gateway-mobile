import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const galleryImages = [
  {
    id: 1,
    title: 'Sunset at Senggigi Beach',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/381dafdc-ae43-477f-934d-0e3c2b51ad49.png',
  },
  {
    id: 2,
    title: 'Underwater Life of Gili',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a9e2be1-b1e8-4154-bb76-1c7767310968.png',
  },
  {
    id: 3,
    title: 'The Charm of Pink Beach',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc7d7edf-c125-4abf-babe-4a050446c1ab.png',
  },
  {
    id: 4,
    title: 'Sasak Culture in Sade Village',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b279da1-2bc3-4618-9772-e831692112f2.png',
  },
  {
    id: 5,
    title: 'The Freshness of Tiu Kelep Waterfall',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eda12ada-d11a-4763-941a-599c92f9581d.png',
  },
  {
    id: 6,
    title: 'Sembalun Scenery',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb350665-c1f0-48e2-8244-b2d43687a4b7.png',
  },
  {
    id: 7,
    title: 'The Beauty of Gili Meno',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5c691274-94a2-4a71-b00b-fcbd4bb08a72.png',
  },
  {
    id: 8,
    title: 'Gentle Waves of Selong Belanak',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b01c3fce-dc3a-49c0-ae1a-98f7e4e02f06.png',
  },
];

export default function GalleryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Wonderlust Journey</Text>
      <Text style={styles.subtitle}>Take your fun in Lombok as your best experience in your holiday.</Text>
      
      <View style={styles.galleryGrid}>
        {galleryImages.map((item) => (
          <View key={item.id} style={styles.galleryItem}>
            <Image source={{ uri: item.image }} style={styles.galleryImage} />
            <Text style={styles.galleryTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4ff',
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#1e40af',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 24,
    textAlign: 'center',
  },
  galleryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  galleryItem: {
    width: (width - 48) / 2,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  galleryImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  galleryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1e40af',
    textAlign: 'center',
  },
});
